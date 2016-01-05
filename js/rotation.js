var looper;
var degrees = 0;

function rotateAnimation(el,speed){
	var elem = document.getElementById(el);
	if(navigator.userAgent.match("Chrome")){
		elem.style.WebkitTransform = "rotate("+degrees+"deg)";
	} else if(navigator.userAgent.match("Firefox")){
		elem.style.MozTransform = "rotate("+degrees+"deg)";
	} else if(navigator.userAgent.match("MSIE")){
		elem.style.msTransform = "rotate("+degrees+"deg)";
	} else if(navigator.userAgent.match("Opera")){
		elem.style.OTransform = "rotate("+degrees+"deg)";
	} else {
		elem.style.transform = "rotate("+degrees+"deg)";
	}
	looper = setTimeout('rotateAnimation(\''+el+'\','+speed+')',speed);
	degrees++;
	if(degrees > 359){
		degrees = 1;
	}
	document.getElementById("status").innerHTML = "rotate cog 1("+degrees+"deg)";
}


var looper2;
var degrees2 = 0;

function rotateAnimation2(el,speed){
	var elem = document.getElementById(el);
	if(navigator.userAgent.match("Chrome")){
		elem.style.WebkitTransform = "rotate("+degrees2+"deg)";
	} else if(navigator.userAgent.match("Firefox")){
		elem.style.MozTransform = "rotate("+degrees2+"deg)";
	} else if(navigator.userAgent.match("MSIE")){
		elem.style.msTransform = "rotate("+degrees2+"deg)";
	} else if(navigator.userAgent.match("Opera")){
		elem.style.OTransform = "rotate("+degrees2+"deg)";
	} else {
		elem.style.transform = "rotate("+degrees2+"deg)";
	}
	looper2 = setTimeout('rotateAnimation2(\''+el+'\','+speed+')',speed);
	degrees2--;
	if(degrees2 < -359){
		degrees2 = -1;
	}
	document.getElementById("status2").innerHTML = "rotate cog 2("+degrees+"deg)";
}

		
var looper3;
var degrees3 = 0;

function rotateAnimation3(el,speed){
	var elem = document.getElementById(el);
	if(navigator.userAgent.match("Chrome")){
		elem.style.WebkitTransform = "rotate("+degrees3+"deg)";
	} else if(navigator.userAgent.match("Firefox")){
		elem.style.MozTransform = "rotate("+degrees3+"deg)";
	} else if(navigator.userAgent.match("MSIE")){
		elem.style.msTransform = "rotate("+degrees3+"deg)";
	} else if(navigator.userAgent.match("Opera")){
		elem.style.OTransform = "rotate("+degrees3+"deg)";
	} else {
		elem.style.transform = "rotate("+degrees3+"deg)";
	}
	looper2 = setTimeout('rotateAnimation3(\''+el+'\','+speed+')',speed);
	degrees3--;
	if(degrees3 < -359){
		degrees3 = -1;
	}
	document.getElementById("status3").innerHTML = "rotate cog 3("+degrees+"deg)";
}

var looper4;
var degrees4 = 0;

function rotateAnimation4(el,speed){
	var elem = document.getElementById(el);
	if(navigator.userAgent.match("Chrome")){
		elem.style.WebkitTransform = "rotate("+degrees4+"deg)";
	} else if(navigator.userAgent.match("Firefox")){
		elem.style.MozTransform = "rotate("+degrees4+"deg)";
	} else if(navigator.userAgent.match("MSIE")){
		elem.style.msTransform = "rotate("+degrees4+"deg)";
	} else if(navigator.userAgent.match("Opera")){
		elem.style.OTransform = "rotate("+degrees4+"deg)";
	} else {
		elem.style.transform = "rotate("+degrees4+"deg)";
	}
	looper2 = setTimeout('rotateAnimation4(\''+el+'\','+speed+')',speed);
	degrees4++;
	if(degrees4 > 359){
		degrees4 = 1;
	}
	document.getElementById("status4").innerHTML = "rotate cog 4("+degrees+"deg)";
}

    
window.addEventListener('Load' , rotateAnimation("img1",30));
setTimeout(function() { rotateAnimation2("img2",30)},600)
window.addEventListener('Load' , rotateAnimation3("img3",1));
window.addEventListener('Load' , rotateAnimation4("img4",60));
//window.addEventListener('Load' , rotateAnimation2("img2",30),2000);

