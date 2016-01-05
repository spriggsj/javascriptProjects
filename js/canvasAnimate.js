function initCanvas(){
    var ctx = document.getElementById('my_canvas').getContext('2d');
    var cW = ctx.canvas.width, cH = ctx.canvas.height;
    var y = 0, x = 0, h = 525, w = 200;
    function animate(){
        ctx.save();
        //if ctx.clear is not used it will draw a continues line
        ctx.clearRect(0, 0, cW, cH);
        // Draw here
        //ctx.rotate(-.1);
        ctx.fillStyle = "magenta";
        ctx.fillRect(0, y, 50, 50);
        ctx.rotate(.3);
        ctx.fillStyle = "blue";
        ctx.fillRect(x, 0, 50, 50);

        ctx.fillStyle = "black";
        ctx.fillRect(h, w, 20, 20);

        ctx.fillStyle = "red";
        ctx.fillRect(250, x, 20, 20);
        y++;
        x++;
        h-=3;
        w--;
        ctx.restore();
    }
    var animateInterval = setInterval(animate, 30);
    ctx.canvas.addEventListener('click', function(event) {
        clearInterval(animateInterval);
    });
    ctx.canvas.addEventListener('dblclick', function(event) {
         initCanvas();
    });
}
window.addEventListener('load', function(event) {
    initCanvas();
});