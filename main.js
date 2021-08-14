canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image();
	img_imgTag.onload = uploadimg;
	img_imgTag.src = img_image;
}
function uploadimg() {
	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90)){
			alphabetkey();
			document.getElementById("Key_Info").innerHTML = "You pressed an alphabet key";
			console.log("alphabet key");
		}
		
		if(keyPressed >= 48 && keyPressed <= 57){
			numberkey();
			document.getElementById("Key_Info").innerHTML = "You pressed a number key";
			console.log("number key");
		}
		if(keyPressed >= 37 && keyPressed <= 40){
			arrowkey();
			document.getElementById("Key_Info").innerHTML = "You pressed an arrow key";
			console.log("arrow key");
		}
		if((keyPressed >= 108 && keyPressed <= 111)||(keyPressed >= 186 && keyPressed <= 191)||(keyPressed >= 219 && keyPressed <= 222)){
			specialkey();
			document.getElementById("Key_Info").innerHTML = "You pressed a special key";
			console.log("special key");
		}
		if((keyPressed == 9)(keyPressed >= 13 && keyPressed <= 17)||(keyPressed == 27)||(keyPressed == 32)||(keyPressed == 46)){
			extrakey();
			document.getElementById("Key_Info").innerHTML = "You pressed an extra key";
			console.log("extra key");
		}
}

function alphabetkey()
{
	img_image = "Alpkey.png";
	add();
}
function numberkey()
{
	img_image = "numkey.png";
	add();
}
function arrowkey()
{
	img_image = "Arrkey.png";
	add();
}
function specialkey()
{
	img_image = "spkey.png";
	add();
}
function extrakey()
{
	img_image = "otherkey.png";
	add();
}
	
