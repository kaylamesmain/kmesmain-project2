function spacebarPress(event){
    if (event.charCode == '32'){
      window.location = '/mainmenu';
      //C:\Users\Kayla1\Documents\GitHub\CMPT221\Kmesmain-221-111\kmesmain-project-\client\views\mainmenu.html
    }
  }
window.addEventListener("keypress", spacebarPress)
var winners = [];
winners.push(["Kayla", 99, "June"],
["Devin", 100, "November"],
["Euphema", 10, "July"],
["James", 1, "August"],
["Kitty", 36, "June"],
["Simone", 43, "April"],
["Joselyn", 93, "January"],
["Emilio", 78, "Feburary"],
["Latoya", 85, "January"],
["Sheldon", 22, "July"]);

var winnersSorted = [];
function table(){
  var table = document.getElementById('topTable')
            var tableBody = document.createElement('TBODY')
            table.border = '1'
  var maxScore = 0;
  for(var i = 0; i < winners.length - 1; i++){
    for(var j = i + 1; j < winners.length; j++){
      if(winners[i][1] < winners[j][1]){
        var bigger = winners[i]
        winners[i] = winners[j]
        winners[j] = bigger
      }
    }
  }
  winnersSorted = winners;
  var row = document.createElement('TR');
  var data = document.createElement('TD');
  row.appendChild(data);
  data.appendChild(document.createTextNode('Ranking'));
  var data = document.createElement('TD');
  row.appendChild(data);
  data.appendChild(document.createTextNode('Name'));
  var data = document.createElement('TD');
  row.appendChild(data);
  data.appendChild(document.createTextNode('Score'));
  var data = document.createElement('TD');
  row.appendChild(data);
  data.appendChild(document.createTextNode('Month'));
  tableBody.appendChild(row);
  for(var i = 0; i < winnersSorted.length ; i++){
    var row = document.createElement('TR');
    var data = document.createElement('TD')
    row.appendChild(data);
    data.appendChild(document.createTextNode(i+1));
    for(var j = 0; j < 3; j++){
      data = document.createElement('TD')
      data.appendChild(document.createTextNode(winnersSorted[i][j]));
      row.appendChild(data);
    }
    tableBody.appendChild(row);

  }

  table.appendChild(tableBody);
}
