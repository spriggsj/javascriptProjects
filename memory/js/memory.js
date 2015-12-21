/////////////////////////////////////////////////////////////////////////////
/////////////array of pictures to be randomly displayed in the tiles/////////

var memory_array = ['___b','___b','___j','___j','___i','___i','___t','___t','___g','___g','___w','___w','__','__','____5','____5','____c','____c','____j','____j','____9','____9','____m','____m'];
var memory_values = [];
var memory_tile_ids = [];
var tiles_flipped = 0;
var score = 0;

/////////////////////////////////////////////////////////////////////////////
//////////////////array prototype ///////////////////////////////////////////

Array.prototype.memory_tile_shuffle = function(){
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}

//////////////////////////////////////////////////////////////////////////////
/////////////////////////Create new board/////////////////////////////////////

function newBoard(){
	document.getElementById('score').innerHTML =  "<h1>Score: 0 ";
	tiles_flipped = 0;
	var output = '';
    memory_array.memory_tile_shuffle();
	for(var i = 0; i < memory_array.length; i++){
		output += '<div id="tile_'+i+'" onclick="memoryFlipTile(this,\''+memory_array[i]+'\')"></div>';
	}
	document.getElementById('memory_board').innerHTML = output;
	score = 0;	
	
}

//////////////////////////////////////////////////////////////////////////////
///////////////////////flip tiles look for match or flip back/////////////////

function memoryFlipTile(tile,val){
	if(tile.innerHTML == "" && memory_values.length < 2){
		tile.style.background = 'url(img/'+val+'.jpg)';
	
		tile.innerHTML = val;

		if(memory_values.length == 0){
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
		} else if(memory_values.length == 1){
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
			if(memory_values[0] == memory_values[1]){
				tiles_flipped += 2;
				// Clear both arrays
				score++;
				document.getElementById('score').innerHTML = "<h1>Score:  " + score ;
				memory_values = [];
            	memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == memory_array.length){
					alert("Board cleared... generating new board");
					document.getElementById('memory_board').innerHTML = "";				
					newBoard();
				    reset();
					
					countdown('countdown');
				}
			} else {
				function flip2Back(){
				    // Flip the 2 tiles back over
				    var tile_1 = document.getElementById(memory_tile_ids[0]);
				    var tile_2 = document.getElementById(memory_tile_ids[1]);
				    tile_1.style.background = 'url(img/square-owl.png) no-repeat';
				    tile_1.style.backgroundSize = "90% 90%";
            	    tile_1.innerHTML = "";
				    tile_2.style.background = 'url(img/square-owl.png) no-repeat';
				    tile_2.style.backgroundSize = "90% 90%";
            	    tile_2.innerHTML = "";
				    
				    memory_values = [];
            	    memory_tile_ids = [];
				}
				setTimeout(flip2Back, 700);
			}
		}
	}
}
///////////////////////////////////////////////////////////////////////////////////////
////////////Count down timer/////////////////////Count down timer//////////////////////



var interval;
    var minutes = 2;
    var seconds = 0;

    function countdown(element) {
        interval = setInterval(function() {
            var el = document.getElementById(element);
            if(seconds == 0) {
                if(minutes == 0) {
                    alert(el.innerHTML = "countdown's over!");                    
                    clearInterval(interval);
                    return;
                } else {
                    minutes--;
                    seconds = 60;
                }
            }
            if(minutes > 0) {
                var minute_text = minutes + (minutes > 1 ? ' minutes' : ' minute');
            } else {
                var minute_text = '';
            }
            var second_text = seconds > 1 ? 'seconds' : 'second';
            el.innerHTML = minute_text + ' ' + seconds + ' ' + second_text + ' remaining';
            seconds--;
        }, 1000);
    }

function reset() {
    minutes = 2;
    seconds = 0;
    clearInterval(interval);
    interval = null;
}


window.addEventListener('Load' , countdown('countdown'));

window.addEventListener('Load' , newBoard());
