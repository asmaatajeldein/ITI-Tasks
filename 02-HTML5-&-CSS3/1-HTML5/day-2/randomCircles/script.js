
var canvas = document.querySelector('canvas');


canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var colorInput = document.querySelector("[type=color]");

var ctx = canvas.getContext("2d");

colorInput.addEventListener("input", function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for(var i = 0; i < 300; i++) {
        ctx.beginPath();
        var x = Math.random() * canvas.width;
        var y = Math.random() * canvas.height;
        
        ctx.arc(x, y, 50, 0, Math.PI*2);
        ctx.strokeStyle = colorInput.value;
        ctx.stroke();
    }
});
