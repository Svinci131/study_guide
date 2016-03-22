/* CURRENTLY IN: javascript/main.js */
var myDataRef = new Firebase('https://study-guide.firebaseio.com/');
var topics = myDataRef.child("topics"); 

$("#suggestion").on('submit', function (e) {
      e.preventDefault();
      console.log ("works")	
});
//
//topics.push({question: "samantha"}, );