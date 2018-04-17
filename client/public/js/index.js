function spacebarPress(event){
    if (event.charCode == '32'){
      window.location = '/mainmenu';
    }
  }
  window.addEventListener("keypress", spacebarPress)
//window.addEventListener("keypress", spacebarPress, false)
//window.addEventListener("load", function() {
//  var f = document.getElementById('message');
//  setInterval(function(){
//    f.style.opacity = (f.style.opacity == 0 ? 1 : 0);
//  }, 700);
//})
var opacityLimit = 10;
var opacity = 0;
var fadeEl = document.getElementById('message');
var lastOpacityLimit = opacityLimit;
fadeEl.style.opacity = opacity;

function fade() {
  lastOpacityLimit = opacityLimit;
	if(opacity < opacityLimit) {
		fadeEl.style.opacity = opacity / 10;
		opacity++;
		setTimeout(fade, 200);
	}
  else if(opacity == opacityLimit){
      if(lastOpacityLimit == 0){
        opacityLimit = 10;
      }if(lastOpacityLimit == 10){
        opacityLimit = 0;
      }
    setTimeout(fade,200);
  }
  else {
    fadeEl.style.opacity = opacity / 10;
    opacity--;
    setTimeout(fade, 200);
  }
}
/*function fadeout(){
  for (i = 0; i <= 1; i += 0.01){
    setTimeout("setOpa(" + (1 - i) +")", i * duration);
  }
  setTimeout("fade()", (duration + hidtime));
  }
}*/
fade();
