var React = require('react');
var gen = require('../../utils');

module.exports = React.createClass({
	getTopics: function () {
		console.log(this.props)
		var items = this.props.topics.map(function (item){
			return (<a href={"#learn/"+item} className="item">
		        {gen._formatForSite(item)}
		      </a>)
		});
		return items;
	},
	render: function () {
		return (
			<div id="sidebar" className="ui simple sidebar inverted vertical menu" ref="sidebar">
				{this.getTopics()}
			</div>
		)
	}
});

