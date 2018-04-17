//values set 
function topTen(playerName, playerScore) {
	this.playerName = playerName;
	this.playerScore = playerScore;
	this.dateEarned = new Date();
}

var currentTopTen = [];

//retreveing new top score 
exports.getNewTopScore = function(playerName, playerScore) {
	return new topTen(playerName, playerScore);
};
