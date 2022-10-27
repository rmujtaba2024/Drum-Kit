
// detecting button press
var numberOfDrums = document.querySelectorAll(".drum");
// for loop is so we can use the addEventListener() on all the drum buttons
for (i=0; i<numberOfDrums.length; i++) {

      numberOfDrums[i].addEventListener("click", function() {

      var buttonInnerHTML = this.innerHTML;

      playDrum(buttonInnerHTML);

      buttonAnimation(buttonInnerHTML);

    });

`     `
}

// detecting keyboard press

document.addEventListener("keydown", function(event) {
  playDrum(event.key);
  buttonAnimation(event.key);
});



function playDrum(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio('sounds/1.mp3');
      tom1.play();
    break;
    case "a":
      var tom2 = new Audio('sounds/2.mp3');
      tom2.play();
    break;
    case "s":
      var tom3 = new Audio('sounds/3.mp3');
      tom3.play();
    break;
    case "d":
      var tom4 = new Audio('sounds/4.mp3');
      tom4.play();
    break;
    case "j":
      var snare = new Audio('sounds/5.mp3');
      snare.play();
    break;
    case "k":
      var kick = new Audio('sounds/6.mp3');
      kick.play();
    break;
    case "l":
      var crash = new Audio('sounds/7.mp3');
      crash.play();
    break;

    default: console.log(key);
}
}

function buttonAnimation(currentKey) {


    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);




}
