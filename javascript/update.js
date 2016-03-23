/* CURRENTLY IN: javascript/main.js */
var myDataRef = new Firebase('https://study-guide.firebaseio.com/');
var topics = myDataRef.child("topics"); 
//Form Events
//add questions function
$(".add-question").on("click", function (){
	_addQuestionInput ()
})
//if you have admin privilidges
//set up what to do if nothing is clicked
$("#suggestion").on('submit', function (e) {
      e.preventDefault();
      //set topic
      var newTopic = $(".new-topic").val();
      var oldTopic = $(".old-topic").val();
      var currentTopic;
      //add new topic
      //if they've added a new topic 

      if (newTopic) {
      	if (oldTopic !== "default") {
      		alert("Please select only one topic.")
      	}

      	else {
      		newTopic = _formatForFB(newTopic) 
	      	//check to be sure it doesn't exist
	      	var isThere = $("#"+newTopic).val(); 
	      	
	      	//if it doesn't set
	      	if (!isThere) {
	      		var newTopicObj = topics.child(""+newTopic);
	      		newTopicObj.set("no questions available")
	      	}
	      	//otherwise just use the existing obj
	      	currentTopic = newTopic;
      	}
      	
      }
      //otherwise grab old 
      else {
      	oldTopic = _formatForFB(oldTopic)
      	if (oldTopic !== "default") {
      		currentTopic = oldTopic;
      	}
      }
      if (!currentTopic) {
      	alert();
      }
      //add questions
      $(".question-box").each (function(i, el){
      	var quest = $(el).find(".question").val()
      	var answer = $(el).find(".answer").val()
      	//if they give an question
      	if (quest) {
	      	//if there is a topic 
	      	if (!currentTopic) {
	      		alert(currentTopic, "Please select the topic where this questions belongs.")
	      	}
	      	else {
	      		topics.child(""+currentTopic).push({question: quest, answer: answer});
	      		console.log(currentTopic)
	      	}
      	}

      
      });
      //reset
      this.reset();
});
//keeps adding 
topics.on("value", function(snapshot) {//when a value changes  
 	var data = snapshot.val();
 	var obj = {};
 	$(".old-topic").html("<option value='default'>Choose a Topic</option>")
 	$("#sidebar").empty()
 	for (topic in data) {
 		topic = _formatForSite (topic)
 		$(".old-topic").append("<option id="+_formatForFB(topic)+">"+topic+"</option>")
 		$("#sidebar").append("<a class='item link-sidebar'>"+topic+'</a>')
 	}
});
//General Events
//side bar
$(".hamburger").on("click", function(){
	console.log("test")
	$("#sidebar").css("visibility", "initial")
});
$("body").on("click", function(e){
	var sidebar = $("#sidebar").css("visibility"); 
	if (sidebar === "visible") {
		if (!$(e.target).hasClass('hamburger')) {
			if (!$(e.target).hasClass('link-sidebar')) {
			console.log($(e.target).id)
			$("#sidebar").css("visibility", "hidden")
			}
		}
	}
});
//side bar

function _addQuestionInput () {
	$(".question-container").append("<div class='question-box'><div class='field'><label>Suggested Question:</label><textarea class='question' rows='2'></textarea></div><div class='field'><label>Provide an Answer:</label><textarea class='answer' rows='3'></textarea></div></div>")
}
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