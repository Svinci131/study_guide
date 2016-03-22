var React = require('react');
var ReactDOM = require('react-dom');
var Menu = require('./menu');
var myDataRef = new Firebase('https://study-guide.firebaseio.com/');
var topics = myDataRef.child("topics"); 

topics.on("value", function(snapshot) {//when a value changes  
 	var data = snapshot.val();
 	var obj = {};
 	$(".old-topic").html("<option value='default'>Choose a Topic</option>")
 	$("#sidebar").empty()
 	for (topic in data) {
 		$(".old-topic").append("<option id="+topic+">"+topic+"</option>")
 		$("#sidebar").append("<a class='item link-sidebar'>"+topic+'</a>')
 	}
});


ReactDOM.render(
	<Menu />,
		document.getElementById('Menu')
);