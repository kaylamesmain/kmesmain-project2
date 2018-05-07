var gameContainer = document.getElementById("gameContainer");

function spacebarPress(event){
    if (event.charCode == '32'){
      window.location = '/mainmenu';
    }
  }

function getScreen(screenId) {
	fetch('/api/setup/screen/' + screenId).then(function(response) {
		if (response.status !== 200) {
			console.log(response.status + " msg: " + response.value);
			return;
		}
	response.text().then(function(data) {
		gameContainer.innerHTML = data;
		})
	});
}

getScreen(0);

gameContainer.addEventListener("click", function(e) {
	// get the element clicked
	var targetElement = event.target || event.srcElement;
	if(targetElement.id == "bankerMenuItem") {
		saveProfession("Banker");
		savePlayerMoney(2000);
	}
	if(targetElement.id == "carpenterMenuItem") {
		saveProfession("Carpenter");
		savePlayerMoney(1800);
	}
	if(targetElement.id == "farmerMenuItem") {
		saveProfession("Farmer");
		savePlayerMoney(1500);
	}
	if(targetElement.id == "differencesMenuItem") {
		console.log("learn more!");
	}
	if(targetElement.id == "page1sub"){
		var leaderName = document.getElementById('player0').value
		saveWagonLeader(leaderName);
	}
	if(targetElement.id == "page2sub"){
		saveMemberName(document.getElementById("player1").value);
		saveMemberName(document.getElementById("player2").value);
		saveMemberName(document.getElementById("player3").value);
		saveMemberName(document.getElementById("player4").value);
	}
	if(targetElement.id == "marchItem") {
		saveStartMonth("March");
	}
	if(targetElement.id == "aprilItem") {
		saveStartMonth("April");
	}
	if(targetElement.id == "mayItem") {
		saveStartMonth("May");
	}
	if(targetElement.id == "juneItem") {
		saveStartMonth("June");
	}
	if(targetElement.id == "julyItem") {
		saveStartMonth("July");
	}
	//currentScreen++;
	//gameScreen();
});

//save your start month 
function saveStartMonth(startMonth) {
	fetch('/api/setup/startMonth',
	{
		method:'post',
		headers: {
		"Content-type": "application/json; charset=UTF-8"
	},
	body: '{"startMonth": "' + startMonth + '"}'
	}).then(function(response) {
		if (response.status !== 200) {
			console.log('problem with ajax call! ' + response.status + " msg: " + response.value);
			return;
		}
		else {
			getScreen(4);
		}
		console.log("startMonth " + startMonth + " saved!");
	});
}

//save player money 
function savePlayerMoney(playerMoney) {
	fetch('/api/setup/playerMoney',
	{
		method:'post',
		headers: {
		"Content-type": "application/json; charset=UTF-8"
	},
	body: '{"playerMoney": "' + playerMoney + '"}'
	}).then(function(response) {
		if (response.status !== 200) {
			console.log('problem with ajax call! ' + response.status + " msg: " + response.value);
			return;
		}
		else {
			return;
		}
		console.log("playerMoney " + playerMoney + " saved!");
	});
}


//save wagon leader name 
function saveWagonLeader(leader) {
	fetch('/api/setup/leader',
	{
		method:'post',
		headers: {
		"Content-type": "application/json; charset=UTF-8"
	},
	body: '{"leader": "' + leader + '"}'
	}).then(function(response) {
		if (response.status !== 200) {
			console.log('problem with ajax call! ' + response.status + " msg: " + response.value);
			return;
		}
		else {
			getScreen(2);
		}
		console.log("leader " + leader + " saved!");
	});
}

// save all 4 player names 
function saveMemberName(memberName) {
	fetch('/api/setup/memberName',
	{
		method:'post',
		headers: {
		"Content-type": "application/json; charset=UTF-8"
	},
	body: '{"memberName": "' + memberName + '"}'
	}).then(function(response) {
		if (response.status !== 200) {
			console.log('problem with ajax call! ' + response.status + " msg: " + response.value);
			return;
		}
		else {
			getScreen(3);
		}
		console.log("memberName " + memberName + " saved!");
	});
}
//save the profession type 
function saveProfession(profession) {
	fetch('/api/setup/profession',
	{
		method:'post',
		headers: {
		"Content-type": "application/json; charset=UTF-8"
	},
	body: '{"playerProfession": "' + profession + '"}'
	}).then(function(response) {
		if (response.status !== 200) {
			console.log('problem with ajax call! ' + response.status + " msg: " + response.value);
			return;
		}
		else {
			getScreen(1);
		}
		console.log("profession " + profession + " saved!");
	});
}


window.addEventListener("keypress", spacebarPress)
