var balls = document.getElementsByClassName("ball");
document.onmousemove = function(){
  var x = event.clientX * 100 / window.innerWidth + "%";
  var y = event.clientY * 100 / window.innerHeight + "%";
  //event.client => get the horizontal coordinate of the mouse.
  //event.client => get the vertical coordinate of the mouse.
// window.innerWidth => get the browser width
//window.innerHeight => get the browser height

for(var i = 0; i < 2; i++){
  balls[i].style.left = x;
  balls[i].style.top = y;
  balls[i].style.transform = "translate(-"+x+", -"+y+")";
}
}
