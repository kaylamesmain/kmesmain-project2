const gameController = require('./gameController');

//set occupation 
exports.setOccupation = function(req, res){
	gameController.setOccupation(req.query.occupation);
	res.setHeader('Content-Type', 'text/plain');
    res.send("Occupation set to " + req.query.occupation);
}

// stating month 
exports.setStartMonth = function(req, res){
	gameController.setStartMonth(req.query.startMonth)
	res.setHeader('Content-Type', 'text/plain');
    res.send("Start Month set to " + req.query.startMonth);
}

// the starting pace 
exports.setInitialPace = function(req, res){
	gameController.setStartingPace(req.query.startPace)
	res.setHeader('Content-Type', 'text/plain');
    res.send("Start pace set to " + req.query.startPace);
}