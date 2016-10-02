var Router = require('director').Router;
var React = require('react');
var ReactDOM = require('react-dom');
var Menu = require('./components/menu');
var Learn = require('./components/learn');
var Search = require('./components/searchResults');
var Welcome = require('./components/welcome');
var myDataRef = new Firebase('https://study-guide.firebaseio.com/');
var topics = myDataRef.child("topics"); 
var data = null; 

var routes = {
	'/home': function() {
		topics.on("value", function(snapshot) {//when a value changes  
		 	var data = snapshot.val();
		 	ReactDOM.render(
				<Welcome data={data}/>,
				document.getElementById('container')
			);
		});
	},
	'/learn/:id': function(id) {
		topics.on("value", function(snapshot) {//when a value changes  
		 	var data = snapshot.val();
		 	render().renderMenu(data);
		 	render().renderLearn(id, data);
		});
	},
	'/search/:query': function(query) {
		ReactDOM.render(
			<Search />,
			document.getElementById('container')
		);
	}
};

var router = Router( routes );
router.init('/home');

function render (data) {
	var obj = {
		renderMenu: function (data) {
			ReactDOM.render(
				<Menu data={data} />,
					document.getElementById('Menu')
			);
		},
		renderLearn: function (id, data) {
			ReactDOM.render(
			<Learn id={id} data={data}/>,
				document.getElementById('container')
			);
		}
	}
	return obj;	
}
