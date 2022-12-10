


const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");

btn1.onclick = () => document.body.style.backgroundColor = "blue";
btn2.onclick = () => document.body.style.backgroundColor = "violet";
btn3.onclick = () => document.body.style.backgroundColor = "green";
btn4.onclick = () => document.body.style.backgroundColor = "yellow";
btn5.onclick = () => document.body.style.backgroundColor = "orange";

var canevas = document.getElementById('canevas');
var ctx = canevas.getContext('2d');

ctx.beginPath();
ctx.ellipse(240, 75, 50, 75, 0 * Math.PI/180, 0, 2 * Math.PI);
ctx.ellipse(230, 75, 50, 75, 0 * Math.PI/180, 0, 2 * Math.PI);
ctx.ellipse(220, 75, 50, 75, 0 * Math.PI/180, 0, 2 * Math.PI);
ctx.ellipse(210, 75, 50, 75, 0 * Math.PI/180, 0, 2 * Math.PI);
ctx.ellipse(200, 75, 50, 75, 0 * Math.PI/180, 0, 2 * Math.PI);
ctx.ellipse(190, 75, 50, 75, 0 * Math.PI/180, 0, 2 * Math.PI);
ctx.ellipse(180, 75, 50, 75, 0 * Math.PI/180, 0, 2 * Math.PI);
ctx.ellipse(170, 75, 50, 75, 0 * Math.PI/180, 0, 2 * Math.PI);
ctx.ellipse(160, 75, 50, 75, 0 * Math.PI/180, 0, 2 * Math.PI);
ctx.ellipse(150, 75, 50, 75, 0 * Math.PI/180, 0, 2 * Math.PI);
ctx.ellipse(140, 75, 50, 75, 0 * Math.PI/180, 0, 2 * Math.PI);
ctx.ellipse(130, 75, 50, 75, 0 * Math.PI/180, 0, 2 * Math.PI);
ctx.ellipse(120, 75, 50, 75, 0 * Math.PI/180, 0, 2 * Math.PI);
ctx.ellipse(110, 75, 50, 75, 0 * Math.PI/180, 0, 2 * Math.PI);
ctx.ellipse(100, 75, 50, 75, 0 * Math.PI/180, 0, 2 * Math.PI);
ctx.ellipse(90, 75, 50, 75, 0 * Math.PI/180, 0, 2 * Math.PI);
ctx.ellipse(80, 75, 50, 75, 0 * Math.PI/180, 0, 2 * Math.PI);
ctx.ellipse(700, 75, 50, 75, 0 * Math.PI/180, 0, 2 * Math.PI);
ctx.ellipse(60, 75, 50, 75, 0 * Math.PI/180, 0, 2 * Math.PI);
ctx.stroke();
