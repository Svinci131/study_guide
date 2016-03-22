var React = require('react');
var ReactDOM = require('react-dom');
var Menu = require('./menu');
var myDataRef = new Firebase('https://study-guide.firebaseio.com/');
var topics = myDataRef.child("topics"); 

topics.on("value", function(snapshot) {//when a value changes  
 	var data = snapshot.val();
 	render (data)
});

function render (data) {
	ReactDOM.render(
	<Menu data={data} />,
		document.getElementById('Menu')
	);
}
