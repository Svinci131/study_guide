// var Firebase = require('firebase');
var myDataRef = new Firebase('https://study-guide.firebaseio.com/');
var topics = myDataRef.child("topics"); 

function search (string) {
	alert(string)
	myDataRef.on("value", function(snapshot) {//when a value changes  
		var data = snapshot.val().topics;
		Object.keys(data).map(function(topic) {
			topic = data[topic];
			
			console.log(topic, data);
		}); 	
		//loop through each topic
		//loop through each q and a letter by letter until u find match
		
	});
}


module.exports ={
	search: search
}
// var searchModel = {
// 	//recentSearches 
// }

/////
///LOOK THROUGH ALL TOPICS
//LOOK THROUGH EVER QUESTION AND ANSWER if they contain word store index 


// export function _storeUserLocally (prop, val) {
// 	localStorage.setItem(prop, val);
// }

// export function _retrieveUserFromStorage (prop) {
// 	return localStorage.getItem(prop);
// }
