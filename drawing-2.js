// //
// // function randomColor() {
// // var star = document.getElementsByTagName('polygon');
// // for (i = 0; i < star.length; i++){
// //   var r = Math.floor((Math.random() * 255));
// //   var g = Math.floor((Math.random() * 255));
// //   var b = Math.floor((Math.random() * 255));
// //   var a = Math.floor(Math.random());
// //   var rgba = "rgb("+r+","+g+","+b+","+a+");";
// //
// //   star.style.backgroundColor = "rgb("+r+","+g+","+b+","+a+");";
// //  }
// // }
// //
// // randomColor();
// //
// // setInterval(randomColor, 1000);
// //
// // /* A function to return random number from min to max */
// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
//
// setInterval (function() {
//     var element = document.getElementById("up");
//     //generate random red, green and blue intensity
//     for (var i = 0; i < element.length; i++) {
//       var r = getRandomInt(0, 255);
//       var g = getRandomInt(0, 255);
//       var b = getRandomInt(0, 255);
//
//       element.style.fill = "rgb(" + r + "," + g + "," + b + ")";
//       document.getElementByClassName('star').innerHTML = r + " " + g + " " + b;
//     }
//
// }, 1500);

var stars = document.getElementsByClassName('star');

function change_color() {
  for (i = 0; i < stars.length; i++){
    x = stars[i];
    var r = Math.floor((Math.random() * 255));
    var g = Math.floor((Math.random() * 255));
    var b = Math.floor((Math.random() * 255));
    var a = Math.random();
    var r1 = Math.floor((Math.random() * 255));
    var g1 = Math.floor((Math.random() * 255));
    var b1 = Math.floor((Math.random() * 255));
    x.style.fill = "rgba(" + r + "," + g + "," + b + "," + a + ")";
    x.style.stroke = "rgb(" + r1 + "," + g1 + "," + b1 + ")";
  }
    // ob.style.fill = "#" + ((1 << 24) * Math.random() | 0).toString(16);
    // ob[1].style.fill = "#" + ((1 << 24) * Math.random() | 0).toString(16);
}

setInterval(change_color,100);
setTimeout(change_color(), 5000);
