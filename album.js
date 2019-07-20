var i = 0;

var img = [];
var time = 1000;

img[0]='pics/cute1-2.jpg';
img[1]='pics/cute2-2.jpg';
img[2]='pics/cute3-2.jpg';
img[3]='pics/cute4-2.jpg';
img[4]='pics/cute5-2.jpg';
img[5]='pics/cute6-2.jpg';
img[6]='pics/cute7-2.jpg';
img[7]='pics/cute8-2.jpg';

function changeimg()
{
	document.slide.src = img[i];	
	if(i < img.length -1){
		i++
	}
	else{
		i = 0;
	}
	setTimeout("changeimg()", time);
}
function addfav() {
	var c = document.getElementById("my_list").childElementCount;
	if ( c < 5){
	var newElement = document.createElement("li");
	var DOM_img = document.createElement("img");
	DOM_img.src = document.slide.src;
	var list = document.getElementById("my_list");
	my_list.appendChild(DOM_img);
	}
	else {
		window.alert("You reached max number, delete a picture to continue");
	}
	
	

  
}
function removefav(){
	var olddata=document.getElementById("my_list").lastChild;
	document.getElementById("my_list").removeChild(olddata);
}


window.onload = changeimg;