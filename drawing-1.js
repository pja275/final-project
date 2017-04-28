var container = document.querySelector('body');
var hueNumber1 = Math.floor(Math.random() * 360);
var hueNumber2 = Math.floor(Math.random() * 360);

function colorField() {
  console.log('Hue number 1: ' + hueNumber1);
  console.log('Hue number 2: ' + hueNumber2);

  requestAnimationFrame(colorField);

  var hsl1 = "hsl(" + hueNumber1 + ", 100%, 50%)";
  var hsl2 = "hsl(" + hueNumber2 + ", 100%, 50%)";
  var degree = 45; // angle of gradient
  var hslGradient = "linear-gradient(" + degree + "deg," + hsl1 + "," + hsl2 + ")";

  container.style.backgroundImage = hslGradient;

  if (hueNumber1 < 360) {
    hueNumber1 += 0.5;
  } else {
    hueNumber1 = 0;
  }

  if (hueNumber2 < 360) {
    hueNumber2 += 0.25;
  } else {
    hueNumber2 = 0;
  }
}

requestAnimationFrame(colorField);

// function randomColor(){
//   var outer = document.querySelectorAll('#outer');
//   var middleOuter = document.querySelectorAll('#middle_outer');
//   var middle = document.querySelectorAll('#middle');
//   var innerMiddle = document.querySelectorAll('#inner_middle');
//   var inner = document.querySelectorAll('#inner');

//   