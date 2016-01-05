function togglecheckboxes(master,group){
	var cbarray = document.getElementsByClassName(group);
	for(var i = 0; i < cbarray.length; i++){
		var cb = document.getElementById(cbarray[i].id);
		cb.checked = master.checked;
	}
}