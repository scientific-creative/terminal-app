// Set up Node socket.io server
var express = require('express'),    
	app = express(),    
	http = require('http'),    
	socketIO = require('socket.io'),    
	server, io;	
var path = require('path');
var public = path.join(__dirname, 'app');

// Home page (index.html)
app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html');
});

// Serve static assets and files
app.use('/app', express.static(public));

// Dev (/app/index.html)
app.get('/dev', function (req, res) {
	res.sendFile(__dirname + '/app/index.html');
});

// Instnatiate server at port 5000
server = http.Server(app);
server.listen(5000);

io = socketIO(server);

// On client connection
io.on('connection', function (socket) {  
	console.log('a user connected');
	var controllers = ['comments', 'posts'];
	for (var i = 0; i<controllers.length; i++) {
        require('./controllers/' + controllers[i] + '.controller')(socket);
    }
});