function spacebarPress(event){
    if (event.charCode == '32'){
      window.location = '/mainmenu';
    }
  }
window.addEventListener("keypress", spacebarPress)
