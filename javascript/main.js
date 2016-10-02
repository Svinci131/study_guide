var Router = require('director').Router;
var myDataRef = new Firebase('https://study-guide.firebaseio.com/');
var topics = myDataRef.child("topics"); 
var Load = require("./renderer");
var search = require("./store/searchFunctions").search;
;
var routes = {
	'/home': function() {
		topics.on("value", function(snapshot) {//when a value changes  
		 	var data = snapshot.val();
		 	data = Object.keys(data);
		 	Load("Welcome", data);
		});
	},
	'/learn/:id': function(id) {
		topics.on("value", function(snapshot) {//when a value changes  
		 	var data = snapshot.val();
		 	Load("Learn", data, id);
		});
	},
	'/search/:query': function(query) {
		search(query);
		// Load("Search");
	}
};

var router = Router( routes );
router.init('/home');
