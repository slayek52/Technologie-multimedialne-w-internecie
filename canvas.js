var canvas = document.getElementById("Canvas");
var ctx = canvas.getContext('2d');

var img = new Image(); 
  img.addEventListener("load", function() {
  canvas.height = img.height;
  canvas.width = img.width;    
  ctx.drawImage(img,0,0);
}, false);



img.src = 'https://cdn.xl.thumbs.canstockphoto.com/illustration-car-view-from-above-vehicle-isolated-on-white-background-vector-clip-art-vector_csp42432468.jpg'; 
canvas.addEventListener("click", function (evt) {
    var mousePos = getMousePos(canvas, evt);
    alert(mousePos.x + ',' + mousePos.y);
}, false);

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}