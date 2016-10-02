var Router = require('director').Router;
var React = require('react');
var ReactDOM = require('react-dom');
// var Learn = require('./components/learn');
// var Search = require('./components/searchResults');
var myDataRef = new Firebase('https://study-guide.firebaseio.com/');
var topics = myDataRef.child("topics"); 
var Load = require("./renderer");

var routes = {
	'/home': function() {
		topics.on("value", function(snapshot) {//when a value changes  
		 	var data = snapshot.val();
		 	topics = Object.keys(data);
		 	Load("Welcome", topics);
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
		Load("Search");
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
