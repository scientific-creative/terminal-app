var places = [{    
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quam dui, feugiat id egestas vitae, egestas quis ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed at vestibulum lorem, vitae porttitor arcu. Nam sollicitudin, ligula non pharetra viverra, libero nisi ullamcorper turpis, vel tincidunt turpis mauris vehicula metus. Cras tempus felis sit amet diam accumsan feugiat. Mauris auctor risus lectus, vitae laoreet magna tempus vitae. In sed urna sit amet velit tempus pulvinar. Praesent nisi sapien, eleifend in volutpat sed, efficitur eu leo. Praesent aliquam vestibulum iaculis. Integer eleifend tellus in sodales sodales.',    
	section: '1'
}];


module.exports = function (socket) {
	for (var i = 0; i<journey.length; i++) {
		socket.emit('places.add', journey[i]);
		socket.emit('journey.count', {
			count: i + 1
		});
	}

};