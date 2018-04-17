function pressOne(event){
    if (event.charCode == '49'){
      window.location = '/trail';
    }
  }
window.addEventListener("keypress", pressOne)

function pressTwo(event){
    if (event.charCode == '50'){
      window.location = '/setup';
    }
  }
window.addEventListener("keypress", pressTwo)

function pressThree(event){
    if (event.charCode == '51'){
      window.location = '/topten';
    }
  }
window.addEventListener("keypress", pressThree)

var audio = new Audio('../music/cutemusic.mp3');
function pressFour(event){
    if (event.charCode == '52'){

      if(audio.paused){
        audio.play();
        document.getElementById("OnOfflbl").innerHTML = "Sound On";
      }else {
        audio.pause();
        document.getElementById("OnOfflbl").innerHTML = "Sound Off";
      }
    }
  }
window.addEventListener("keypress", pressFour)
