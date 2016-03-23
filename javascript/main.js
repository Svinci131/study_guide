var Router = require('director').Router;
var React = require('react');
var ReactDOM = require('react-dom');
var Home = require('./home');
var Menu = require('./menu');
var Learn = require('./learn');
var myDataRef = new Firebase('https://study-guide.firebaseio.com/');
var topics = myDataRef.child("topics"); 



//on load or when fire base updates 
//render 
//we want to render on route- 

var routes = {
	'/home': function() {
		topics.on("value", function(snapshot) {//when a value changes  
		 	var data = snapshot.val();
		 	render().renderMenu(data)
		});
	},
	'/learn/:id': function(id) {
		topics.on("value", function(snapshot) {//when a value changes  
		 	var data = snapshot.val();
		 	render().renderMenu(data)
		 	render().renderLearn(id, data)
		});
		
	}
	
}

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
