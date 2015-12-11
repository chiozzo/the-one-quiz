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
	return a % b;
};

var doMath = function(a, b, callback) {
	return callback(a, b);
};

var add = function(a, b) {
	return a + b;
};

var subtract = function(a, b) {
	return a - b;
};

console.log("modulus(a, b)", modulus(a, b));
console.log("doMath(a, b, add)", doMath(a, b, add));
console.log("doMath(a, b, subtract)", doMath(a, b, subtract));



/**
 * Arrays
 */
var Planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

var sortedPlanets = function(planets) {
	return planets.sort();
};

var reversedPlanets = function(planets) {
	return planets.map(function(currentValue, index, array){
		return currentValue.split('').reverse().join('');
	});
};

var longPlanets = function(planets) {
	var longPlanets = planets.filter(function(currentValue, index, array) {
		if (currentValue.length >= 7) {
			return currentValue;
		}
	});
	return longPlanets;
};

console.log("sortedPlanets(Planets)", sortedPlanets(Planets));
console.log("reversedPlanets(Planets)", reversedPlanets(Planets));
console.log("longPlanets(Planets)", longPlanets(Planets));