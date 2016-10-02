var React = require('react');
var QAItem = require("./qaItem");
var Menu = require("./navBar/menu");
var gen = require("../utils");

module.exports = React.createClass({
	qAndA: function (className) {
		var obj = this.props.data[this.props.id];
		var questions = Object.keys(obj).map(function(el, i){
			return (
				<QAItem data={obj[el]} />)
		}.bind(this));
		return questions
	},
	render: function () {
		console.log(Object.keys(this.props.data))
		return (<div>
			<Menu topics={Object.keys(this.props.data)} />
			<h2 className="ui dividing header">{gen._formatForSite(this.props.id)}</h2>
			<div className="ui accordion">
			{this.qAndA()}
			</div>
			</div>)
	}
});