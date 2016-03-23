var React = require('react');
var ReactDOM = require('react-dom');
var Menu = require('./menu');
var Learn = require('./learn');
var myDataRef = new Firebase('https://study-guide.firebaseio.com/');
var topics = myDataRef.child("topics"); 

topics.on("value", function(snapshot) {//when a value changes  
 	var data = snapshot.val();
 	render (data)
});

var routes = {
	'/learn': function() {
		ReactDOM.render(
			<Learn data={data} />,
				document.getElementById('container')
		);
	}
}

var router = Router( routes );
router.init('/learn');

function render (data) {
	ReactDOM.render(
	<Menu data={data} />,
		document.getElementById('Menu')
	);
}
