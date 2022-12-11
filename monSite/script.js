//==============================================================================
//creation variables


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
ctx.ellipse(160, 40, 40, 40, 0.7 * Math.PI/180, 0, 2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.ellipse(175, 35, 7, 7, 0.7 * Math.PI/180, 0, 2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.ellipse(145, 35, 7, 7, 0.7 * Math.PI/180, 0, 2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.ellipse(160, 50, 5, 5, 0.7 * Math.PI/180, 0, 2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.ellipse(160, 62, 20, 4, 0.7 * Math.PI/180, 0, 2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.ellipse(160, 130, 80, 50, 0.7 * Math.PI/180, 0, 2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.ellipse(160, 150, 3, 3, 0.7 * Math.PI/180, 0, 2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.ellipse(160, 130, 3, 3, 0.7 * Math.PI/180, 0, 2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.ellipse(160, 110, 3, 3, 0.7 * Math.PI/180, 0, 2 * Math.PI);
ctx.stroke();







