// a list to hold the 10 attribute weight classes
var allClasses = [];

/*
name of attribute class
id of DOM element to hold the stats of the attribute class
id of the canvas element
domain values
function that gets a key with a input value
*/
var domainClass = function(name, textcontainerID, canvasID, domain, valfunc, getkeyfunc) {
	
	// store the frequency of the class weight
	var classtotal = 1;
	
	// store it in the above list
	allClasses.push(this);
	
	// add the text to the DOM when this instance is created
	$(document).ready(function() {
		addText();
		drawPoly(canvasID, domainToPolyData());
	});
	
	// pick a random property key from the domain
	var pickRandomProperty = function() {
		var result, count = 0;
		for (var prop in domain)
			if (domain.hasOwnProperty(prop)) {
				if (Math.random() < 1/++count) {
				   result = prop;
				}
			}
		return result;
	};
	
	// get demoninator for normalizing vector
	var getnormaldivisor = function() {
		return Math.sqrt(Object.keys(domain).reduce(function(total, key) { 
			var a = domain[key].freq;
			return total + (a*a);
		}, 0));
	};
	
	// write the stats text onto the DOM
	var addText = function() {
		var a = getnormaldivisor();
		setDataTable(a, domain, textcontainerID);
	};
	
	// return data used to draw the polygon
	var domainToPolyData = function() {
		var a = getnormaldivisor();
		return Object.keys(domain).reduce(function(lst, key) { 
			lst.push({
				name : key,
				prob : a == 0 ? 0 : Math.max(0, (domain[key].freq / a))
			});
			return lst;
		}, []);
	};
	
	// get the name
	this.getName = function() {
		return name;
	};
	
	// get a random key and the key's value
	this.getRandomKey = function() {
		var key = pickRandomProperty(domain), val = domain[key].val;
		return [key, valfunc(val)];
	};
	
	// get a key from an input
	this.getKey = function(val) {
		return getkeyfunc(domain, val);
	};
	
	// update the weight 
	this.addFreq = function(key, scale) {
		var a = normalDivisorCats();
		if (a == 0) {
			domain[key].freq = 0;
		} else {
			domain[key].freq += (classtotal / a) * scale;
		}
		addText();
		drawPoly(canvasID, domainToPolyData());
	};
	
	// return the weight of the class
	this.getClasstotal = function() {
		return classtotal;
	};
	
	// update weight of the class
	this.addClassFreq = function() {
		classtotal += 1;
	};
};



var colorClass = new domainClass("color", "colorDetails", "colorPrefCanvas", {
	'red' : {val: '#ff0004', freq : 0},
	'blue' : {val: '#0000ff', freq : 0},
	'green' : {val: '#00ff00', freq : 0},
	'yellow' : {val: '#f6ff00', freq : 0},
	'orange' : {val: '#ff9000', freq : 0},
	'purple' : {val: '#c600ff', freq : 0},
	'white' : {val: '#ffffff', freq : 0},
	'black' : {val: '#000000', freq : 0}
}, hexToRgb, function(domain, val) {});

var patternClass = new domainClass("pattern", "patternDetails", "patternPrefCanvas", {
	'yes' : {val: true, freq : 0},
	'no' : {val: false, freq : 0}
}, function(val) {return val;}, function(domain, val) {});
	
var sizeClass = new domainClass("size", "sizeDetails", "sizePrefCanvas", {
	'XXS' : {val: 0.4, freq : 0},
	'XS' : {val: 0.5, freq : 0},
	'S' : {val: 0.6, freq : 0},
	'M' : {val: 0.7, freq : 0},
	'L' : {val: 0.8, freq : 0},
	'XL' : {val: 0.9, freq : 0},
	'XXL' : {val: 1, freq : 0}
}, function(val) {return val;}, function(domain, val) {});
	
