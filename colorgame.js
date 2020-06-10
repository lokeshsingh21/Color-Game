var sz=6;
var colors=[];
randomColors();

var reset=document.getElementById("reset");
var colorDisp=document.getElementById("colorDisplay");
var h1=document.querySelector("h1");
var msg=document.getElementById("msg");
var squares=document.querySelectorAll(".square");
var easy=document.getElementById("easy");
var hard=document.getElementById("hard");

easy.addEventListener("click",function(){
	sz=3;
	easy.classList.add("selected");
	hard.classList.remove("selected");
	set();
	for(var i=3;i<6;i++){
		squares[i].style.backgroundColor = "#232323";
	}
});

hard.addEventListener("click",function(){
	sz=6;
	hard.classList.add("selected");
	easy.classList.remove("selected");
	set();
});

var picked=colors[getRandom(sz)];
colorDisp.textContent=picked;

reset.addEventListener("click", function(){
	reset.textContent="New Colors";
	set();
});

for(var i=0;i<sz;i++){
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click",function(){
		var clicked=this.style.backgroundColor;
		if(clicked===picked){
				reset.textContent="Play Again?";
				msg.textContent="Correct!";
				changeColor(picked);
		}
		else{
			msg.textContent="Try Again!";
			this.style.backgroundColor = "#232323";
		}
	});
}

function set(){
	randomColors();
	msg.textContent="";
	h1.style.backgroundColor = "steelblue";
	picked=colors[getRandom(sz)];
	colorDisp.textContent=picked;
	for(var i=0;i<sz;i++){
		squares[i].style.backgroundColor = colors[i];
	}
}

function changeColor(color){
	h1.style.backgroundColor = color;
	for(var i=0;i<sz;i++){
		squares[i].style.backgroundColor = color;
	}
}

function getRandom(len){
	return Math.floor(Math.random()*len);
}

function randomColors(){
	for(var i=0;i<6;i++){
		var a=getRandom(256);
		var b=getRandom(256);
		var c=getRandom(256);
		colors[i]="rgb("+a+", "+b+", "+c+")";
	}
}