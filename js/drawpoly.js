function updateCategoryPolygon() {
	// get data for all classes
	var a = normalDivisorCats();

		// draw the new updated weights on canvas
	var catdat = allClasses.reduce(function(lst, cls) { 
		lst.push({
			name : cls.getName(),
			prob : a == 0 ? 0 : (cls.getClasstotal() / a)
		});
		return lst;
	}, []);
	drawPoly("catWeightPrefCanvas", catdat);
	
	// draw the data values
	var domain = allClasses.reduce(function(obj, cls) { 
		obj[cls.getName()] = {freq:cls.getClasstotal()}
		return obj;
	}, {});
	setDataTable(a, domain, "catWeightDetails");
}

// function to draw polygon
function drawPoly(canvasID, data) {
	
	// get canvas
	var canvas = document.getElementById(canvasID);
	var c2 = canvas.getContext('2d');
	c2.font="9px Georgia";
	
	// clear canvas
	c2.clearRect(0, 0, canvas.width, canvas.height);

	// set color
	c2.beginPath();
	
	// calculate max length of line
	var length = Math.min(canvas.width/2, canvas.height/2) - 5;
	// calculate numb of slices
	var sliceLength = 360/data.length;
	// prepare list for x,y coordinates
	var coorList = [];
	
	// loop through all weights
	for (var i=0; i<data.length; i+=1) {
		var cat = data[i];                                 // get category
		var weight = cat.prob;                             // get weight value
		var angle = i * sliceLength * (Math.PI/180);       // get angle
		
		// draw names of the keys
		var x = canvas.width/2 + length * 0.8 * Math.cos(angle);// get x
		var y = canvas.height/2 + length * 0.8 * Math.sin(angle); // get y
		var txt = cat.name;
		c2.fillStyle = '#000000';
		c2.fillText(txt,x-20,y);
		
		// save the coordinates
		c2.fillStyle = '#ff4848';
		x = canvas.width/2 + length * weight * Math.cos(angle);  // get x
		y = canvas.height/2 + length * weight * Math.sin(angle); // get y
		coorList.push([x,y]);                                     
		
		// draw the line
		if (i==0) {
			c2.moveTo(x, y);
		} else {
			c2.lineTo(x, y);
		}
	}
	
	// save changes
	c2.closePath();
	c2.fill();
	
	// loop through all weights
	for (var i=0; i<coorList.length; i+=1) {
		var coor = coorList[i];
		x = coor[0], y = coor[1]; // get x,y again
		
		// draw the line
		c2.moveTo(canvas.width/2, canvas.height/2);
		c2.lineTo(x, y);
	}
	
	// set color
	c2.strokeStyle = '#ac0000';
	// save changes
	c2.stroke();				
}