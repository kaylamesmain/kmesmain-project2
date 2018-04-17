//values set for pace 
function pace(name, milesPerDay, healthChange){
  this.name = name;
  this.miles = milesPerDay;
  this.healthChange = healthChange;
}

//type of paces 
var paces = [];

paces.push(new pace('Steady', 30, 0));
paces.push(new pace('Strenuous', 45, -3));
paces.push(new pace('Grueling', 60, -8));
paces.push(new pace('Resting', 0, 5));

//get pace 
exports.getPace = function(name){
  var answer = paces.find((pace) => { //returns first in array 
  	return pace.name === name;
  })
  console.log(answer)
  return answer;
}
//change pace here 
exports.setChangePace = function() {

  var change = Math.floor(Math.random()*paces.length);
  return paces[change];
}


//var rand = Math.floor(Math.random()*paces.length);
//  return paces[rand];