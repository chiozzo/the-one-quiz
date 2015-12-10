/**
 * Basics
 */
document.getElementById('vanilla_output').innerHTML = '<h1>This content generated with vanilla JavaScript</h1>'

$('#jquery_output').html('<h1>This content generated with jQuery</h1>');



/**
 *Functions and operators
 */
a = 10;
b = 3;

var modulus = function(a, b) {
	console.log("a % b",a % b);
	return a % b;
};
modulus(a, b);

var doMath = function(a, b, callback) {
	callback(a, b);
};

var add = function(a, b) {
	console.log("a + b",a + b);
	return a + b;
};

var subtract = function(a, b) {
	console.log("a - b",a - b);
	return a - b;
};

doMath(a, b, add);

doMath(a, b, subtract);



/**
 * Arrays
 */
var Planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];