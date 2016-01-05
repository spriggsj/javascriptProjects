var leather = new Image();
leather.src = "img/leather.jpg";
function draw(){
    var ctx = document.getElementById('my_canvas').getContext('2d');
    // alert(ctx.canvas.id+" | "+ctx.canvas.width+" | "+ctx.canvas.height);
    // fillStyle = color || hex || rgba() || gradient || pattern
    // createLinearGradient(x0, y0, x1, y1)
    // createRadialGradient(x0, y0, r0, x1, y1, r1)
    // createPattern(Image_Resource, repeat_setting)
    var g1 = ctx.createLinearGradient(0, 0, 200, 0);
    g1.addColorStop(0,"magenta");
    g1.addColorStop(0.5,"yellow");
    g1.addColorStop(1,"black");
    ctx.fillStyle = g1;
    ctx.strokeStyle = "red";
    ctx.lineWidth = 10;
    ctx.fillRect(0, 0, 200, 200);
    ctx.strokeRect(0, 0, 200, 200);
	
    var g2 = ctx.createRadialGradient(350, 100, 0, 350, 100, 200);
    g2.addColorStop(0,"magenta");
    g2.addColorStop(0.5,"yellow");
    g2.addColorStop(1,"black");
    ctx.fillStyle = g2;
    ctx.fillRect(250,0,200,200);
    ctx.strokeRect(250,0,200,200);
	
    var pattern = ctx.createPattern(leather, "repeat");
    ctx.fillStyle = pattern;
    ctx.fillRect(0,250,200,200);
    ctx.lineWidth = 20;
    ctx.strokeStyle = g1;
    ctx.strokeRect(0,250,200,200);
    ctx.fill();
}
window.onload = draw;