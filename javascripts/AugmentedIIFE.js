var FruitMakerExtreme = (function(monkeyButt){
	var privateVar = null;

	monkeyButt.slices = function(fruitName, fruitCount) {
		monkeyButt.fruitLog();
		var fruitBowl = [];
		fruitBowl.length = fruitCount;
		for(var i = 0; i < fruitBowl.length; i++) {
			fruitBowl[i] = fruitName;
		}
		return fruitBowl;
	}
	return monkeyButt;
})(FruitMaker);

console.log("FruitMakerExtreme.slices('apples', 2)", FruitMakerExtreme.slices('apples', 2));