canvas = document.getElementById("aCanvas");
ctx = canvas.getContext("2d");
var mouseevent = "empty";
var lastpositionx;
var lastpositiony;
canvas.addEventListener("mousedown", my_mousedown)

function my_mousedown(e)
{
    mouseevent = "mousedown";
    console.log(mouseevent);
}

canvas.addEventListener("mouseup", my_mouseup)

function my_mouseup(e)
{
    mouseevent = "mouseup";
    console.log(mouseevent);
}

canvas.addEventListener("mouseleave", my_mouseleave)

function my_mouseleave(e)
{
    mouseevent = "mouseleave";
    console.log(mouseevent);
}

canvas.addEventListener("mousemove", my_mousemove)

function my_mousemove(e)
{
   var current_mouse_x = e.clientX - canvas.offsetLeft;
   var current_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseevent == "mousedown")
    {
        ctx.beginPath();
        ctx.strokeStyle = red;
        ctx.lineWidth = 3;
        ctx.arc(current_mouse_x, current_mouse_y, radius,0 ,2 * Math.PI);
        ctx.stroke();
    }
    lastpositionx = current_mouse_x
    lastpositiony = current_mouse_y
}