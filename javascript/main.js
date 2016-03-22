/* CURRENTLY IN: javascript/main.js */
var myDataRef = new Firebase('https://study-guide.firebaseio.com/');
var topics = myDataRef.child("topics"); 

//add questions function
function _addQuestionInput () {
	$(".question-container").append("<div class='field'><label>Suggested Question:</label><textarea class='question' rows='2'></textarea></div><div class='field'><label>Provide an Answer:</label><textarea rows='3'></textarea></div>")
}
$(".add-question").on("click", function (){
	alert();
	_addQuestionInput ()
})
//set up a thing so select goes to default if new topic has something or vice-versa
//or just thow error 
//set up what to do if nothing is clicked
$("#suggestion").on('submit', function (e) {
      e.preventDefault();
      //set topic
      var newTopic = $(".new-topic").val();
      var oldTopic = $(".old-topic").val();
      var currentTopic;
      //add new topic
      if (newTopic) {
      	newTopic = _formatForSite(newTopic) 
      	//check to be sure it doesn't exist
      	var newTopicObj = topics.child(""+newTopic);
      	newTopicObj.set("no questions available")
      	currentTopic = newTopic;
      }
      else {
      	oldTopic = _formatForSite(oldTopic)
      	currentTopic = oldTopic;
      }
      //add questions

});

topics.on("value", function(snapshot) {//when a value changes  
 	var data = snapshot.val();
 	var obj = {};
 	for (topic in data) {
 		topic = _formatForSite (topic)
 		$(".old-topic").append("<option>"+topic+"</option>")
 		$("#sidebar").append("<a class='item'>"+topic+'</a>')
 	}
});

//deal with all caps
function _formatForFB (str) {
	str = str.replace(/[.,\/#!'$%\^&\*;:{}=\-_`~()]/g,"")
	str = str.replace(" ","_").toLowerCase();
	return str
}
function _formatForSite (str) {
	var arr = str.split("_")
	var newArr = arr.map(function (txt) {
		 txt = txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
		 return txt
	});
	return newArr.join(" ")
}
//
//topics.push({question: "samantha"}, );