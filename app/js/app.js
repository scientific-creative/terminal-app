var socket = io('http://localhost:5000');

// Add a comment
socket.on('place.add', function (data) {
    var $row = $('<span> ' + data.place + '</span>');
    $('#terminal').append($row);
});
