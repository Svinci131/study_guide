// var Firebase = require('firebase');
var myDataRef = new Firebase('https://study-guide.firebaseio.com/');
var topics = myDataRef.child("topics"); 

function search (data, query) {
	// myDataRef.on("value", function(snapshot) {//when a value changes  
	// 	var data = snapshot.val().topics;
		var results = Object.keys(data).reduce(function(arr, topic) {
			var topicObj = data[topic];
			 	var matches = Object.keys(topicObj).reduce(function(arr, item) {
					var answer = topicObj[item].answer; 
					var question = topicObj[item].question;
					////match
					var questionM = contains (question, query);
				    var answerM = contains (question, query);
				    // console.log(answer, question, topic);
					if (questionM > -1 || answerM > -1) {
						arr.push ({
							topic: topic, 
							answer: answer, 
							question: question
						});
					}
					return arr;
				}, []);

				console.log(matches);
			return arr.concat(matches);

		}, []); 	

		return results
	// });
}

function contains (string, query) {
	string = string.toLowerCase();
	return string.indexOf(query) ;
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
