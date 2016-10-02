var React = require('react');
// var Search = require('../store/searchFunctions');

module.exports = React.createClass({
	render: function () {
		return (<div class="item">
				      <div class="ui icon input">
				        <input type="text" onKeyDown={this.add} onC placeholder="Search..." />
				        <i class="search link icon"></i>
				      </div>
				    </div>)
	},
	add: function(event){
        if(event.keyCode == 13) {
        	//router.get('/search', event.target.value);
        	window.location = "file:///Users/samanthavinci/Desktop/study_guide/index.html#/search/"+event.target.value
           //window.location = "http://svinci131.github.io/study_guide/index.html/#search/"+event.target.value
        }
     }
});