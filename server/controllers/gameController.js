const game = require('../models/gameData.js')
const pace = require('../models/pace.js');
const weather = require('../models/weather')
const terrain = require('../models/terrain.js')
const setupController = require('./setupController');

//starting of array of names 
let gameData = game.getGameData(
  ['Bill', 'Bob', 'Alex', 'Ana', 'Dave']);

//get game 
exports.getGame = function(){
  return gameData;
}

//post game
exports.postGameData = function(req, res) {
  game.gameData()
}

//get game data 
exports.getGameData = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(gameData);
}

//change pace 
exports.changePace = function(req, res) {
  console.log(req.body.startPace)
  gameData.currentPace = pace.getPace(req.body.startPace);
  res.setHeader('Content-Type', 'text/plain');
  res.send(gameData);
}

//update game 
exports.updateGame = function(req, res) {
  gameData.groupHealth = game.calculateHealth(gameData.groupHealth);
  if (gameData.milesTraveled >= 500){
    res.setHeader('Content-Type', 'text/plain');
    res.send("Game Over. You won!");
  }
  else if (gameData.daysOnTrail >= 100){
    res.setHeader('Content-Type', 'text/plain');
    res.send("Game Over. Ran out of time");
  }
  else if (gameData.groupHealth <= 0) {
    res.setHeader('Content-Type', 'text/plain');
    res.send("Everyone is dead. Game Over.");
  }
  else{
    gameData.currentTerrain = terrain.getRandomTerrain();
    gameData.currentWeather = weather.getRandomWeather();
    gameData.milesTraveled = gameData.currentPace.miles;
    gameData.daysOnTrail += 1;
    res.setHeader('Content-Type','application/json');
    res.send(gameData); 
  }
}

//reset game 
exports.resetGame = function(req, res){
  gameData = game.getGameData(
  ['Bill', 'Bob', 'Alex', 'Ana', 'Dave'], 
  'Farmer', 
  'November', 
  'Steady', 
  100);
  res.setHeader('Content-Type','application/json');
  res.send(gameData); 
}

//this is where you export it and connects to pace.js and test in gitbash
exports.setChangePace = function(req, res) {
  res.setHeader('content-Type', 'application/json');
  res.send(pace.setChangePace());
}

//set occupation
exports.setOccupation = function(name){
  gameData.playerProfession = name;
}
//set leader
exports.setLeader = function(name){
  gameData.playerNames[0] = name;
}
//start month
exports.setStartMonth = function(name){
  gameData.startMonth = name;
}

//start pace 
exports.setStartingPace = function(name){
  gameData.currentPace = (pace.getPace(name))
}

exports.setPlayerMoney = function(amount){
  gameData.playerMoney = amount
}

exports.setLeader = function(name){
  gameData.leader = name;
}
