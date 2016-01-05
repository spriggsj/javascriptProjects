function makeEditable(div){
    div.style.border = "1px solid #000";
    div.style.padding = "20px";
    div.contentEditable = true;
}
function makeReadOnly(div){
    div.style.border = "none";
    div.style.padding = "0px";
    div.contentEditable = false;
    alert("Run Ajax POST request here to save the div.innerHTML \
    or div.textContent to the database.");
}