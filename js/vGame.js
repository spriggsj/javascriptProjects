function initCanvas(){
    var ctx = document.getElementById('my_canvas').getContext('2d');
    var cW = ctx.canvas.width, cH = ctx.canvas.height;
    var enemies = [ {"id":"enemy1","x":100,"y":-20,"w":30,"h":20},
                    {"id":"enemy2","x":225,"y":-20,"w":10,"h":20},
                    {"id":"enemy3","x":350,"y":-20,"w":40,"h":20},
                    {"id":"enemy4","x":100,"y":-70,"w":20,"h":20},
                    {"id":"enemy5","x":225,"y":-70,"w":40,"h":20},
                    {"id":"enemy6","x":350,"y":-70,"w":40,"h":20},
                    {"id":"enemy7","x":100,"y":-120,"w":10,"h":20},
                    {"id":"enemy8","x":225,"y":-120,"w":40,"h":20},
                    {"id":"enemy9","x":350,"y":-120,"w":40,"h":20},
                    {"id":"enemy10","x":100,"y":-170,"w":10,"h":10},
                    {"id":"enemy11","x":225,"y":-170,"w":40,"h":20},
                    {"id":"enemy12","x":350,"y":-170,"w":40,"h":20},
                    {"id":"enemy13","x":80,"y":-220,"w":40,"h":20},
                    {"id":"enemy14","x":125,"y":-220,"w":5,"h":10},
                    {"id":"enemy15","x":250,"y":-220,"w":40,"h":20},
                    {"id":"enemy16","x":250,"y":-270,"w":20,"h":10},
                    {"id":"enemy17","x":325,"y":-270,"w":20,"h":10},
                    {"id":"enemy18","x":380,"y":-270,"w":10,"h":10}
    ];
    function renderEnemies(){
        for(var i = 0; i < enemies.length; i++){
            ctx.fillStyle = "blue";
            ctx.fillRect(enemies[i].x, enemies[i].y+=.5, enemies[i].w, enemies[i].h);
        }
    }
    function Launcher(){
        this.y = 280, this.x = cW*.5-25, this.w = 30, this.h = 20, this.dir, this.bg="orange", this.missiles = [];
        this.render = function(){
            if(this.dir == 'left'){
                this.x-=5;
            } else if(this.dir == 'right'){
                this.x+=5;
            }
            ctx.fillStyle = this.bg;
            ctx.fillRect(this.x, this.y, this.w, this.h);
            for(var i=0; i < this.missiles.length; i++){
                var m = this.missiles[i];
                ctx.fillStyle = m.bg;
                ctx.fillRect(m.x, m.y-=5, m.w, m.h);
                this.hitDetect(this.missiles[i],i);
                if(m.y <= 0){ // If a missile goes past the canvas boundaries, remove it
                    this.missiles.splice(i,1); // Splice that missile out of the missiles array
                }
            }
            if(enemies.length == 0){
                clearInterval(animateInterval); // Stop the game animation loop
                ctx.fillStyle = '#FC0';
                ctx.font = 'italic bold 36px Arial, sans-serif';
                ctx.fillText('Level Complete', cW*.5-130, 50, 300);
            }
        }
        this.hitDetect = function(m,mi){
            for(var i = 0; i < enemies.length; i++){
                var e = enemies[i];
                if(m.x+m.w >= e.x && m.x <= e.x+e.w && m.y >= e.y && m.y <= e.y+e.h){
                    this.missiles.splice(this.missiles[mi],1); // Remove the missile
                    enemies.splice(i,1); // Remove the enemy that the missile hit
                    document.getElementById('status').innerHTML = "You destroyed "+ e.id;
                }
            }
        }
    }
    var launcher = new Launcher();
    function animate(){
        //ctx.save();
        ctx.clearRect(0, 0, cW, cH);
        launcher.render();
        renderEnemies();
        //ctx.restore();
    }
    var animateInterval = setInterval(animate, 30);
    var left_btn = document.getElementById('left_btn');
    var right_btn = document.getElementById('right_btn');
    var fire_btn = document.getElementById('fire_btn');
    left_btn.addEventListener('mousedown', function(event) {
        launcher.dir = 'left';
    });
    left_btn.addEventListener('mouseup', function(event) {
        launcher.dir = '';
    });
    right_btn.addEventListener('mousedown', function(event) {
        launcher.dir = 'right';
    });
    right_btn.addEventListener('mouseup', function(event) {
        launcher.dir = '';
    });
    fire_btn.addEventListener('mousedown', function(event) {
        launcher.missiles.push({"x":launcher.x+launcher.w*.5,"y":launcher.y,"w":3,"h":10,"bg":"red"});
    });
}
window.addEventListener('load', function(event) {
    initCanvas();
});