var categoryClass = new domainClass("category", "categoryDetails", "catPrefCanvas", {
	'w_Activewear' : {val: 'source_shirt', freq : 0},
	'w_Blazers' : {val: 'source_shirt', freq : 0},
	'w_Coats & Jackets' : {val: 'source_shirt', freq : 0},
	'w_Denim' : {val: 'source_shirt', freq : 0},
	'w_Dresses' : {val: 'source_shirt', freq : 0},
	'w_Hoodies & Sweatshirts' : {val: 'source_shirt', freq : 0},
	'w_Jeans' : {val: 'source_shirt', freq : 0},
	'w_Jumpers' : {val: 'source_shirt', freq : 0},
	'w_Cardigans' : {val: 'source_shirt', freq : 0},
	'w_Lingerie & Nightwear' : {val: 'source_shirt', freq : 0},
	'w_Pants' : {val: 'source_shirt', freq : 0},
	'w_Shirts & Blouses' : {val: 'source_shirt', freq : 0},
	'w_Shoes' : {val: 'source_shirt', freq : 0},
	'w_Shorts' : {val: 'source_shirt', freq : 0},
	'w_Skirts' : {val: 'source_shirt', freq : 0},
	'w_Socks & Tights' : {val: 'source_shirt', freq : 0},
	'w_Sweaters' : {val: 'source_shirt', freq : 0},
	'w_Swimwear' : {val: 'source_shirt', freq : 0},
	'w_T-Shirts' : {val: 'source_shirt', freq : 0},
	'w_Tops' : {val: 'source_shirt', freq : 0},
	'w_Trousers & Leggings' : {val: 'source_shirt', freq : 0},
	'm_Activewear' : {val: 'source_shirt', freq : 0},
	'm_Blazers & Vests' : {val: 'source_shirt', freq : 0},
	'm_Cardigans' : {val: 'source_shirt', freq : 0},
	'm_Coats & Jackets' : {val: 'source_shirt', freq : 0},
	'm_Dress shirts' : {val: 'source_shirt', freq : 0},
	'm_Jackets' : {val: 'source_shirt', freq : 0},
	'm_Jeans' : {val: 'source_shirt', freq : 0},
	'm_Long sleeves' : {val: 'source_shirt', freq : 0},
	'm_Outerwear' : {val: 'source_shirt', freq : 0},
	'm_Pants & Chinos' : {val: 'source_shirt', freq : 0},
	'm_Polo shirts' : {val: 'source_shirt', freq : 0},
	'm_Shirts' : {val: 'source_shirt', freq : 0},
	'm_Shorts' : {val: 'source_shirt', freq : 0},
	'm_Sleepwear' : {val: 'source_shirt', freq : 0},
	'm_Socks' : {val: 'source_shirt', freq : 0},
	'm_Suits' : {val: 'source_shirt', freq : 0},
	'm_Sweaters' : {val: 'source_shirt', freq : 0},
	'm_Swimwear' : {val: 'source_shirt', freq : 0},
	'm_T-Shirts' : {val: 'source_shirt', freq : 0},
	'm_Underwear' : {val: 'source_shirt', freq : 0}
}, function(val) {return val;}, function(domain, val) {});
	
var brandClass = new domainClass("brand", "brandDetails", "brandPrefCanvas", {
	'Everlane' : {freq : 0},
	'American Giant' : {freq : 0},
	'Beyond' : {freq : 0},
	'Grown and Sewn' : {freq : 0},
	'Gitman Bros' : {freq : 0},
	'Rogue Territory' : {freq : 0},
	'Self Edge' : {freq : 0},
	'Taylor Stitch' : {freq : 0},
	'ISAORA' : {freq : 0},
	'Need Supply' : {freq : 0},
	'Victor Athletics' : {freq : 0}
}, function(val) {}, function(domain, val) {});
	
var priceClass = new domainClass("price", "priceDetails", "pricePrefCanvas", {
	'0' : {freq : 0},
	'10' : {freq : 0},
	'20' : {freq : 0},
	'50' : {freq : 0},
	'100' : {freq : 0},
	'200' : {freq : 0},
	'400' : {freq : 0}
}, function(val) {}, function(domain, val) {
	var lower = null;
	for (var key in domain) {
		if (domain.hasOwnProperty(key)) {
			if (lower == null) {
				lower = parseInt(key, 10);
			} else {
				var upper = parseInt(key, 10);
				if (val >= lower && val < upper) {
					return key;
				}
				lower = upper;
			}
		}
	}
	return key;	
});
	
var shipClass = new domainClass("shipsFrom", "shipfromDetails", "shipPrefCanvas", {
	'Canada' : {freq : 0},
	'USA' : {freq : 0},
	'Brazil' : {freq : 0},
	'China' : {freq : 0},
	'Taiwan' : {freq : 0},
	'South Korea' : {freq : 0},
	'Singapore' : {freq : 0},
	'UK' : {freq : 0},
	'Italy' : {freq : 0},
	'Japan' : {freq : 0}
}, function(val) {}, function(domain, val) {});
	
var materialClass = new domainClass("material", "materialDetails", "materialPrefCanvas", {
	'Cotton' : {freq : 0},
	'Linen' : {freq : 0},
	'Polyester' : {freq : 0},
	'Silk' : {freq : 0},
	'Wool' : {freq : 0},
	'Nylon' : {freq : 0},
	'Rayon' : {freq : 0},
	'Denim' : {freq : 0},
	'Acetate' : {freq : 0},
	'Flannel' : {freq : 0},
	'Fleece' : {freq : 0},
	'Tweed' : {freq : 0},
	'Satin' : {freq : 0}
}, function(val) {}, function(domain, val) {});
	
var qualityClass = new domainClass("quality", "qualityDetails", "qualityPrefCanvas", {
	'clicksonbuy' : {freq : 0},
	'likes' : {freq : 0},
	'views' : {freq : 0}
}, function(val) {}, function(domain, val) {});
	
var motivationClass = new domainClass("motivation", "motivationDetails", "motiPrefCanvas", {
	'trending' : {freq : 0},
	'sale' : {freq : 0},
	'new' : {freq : 0}
}, function(val) {}, function(domain, val) {});