var Router = require('director').Router;
var React = require('react');
var ReactDOM = require('react-dom');
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
		 	Load("Learn", data, id);
		});
	},
	'/search/:query': function(query) {
		Load("Search");
	}
};

var router = Router( routes );
router.init('/home');
