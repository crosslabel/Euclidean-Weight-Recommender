// helper functions
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}
function hexToRgb(hex) {
	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result ? {
		r: parseInt(result[1], 16),
		g: parseInt(result[2], 16),
		b: parseInt(result[3], 16)
	} : null;
}
function normalDivisorCats() {
	return Math.sqrt(allClasses.reduce(function(total, num) { 
		var a = num.getClasstotal();
		return total + (a*a);
	}, 0));
}
function setDataTable(divisor, domain, textcontainerID) {
	var keys = Object.keys(domain);
	
	var text = "<table class='category_stats'><tr><td><img class='mini-icon' src='img/icons/key-icon.png'/></td><td>v</td><td>||v||</td></tr>";
	text += keys.reduce(function(acc, key) { 
		var freq = parseFloat(domain[key].freq).toFixed(2);
		var prob = divisor == 0 ? 0 : parseFloat(domain[key].freq / divisor).toFixed(2);
		return acc + "<tr><td>" + key + ":</td><td>" + freq + "</td><td>" + prob + "</td></tr>";
	}, "");
	text += "</table>";
	
	$("#" + textcontainerID).html(text);
}

// record time of viewing
var startTime = null;
var clickedLike = null;

// function to get random weights for a product
function updateItem() {

	var oldPrice = getRandomInt(10, 500);
	var newPrice = Math.random() < 0.5 ? oldPrice : oldPrice * 0.8;

	// get random values from weight arrays
	var colorKey = colorClass.getRandomKey();
	var patternKey = patternClass.getRandomKey();
	var categoryKey = categoryClass.getRandomKey();
	var brandKey = brandClass.getRandomKey();
	var priceKey = priceClass.getKey(newPrice);
	var shipfromKey = shipClass.getRandomKey();
	var materialKey = materialClass.getRandomKey();
	// skip size, quality, motivation
	
	// calculate value from it
	var rgb = colorKey[1];
	var showPattern = patternKey[1];
	var imgElementID = categoryKey[1];
	var brand = brandKey[0];
	var oldprice = Math.ceil( oldPrice ); 
	var newprice = Math.ceil( newPrice );
	var shipsFrom = shipfromKey[0];
	var material = materialKey[0];
	var isTrending = getRandomInt(0, 10) > 7;
	var isNew = getRandomInt(0, 10) > 7;
	var clicks = getRandomInt(0, 10000);
	var views = getRandomInt(clicks, 2*clicks);
	var likes = getRandomInt(0, views + 1);
	
	
	// draw the clothing item
	var container = $("#productContainer");
	container.empty();
	createItem(container, rgb, showPattern, imgElementID, brand, oldprice, newprice, shipsFrom, material, isTrending, isNew, clicks, views, likes);

	
	var wUpdate = function(scale) {
		// update the weights for the liked item. Skip size
		colorClass.addFreq(colorKey[0], scale);
		patternClass.addFreq(patternKey[0], scale);
		categoryClass.addFreq(categoryKey[0], scale);
		brandClass.addFreq(brandKey[0], scale);
		priceClass.addFreq(priceKey, scale);
		shipClass.addFreq(shipfromKey[0], scale);
		materialClass.addFreq(materialKey[0], scale);

		if (clicks > views/2) qualityClass.addFreq('clicksonbuy', scale);
		if (likes > views/2) qualityClass.addFreq('likes', scale);
		if (views > clicks + likes) qualityClass.addFreq('views', scale);
		
		if (isTrending) motivationClass.addFreq('trending', scale);	
		if (isNew) motivationClass.addFreq('new', scale);	
		if (oldprice > newprice) motivationClass.addFreq('sale', scale);	
	};
	
	
	clickedLike = false;
	
	// handle the details panel
	$("#details_panel").hide();
	$("span.button.click").unbind('click').on('click', function() {
		$("#details_panel").show();
		startTime = new Date();  // set the time of viewing
		
		wUpdate(1);	
	});
	
	// handle like button
	$("span.button.like").unbind('click').on('click', function() {
		$(this).unbind('click');
		clickedLike = true;
		$(".stat_likes").text((parseInt($(".stat_likes").text(), 10)+1));
		
		wUpdate(3);
	});
	
	// set up buy button
	$("span.button.buy").unbind('click').on('click', function() {
		var sizeKey = $(this).attr("data-size"), scale = 6;
		
		// update the weights for the liked item
		wUpdate(scale);
		sizeClass.addFreq(sizeKey, scale);
		
		// show next clothing item
		updateItem();
	});
	

	// set up sort/filter button
	$("span.button.sortfilter").unbind('click').on('click', function() {
		var catdat = $(this).attr("data-cat");
		
		for (var i=0; i<allClasses.length; i+=1) {
			var cls = allClasses[i], n = cls.getName();
			if (n == catdat) {
				cls.addClassFreq();
				updateCategoryPolygon();
				return;
			}
		}
	});
	
	// set up next button
	$("#next_button").unbind('click').on('click', function() {
		if (!clickedLike && $("#details_panel").is(":visible")) {
			var endTime = new Date();
			var secondsSpent = (endTime - startTime)/1000;
			if (secondsSpent <= 4) {
				wUpdate(-3);
			}
		}
		
		updateItem();
	});
}

$(document).ready(function() {
	updateItem();
	updateCategoryPolygon();
});