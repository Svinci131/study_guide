/* CURRENTLY IN: javascript/main.js */
var myDataRef = new Firebase('https://study-guide.firebaseio.com/');
var topics = myDataRef.child("topics"); 

//set up a thing so select goes to default if new topic has something or vice-versa
//or just thow error 
$("#suggestion").on('submit', function (e) {
      e.preventDefault();
      //add new topic
      var topic = $(".new-topic").val();
      if (topic) {
      	var newTopic = topics.child(""+topic);
      	newTopic.set("no questions available")
      }
      
      	
      //update topic
      //add questions


});


//
//topics.push({question: "samantha"}, );