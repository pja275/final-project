//var container = document.getElementById('container');
var container1 = document.getElementById('container1');
var container2 = document.getElementById('container2');
var container3 = document.getElementById('container3');
var container4 = document.getElementById('container4');
var container5 = document.getElementById('container5');
var container6 = document.getElementById('container6');
var container7 = document.getElementById('container7');
var container8 = document.getElementById('container8');
var container9 = document.getElementById('container9');
var container10 = document.getElementById('container10');
var container11 = document.getElementById('container11');
var container12 = document.getElementById('container12');
var container13 = document.getElementById('container13');
var container14 = document.getElementById('container14');
var container15 = document.getElementById('container15');
var container16 = document.getElementById('container16');
var container17 = document.getElementById('container17');


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

  //container.style.backgroundImage = hslGradient;
  container_1.style.backgroundImage = hslGradient;
  container2.style.backgroundImage = hslGradient;
  container3.style.backgroundImage = hslGradient;
  container4.style.backgroundImage = hslGradient;
  container5.style.backgroundImage = hslGradient;
  container6.style.backgroundImage = hslGradient;
  container7.style.backgroundImage = hslGradient;
  container8.style.backgroundImage = hslGradient;
  container9.style.backgroundImage = hslGradient;
  container10.style.backgroundImage = hslGradient;
  container11.style.backgroundImage = hslGradient;
  container12.style.backgroundImage = hslGradient;
  container13.style.backgroundImage = hslGradient;
  container14.style.backgroundImage = hslGradient;
  container15.style.backgroundImage = hslGradient;
  container16.style.backgroundImage = hslGradient;
  container17.style.backgroundImage = hslGradient;
  

  

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