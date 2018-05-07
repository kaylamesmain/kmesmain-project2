const express = require('express');
const app = express()
const router = express.Router();
const gameData = require('./models/gameData.js')
const gameController = require('./controllers/gameController.js');
const setupController = require('./controllers/setupController.js');

var bodyParser = require('body-parser');
app.use(bodyParser.json());



app.use(express.static('client/public'));
		//routes client 
		app.get('/', function(req, res){
			res.sendFile('index.html', {root: './client/views'});
			});
		app.get('/mainmenu', function(req, res){
			res.sendFile('mainmenu.html', {root: './client/views'});
			});
		app.get('/topten', function(req, res){
			res.sendFile('topten.html', {root: './client/views'});
			});
		app.get('/setup', function(req, res){
			res.sendFile('setup.html', {root: './client/views'});
			});
		app.get('/trail', function(req, res){
			res.sendFile('trail.html', {root: './client/views'});
			});

		//routes server 
		app.route('/api/setup/screen/:id').get(setupController.getgameScreen)
		app.route('/api/setup/profession').post(setupController.saveProfession);
		app.route('/api/setup/leader').post(setupController.saveProfession);
		app.route('/api/setup/memberName').post(setupController.saveMemberName);
		app.route('/api/setup/startMonth').post(setupController.saveStartMonth);
		app.route('/api/setup/playerMoney').post(setupController.savePlayerMoney);
		app.route('/api/game')
			.get(gameController.getGameData)
		// app.route('/api/setupOccupation')
		// 	.get(setupController.setOccupation)
		app.route('/api/setupStartMonth')
			.get(setupController.setStartMonth)
		app.route('/api/setupPace')
			.get(setupController.setInitialPace)
		app.route('/api/changePace')
			.post(gameController.changePace)
		app.route('/api/updateGame')
			.get(gameController.updateGame)
		app.route('/api/resetGame')
			.get(gameController.resetGame)

app.listen(1337, () => console.log('Example app listening on port 1337!'))
