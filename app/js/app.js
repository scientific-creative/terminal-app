var socket = io('http://localhost:5000');

var canvas = document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
ctx.font="16px Arial";
ctx.textAlign = "center";

socket.on('place.add', function (data) {
	ctx.fillText(data.place, canvas.width/2, canvas.height/2);
});
