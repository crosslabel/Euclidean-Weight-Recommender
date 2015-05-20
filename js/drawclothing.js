// keep track of which clothing number we are on
var itemCount = 0;

function createItem(container, rgb, showPattern, imgElementID, brand, oldprice, newprice, shipsFrom, material, isTrending, isNew, clicks, views, likes) {
	
	// increment counter
	itemCount += 1;
	
	// create canvas
	var canvas = document.createElement("canvas");
	canvas.width = 200;
	canvas.height = 200;
	
	// update material
	$("#stat_material").text(material);
	
	// create data model
	var str = '<div>';
	str += '<span class="stat_brand">'+brand+'</span>';
	str += '<br/>';
	str += '<span class="stat_name">Item ' + itemCount+'</span>';
	str += '<br/>';
	str += '<img class="icon" src="http://icons.iconarchive.com/icons/icons-land/vista-map-markers/256/Map-Marker-Marker-Outside-Pink-icon.png"/> ';
	str += '<span class="stat_ships_from">'+shipsFrom+'</span> ';
	str += '<img class="icon" src="http://icons.iconarchive.com/icons/custom-icon-design/pretty-office-11/512/coin-us-dollar-icon.png"/> ';
	str += '<span class="stat_old_price">'+oldprice+'</span> ';
	str += '<span class="stat_new_price">'+newprice+'</span> ';
	str += '<br/>';
	str += '<img class="icon" src="http://www.cmsformobile.com/uploads/images/developer/dev_icon_views.png"/> ';
	str += '<span class="stat_views">'+views+'</span> ';
	str += '<img class="icon" src="http://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/2000px-Heart_coraz%C3%B3n.svg.png"/> ';
	str += '<span class="stat_likes">'+likes+'</span> ';
	str += '<img class="icon" src="http://www.algodoo.com/images/icon_buy.png"/> ';
	str += '<span class="stat_buy_clicks">'+clicks+'</span> ';
	str += '</div>';
	
	// update the model text on to the page
	var model = $(str);
	
	// update the price if there is a sale
	if (oldprice == newprice) {
		model.find(".stat_old_price").css("text-decoration", "none");
		model.find(".stat_new_price").hide();
	} else {
		model.find(".stat_old_price").css("text-decoration", "line-through");
		model.find(".stat_new_price").show();
	}
	
	// add model and canvas
	container.append(canvas);
	container.append(model);
	
	// draw the clothing item
	drawClothing(canvas, rgb, showPattern, imgElementID, brand, oldprice, newprice, shipsFrom, material, isTrending, isNew, clicks, views, likes);
}

// function to draw clothing item to canvas, and show stats
function drawClothing(canvas, rgb, showPattern, imgElementID, brand, oldprice, newprice, shipsFrom, material, isTrending, isNew, clicks, views, likes) {

	// get canvas and image src
	var ctx = canvas.getContext("2d");
	var imgElement = document.getElementById(imgElementID);
	
	// get rgb color
	var tintColorR = rgb.r, tintColorG = rgb.g, tintColorB = rgb.b;
	
	// get dimensions of image
	var w = canvas.width, h = canvas.height;

	// clear canvas and then draw the image
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.drawImage(imgElement, canvas.width/2 - w/2, canvas.height/2 - h/2, w, h);

	// get the image raw data
	var map = ctx.getImageData(0,0,canvas.width,canvas.height);
	var imdata = map.data;

	// add tint color to image
	for(var p = 0, len = imdata.length; p < len; p+=4) {
	
		// if alpha value is 0, meaning fully transparent
		if (imdata[p+3] != 0) {
			imdata[p] = (imdata[p] + tintColorR)/2;
			imdata[p+1] = (imdata[p+1] + tintColorG)/2;
			imdata[p+2] = (imdata[p+2] + tintColorB)/2;
		}
		
		// add a stripy pattern if needed
		if (showPattern && (p % 31 == 0 || p % 32 == 0)) {
			imdata[p] /= 2;
			imdata[p+1] /= 2;
			imdata[p+2] /= 2;
		}
	}

	// save changes
	ctx.putImageData(map,0,0);

	// draw trending and new if needed
	if (isTrending) {
		ctx.font="9px Georgia";
		ctx.fillStyle = '#000000';
		ctx.fillText("Trending",6,11);
	}
	if (isNew) {
		ctx.font="9px Georgia";
		ctx.fillStyle = '#000000';
		ctx.fillText("New",canvas.width-25,11);
	}
}