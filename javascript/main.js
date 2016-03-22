/* CURRENTLY IN: javascript/main.js */
var myDataRef = new Firebase('https://study-guide.firebaseio.com/');
var topics = myDataRef.child("topics"); 

//set up a thing so select goes to default if new topic has something or vice-versa
//or just thow error 
$("#suggestion").on('submit', function (e) {
      e.preventDefault();
      //add new topic
      var newTopic = $(".new-topic").val();
      if (newTopic) {
      	var newTopicObj = topics.child(""+newTopic);
      	newTopicObj.set("no questions available")
      }
      else {

      }
      //update topic
      //add questions


});

topics.on("value", function(snapshot) {//when a value changes  
 	var data=snapshot.val();
 	var obj = {};
 	for (topic in data) {
 		$(".old-topic").append("<option>"+topic+"</option>")
 	}
 	
});
//
//topics.push({question: "samantha"}, );