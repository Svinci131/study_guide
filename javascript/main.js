var Router = require('director').Router;
var React = require('react');
var ReactDOM = require('react-dom');
var Home = require('./home');
var Menu = require('./menu');
var Learn = require('./learn');
var myDataRef = new Firebase('https://study-guide.firebaseio.com/');
var topics = myDataRef.child("topics"); 

topics.on("value", function(snapshot) {//when a value changes  
 	var data = snapshot.val();
 	render (data)
});



var routes = {
	'/home': function() {
		console.log("foo")
		ReactDOM.render(
			<Home />,
				document.getElementById('container')
		);
	},
	'/learn/:id': function(id) {
		console.log(id)
		ReactDOM.render(
			<Learn id={id} />,
				document.getElementById('container')
		);
	}
	
}

var router = Router( routes );
router.init('/home');

function render (data) {
	ReactDOM.render(
	<Menu data={data} />,
		document.getElementById('Menu')
	);
}
