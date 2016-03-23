var React = require('react');
// var gen = require('./gen_functions');

import {
	_formatForSite,
	_formatForFB,
} from './gen_functions';
import Hello from './hello';

module.exports = React.createClass({
	getInitialState: function () {
		return {
			arrow: true
		}
	},
	toggle: function () {
		var current; 
		if (this.state.arrow){

			this.setState({
				arrow: false
			}, function(){
				current = this.state.arrow

			})

		}
		return current;
		
		// body...
	},
	qAndA: function (className) {
		var obj = this.props.data[this.props.id];
		var questions = Object.keys(obj).map(function(el, i){
			return (
				<div>
					<div className="active title">
					    <i onClick={this.toggle}></i>
							{obj[el].question}
					</div>
					<div className="active content">
				    	<p>{obj[el].answer}</p>
				 	</div>
				</div>)
		}.bind(this));
		return questions
	},
	render: function () {
		
		return (<div>
			<h2 className="ui dividing header">{_formatForSite(this.props.id)}</h2>
			<Hello />
			<div className="ui accordion">
			{this.qAndA()}
			</div>
			</div>)
	}
});