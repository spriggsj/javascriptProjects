function draw() {
    var canvas = document.getElementById("canvas1");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.lineWidth = 20;
    ctx.lineCap = "butt"; // butt, round, square
    ctx.lineJoin = "miter"; // bevel, round, miter
    ctx.miterLimit = 2;
    ctx.setLineDash([20,10,30,10,40,10]);
    ctx.lineDashOffset = 30;
    ctx.moveTo(150,150);
    ctx.lineTo(240,240);
    ctx.lineTo(240,40);
    ctx.stroke();
}
window.onload = draw;