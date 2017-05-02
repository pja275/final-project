// var timeout, clicker = $('#clicker');
// var object = document.getElementsByClassName('object');
//
// clicker.mousedown(function(){
//     timeout = setInterval(function(){
//       for (i = 0; i < object.length; i++){
//         x = object[i];
//         var r = Math.floor((Math.random() * 255));
//         var g = Math.floor((Math.random() * 255));
//         var b = Math.floor((Math.random() * 255));
//         var a = Math.random();
//         var r1 = Math.floor((Math.random() * 255));
//         var g1 = Math.floor((Math.random() * 255));
//         var b1 = Math.floor((Math.random() * 255));
//         x.style.fill = "rgba(" + r + "," + g + "," + b + "," + a + ")";
//         x.style.stroke = "rgb(" + r1 + "," + g1 + "," + b1 + ")";
//       }
//       setInterval(change_color,100);
//     }, 500);
//
//     return false;
// });
//
// $(document).mouseup(function(){
//     clearInterval(timeout);
//     return false;
// });

//

var object = document.getElementsByClassName('object');
var body = document.getElementById('wow');

$('#element').on('mousedown mouseup', function mouseState(e) {
     if (e.type == "mousedown") {
      //  body.style.backgroundColor = "black;"
       for (i = 0; i < object.length; i++){
         x = object[i];
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
     }
    //  if (e.type == "mouseup") {
    //    for (i = 0; i < object.length; i++){
    //      x = object[i];
    //      x.style.fill = "black";
    //      x.style.stroke = "none";
    //  }

 });

// var object = document.getElementsByClassName('object');
//
// function change_color() {
//   for (i = 0; i < object.length; i++){
//     x = object[i];
//     var r = Math.floor((Math.random() * 255));
//     var g = Math.floor((Math.random() * 255));
//     var b = Math.floor((Math.random() * 255));
//     var a = Math.random();
//     var r1 = Math.floor((Math.random() * 255));
//     var g1 = Math.floor((Math.random() * 255));
//     var b1 = Math.floor((Math.random() * 255));
//     x.style.fill = "rgba(" + r + "," + g + "," + b + "," + a + ")";
//     x.style.stroke = "rgb(" + r1 + "," + g1 + "," + b1 + ")";
//   }
//     // ob.style.fill = "#" + ((1 << 24) * Math.random() | 0).toString(16);
//     // ob[1].style.fill = "#" + ((1 << 24) * Math.random() | 0).toString(16);
// }
//
// setInterval(change_color,100);
