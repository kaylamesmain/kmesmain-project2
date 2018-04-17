//values set for terrain 
function terrain(name, imageUrl, milesLost) {
	this.name = name;
	this.imageUrl = imageUrl;
	this.milesLost = milesLost
}
//images of terrain 
var terrains = [];
terrains.push(new terrain("Grassland", "../../client/public/images/grassland.jpg"));
terrains.push(new terrain("Mountains", "../../client/public/images/mountains.jpg"));
terrains.push(new terrain("Plains", "../../client/public/images/plains.jpg"));
terrains.push(new terrain("Forest", "../../client/public/images/forest.jpg"));
terrains.push(new terrain("Desert", "../../client/public/images/desert.jpg"));

//random terrain to occur 
exports.getRandomTerrain = function() {
	var rand = Math.floor(Math.random() * terrains.length);
	return terrains[rand];
}

//return type of terrain 
exports.getTerrains = function() {
	return terrains;
}
