//values of weather 
function weather(id, name, healthChange, mileChange, probability){
  this.id = id;
  this.type = name;
  this.healthChange = healthChange;
  this.mileChange = mileChange;
  this.probability = probability;
}

var weatherTypes = []
//ID, Label, Health Change, Mile Change, Occurance Prob.
weatherTypes.push(new weather(1, 'Very Hot', -8, .7, .1));
weatherTypes.push(new weather(2, 'Hot', -3, .9, .1));
weatherTypes.push(new weather(3, 'Warm', 1, 1, .2));
weatherTypes.push(new weather(4, 'Cool', 1, .95, .1));
weatherTypes.push(new weather(5, 'Cold', -5, .8, .1));
weatherTypes.push(new weather(6, 'Very Cold', -12, .7, .1));
weatherTypes.push(new weather(7, 'Rain', -4, .6, .1));
weatherTypes.push(new weather(8, 'Heavy Rain', -8, .4, .05));
weatherTypes.push(new weather(9, 'Snow', -15, .3, .05));
weatherTypes.push(new weather(10, 'Blizzard', -30, .1, .05));
weatherTypes.push(new weather(11, 'Heavy Fog', -3, .5, .05));



//getRandomWeather() 
exports.getRandomWeather = function(){
  var rand = Math.floor(Math.random() * weatherTypes.length);
	return weatherTypes[rand];
}
