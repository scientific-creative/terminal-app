var posts = [{
	user: 'Spiderman',
    title: 'Updated: 16/04/19'
}, {
    user: 'Batman',
    title: 'Updated: 05/04/19'
}];

module.exports = function (socket) {

var i = 0;
var addingPosts = setInterval(function () {
    if (posts[i]) {
        socket.emit('post.add', posts[i]);
        socket.emit('posts.count', {
            count: i + 1
        });
        i++;
    } else {
        clearInterval(addingPosts);
    }
}, 2000);
};