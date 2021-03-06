var React = require('react');
var QAItem = require("./qaItem");
var gen = require('./gen_functions');

// import {
// 	_formatForSite,
// 	_formatForFB,
// } from './gen_functions';
// import Hello from './hello';

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
		
		return (<div>
			<h2 className="ui dividing header">{gen._formatForSite(this.props.id)}</h2>
			<div className="ui accordion">
			{this.qAndA()}
			</div>
			</div>)
	}
});