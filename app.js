var canvas = document.getElementById("draw");
var ctx = canvas.getContext("2d");
resize();
function resize() {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
window.addEventListener("mousemove", draw);
window.addEventListener("mousedown", setPosition);window.addEventListener("mouseenter", setPosition);
var position = {x:0, y:0}
function setPosition(e) {
  position.x = e.clientX;
  position.y = e.clientY;
}

function draw(e) {
  if(e.buttons !==1) {
    return;
  }
  var color = document.getElementById("hex").value;
  var number = document.getElementById("number").value;
  ctx.beginPath();
  ctx.lineWidth = number;
  ctx.lineCap = "round";
  ctx.strokeStyle = color;
  ctx.moveTo(position.x, position.y); 
    setPosition(e);
  ctx.lineTo(position.x, position.y); 
  ctx.stroke();
}

function clearall(){
  var canvas=document.getElementById("draw");
  var context=canvas.getContext("2d");
  context.clearRect(0,0,canvas.width,canvas.height);
}

document.body.onkeyup = darkmode;

function darkmode(e) {
  if(e.keyCode == 32) {
    document.body.classList.toggle("dark")
  }
}