var container = document.querySelector('body');
var containerWhole = document.getElementById('whole');
var hueNumber1 = Math.floor(Math.random() * 360);
var hueNumber2 = Math.floor(Math.random() * 360);
var hueNumber3 = Math.floor(Math.random() * 360);
var hueNumber4 = Math.floor(Math.random() * 360);

function colorField() {

  requestAnimationFrame(colorField);

  var hsl1 = "hsl(" + hueNumber1 + ", 100%, 50%)";
  var hsl2 = "hsl(" + hueNumber2 + ", 100%, 50%)";
  var degree = 45; // angle of gradient
  var hslGradient = "linear-gradient(" + degree + "deg," + hsl1 + "," + hsl2 + ")";

  var hsl3 = "hsl(" + hueNumber3 + ", 100%, 50%)";
  var hsl4 = "hsl(" + hueNumber4 + ", 100%, 50%)";
  //var degree1 = 45; // angle of gradient
  var hslGradient1 = "radial-gradient(" + "circle," + hsl3 + "," + hsl4 + "," + hsl3 + ")";

  container.style.backgroundImage = hslGradient;
  containerWhole.style.backgroundImage = hslGradient1;

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
  if (hueNumber3 < 360) {
    hueNumber3 += 0.25;
  } else {
    hueNumber3 = 0;
  }
  if (hueNumber4 < 360) {
    hueNumber4 += 0.25;
  } else {
    hueNumber4 = 0;
  }
}

// function random_fill (){
//   var outer = document.querySelectorAll('#outer');
//   var middleOuter = document.querySelectorAll('#middle_outer');
//   var middle = document.querySelectorAll('#middle');
//   var innerMiddle = document.querySelectorAll('#inner_middle');
//   var inner = document.querySelectorAll('#inner');
//
//   var r = Math.floor(Math.random()*255);
//   var g = Math.floor(Math.random()*255);
//   var b = Math.floor(Math.random()*255);
//   var a = Math.floor(Math.random());
//
//   var r1 = Math.floor(Math.random()*255);
//   var g1 = Math.floor(Math.random()*255);
//   var b1 = Math.floor(Math.random()*255);
//   var a1 = Math.floor(Math.random());
//
//   var rgba = "rgba(" + r +","+g+","+b+","+a +")";
//   var rgba1 = "rgba(" + r1 +","+g1+","+b1+","+a1+")";
//
//   outer.style.fill = rgba;
//   middle.style.fill = rgba;
//   inner.style.fill = rgba;
//   middleOuter.style.fill = rgba1;
//   innerMiddle.style.fill = rgba1;
//
// }
// random_fill();
requestAnimationFrame(colorField);

// function randomColor(){
//   var outer = document.querySelectorAll('#outer');
//   var middleOuter = document.querySelectorAll('#middle_outer');
//   var middle = document.querySelectorAll('#middle');
//   var innerMiddle = document.querySelectorAll('#inner_middle');
//   var inner = document.querySelectorAll('#inner');

//
