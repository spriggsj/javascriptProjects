var fname, lname, gender, country;
function _(x){
	return document.getElementById(x);
}
function processPhase1(){
	fname = _("firstname").value;
	lname = _("lastname").value;
	if(fname.length > 2 && lname.length > 2){
		_("phase1").style.display = "none";
		_("phase2").style.display = "block";
		//progressbar and status on each phase. 33 for 3 phases 25 for 4 etc.
		_("progressBar").value = 33;
		_("status").innerHTML = "Phase 2 of 3";
	} else {
	    alert("Please fill in the fields");	
	}
}
function processPhase2(){
	gender = _("gender").value;
	if(gender.length > 0){
		_("phase2").style.display = "none";
		_("phase3").style.display = "block";
		_("progressBar").value = 66;
		_("status").innerHTML = "Phase 3 of 3";
	} else {
	    alert("Please choose your gender");	
	}
}
function processPhase3(){
	country = _("country").value;
	if(country.length > 0){
		_("phase3").style.display = "none";
		_("show_all_data").style.display = "block";
		_("display_fname").innerHTML = fname;
		_("display_lname").innerHTML = lname;
		_("display_gender").innerHTML = gender;
		_("display_country").innerHTML = country;
		_("progressBar").value = 100;
		_("status").innerHTML = "Data Overview";
	} else {
	    alert("Please choose your country");	
	}
}
function submitForm(){
	_("multiphase").method = "post";
	_("multiphase").action = "my_parser.php";
	_("multiphase").submit();
}

// Or use ajax request instead of my_parser.php