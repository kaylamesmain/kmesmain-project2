var pace = require('./pace.js');
var weather = require('./weather.js');
var terrain = require('./terrain.js');

//setting player information 
function gameData(playerNames) {
	this.playerNames = playerNames;
	this.playerStatus = [true, true, true, true, true];
	this.leader="";
	this.group;
	this.playerProfession="";
	this.playerMoney = 500;
	this.startMonth="";
	this.milesTraveled = 0;
	this.groupHealth = 100;
	this.currentPace = pace.getPace("Steady");
	this.daysOnTrail = 0;
	this.currentWeather = weather.getRandomWeather();
	this.currentTerrain = terrain.getRandomTerrain();
	this.messages = [];
}

//calculate the health 
exports.calculateHealth = function(health){
	health = health + weather.getRandomWeather().healthChange + pace.setChangePace().healthChange
	return health;
}

//stating the status of your health and if you lose 
exports.groupHealthStatus = function(health){
	 if(health >= 80){
 		return 'good'
	}else if(health < 80 && health >= 50){
 		return 'fair'
 	}else if(health >= 20 && health < 50 && gameData.playerStatus.find(true)){
 		var d = Math.random();
 		if (d > 0.97) {
 			var index = gameData.playerStatus.findIndex(true); //finds index of first status that is true
 			if(index !== -1){
 				gameData.playerStatus[index] = false;
 				if(gameData.playerStatus.findIndex(true) === -1)
 				{
 					return 'everyone in party is dead, you loose'
 				}
 			}
 		}
 		return 'poor'
 	}else if(health > 0 && health < 20 && gameData.playerStatus.find(true)){
 		var d = Math.random();
 		if (d > 0.90) {
 			var index = gameData.playerStatus.findIndex(true); //finds index of first status that is true
 			if(index !== -1){
 				gameData.playerStatus[index] = false;
 				if(gameData.playerStatus.findIndex(true) === -1)
 				{
 					return 'everyone in party is dead, you loose'
 				}
 			}
 		}
 		return 'very poor'
 	}else{
 		gameData.playerStatus = [false, false, false, false, false];
 		return 'everyone in party is dead, you loose'
 	}
 }

//gets all the information in the contract to return game data
exports.getGameData = function(playerNames, playerProfession, startMonth, currentPace, health, playerMoney){
	return new gameData(playerNames, playerProfession, startMonth, currentPace, health, playerMoney);
}

//changes the pace 
exports.changePace = function(name){
	currentGameData[currentPace] = pace.getPace(name)
}
