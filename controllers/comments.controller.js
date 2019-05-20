var comments = [{    
	user: 'Data',    
	comment: '16'
}, {    
	user: 'Data 2',    
	comment: '32'
}, {    
	user: 'Data 3',    
	comment: '8'
}, {    
	user: 'Data 4',    
	comment: '9'
}];

module.exports = function (socket) {

	// Recent Comments
	for (var i = 0; i<comments.length; i++) {
		socket.emit('comment.add', comments[i]);
		socket.emit('comments.count', {
			count: i + 1
		});
	}

};