
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
setTimein(change_color(), 5000);
