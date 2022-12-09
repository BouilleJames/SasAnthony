


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
ctx.ellipse(100, 100, 50, 75, 45 * Math.PI/180, 0, 2 * Math.PI);
ctx.stroke();
