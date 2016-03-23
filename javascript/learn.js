var React = require('react');
var gen = require('./gen_functions')

module.exports = React.createClass({
	qAndA: function () {
		var obj = this.props.data[this.props.id];
		console.log("here", obj)
		var questions = Object.keys(obj).map(function(el, i){
			console.log(obj[el], i)
			return (<div className="active title">
		    <i className="dropdown icon"></i>
				{obj[el].question}
		  </div>)
		});
		return questions
	},
	render: function () {
		
		return (<div>
			<h2 className="ui dividing header">{gen._formatForSite(this.props.id)}</h2>
			<div className="ui accordion">
			{this.qAndA()}
			</div>
			</div>)
	}
});