var React = require('react');
var gen = require('./gen_functions')

module.exports = React.createClass({
	toggle: function () {
		var className = "caret down icon"
		return className;
		// body...
	},
	qAndA: function (className) {
		
		var obj = this.props.data[this.props.id];
		
		var questions = Object.keys(obj).map(function(el, i){
			console.log(obj[el], i)
			return (
				<div>
					<div className="active title">
					    <i className={className}></i>
							{obj[el].question}
					</div>
					<div className="active content">
				    	<p>{obj[el].answer}</p>
				 	</div>
				</div>)
		});
		return questions
	},
	render: function () {
		
		return (<div>
			<h2 className="ui dividing header">{gen._formatForSite(this.props.id)}</h2>
			<div className="ui accordion">
			{this.qAndA(this.toggle())}
			</div>
			</div>)
	}
});