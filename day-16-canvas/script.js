var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');

context.beginPath();
context.moveTo(50,50);
context.lineTo(200,60);
context.lineTo(150,90);
context.fill();

context.beginPath();
context.arc(200,200,50,0,Math.PI *2);
context.fill();
