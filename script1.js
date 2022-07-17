const canvas=document.getElementById("myCanvas");

//getting context and specifying that we are working in 2d
const context=canvas.getContext("2d"); 
// context.moveTo(0,0);
// context.lineTo(200,200);
// context.stroke();

 const width=400;
 const height=600;
 canvas.height=height;
 canvas.width=width;

 //paddle 
 let paddleWidth=50;
 let paddleHeight=10;

//create a rectangle 
context.fillRect(0,0, width, height);
//color of rectangle
context.fillStyle="black";

//create a paddle top
context.fillStyle="white";
context.fillRect(175,0, paddleWidth, paddleHeight);

//paddle bottom
context.fillStyle="white";
context.fillRect(175,height-10, paddleWidth, paddleHeight);

//center line

context.beginPath();
context.setLineDash([6]);
context.moveTo(0,height/2);
context.lineTo(width,height/2);
context.strokeStyle="white";
context.stroke();

//create a circle
 context.beginPath();
 context.arc(width/2, height/2, 10 ,0,2*Math.PI, false);
 context.fillStyle="white";
 context.fill();

 //players scores
 context.fillStyle="white";
 context.font("32px Arial");
 context.fillText("10",20,(height/2) -30);
 context.fillText("10",20,(height/2) +30);