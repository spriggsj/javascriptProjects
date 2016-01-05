
function draw() {
    var ctx = document.getElementById("my_canvas").getContext("2d");
    // You can back-reference the canvas element through the context object
    //alert(ctx.canvas.id+" | "+ctx.canvas.width+" | "+ctx.canvas.height);
    ctx.fillStyle="red";
    ctx.fillRect(20,20,100,100);
    ctx.fillRect(200,200,50,50);
    ctx.strokeRect(20,20,100,100);
    ctx.clearRect(0, 0, 100, 100);
}
window.onload = draw;