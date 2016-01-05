//document.write('hello');

function changeBg(el,clr){
	var elem = document.getElementById(el);
	elem.style.transition = 'background 1.0s linear 0s';
	elem.style.background = clr;

}

function fadeOut(el){
	var elem = document.getElementById(el);
	elem.style.transition = 'opacity 1.0s linear 0s';
	elem.style.opacity = 0;

}

function fadeIn(el){
	var elem = document.getElementById(el);
	elem.style.transition = 'opacity 1.0s linear 0s';
	elem.style.opacity = 1;

}

function slideIn(el){
	var elem = document.getElementById(el);
	elem.style.transition = 'width 1.0s linear 0s';
	elem.style.width = "0px";

}

function slideOut(el){
	var elem = document.getElementById(el);
	elem.style.transition = 'width 1.0s linear 0s';
	elem.style.width = "400px";

}

function slideUp(el){
	var elem = document.getElementById(el);
	elem.style.transition = 'height 1.0s ease-in 0s';
	elem.style.height = "0px";

}

function slideDown(el){
	var elem = document.getElementById(el);
	elem.style.transition = 'height 1.0s ease-out 0s';
	elem.style.height = "200px";

}