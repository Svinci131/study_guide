var React = require('react');
var gen = require('./gen_functions')

module.exports = React.createClass({
	render: function () {
		console.log(this.props.id)
		return (<div>
			<h2 className="ui dividing header">{gen._formatForSite(this.props.id)}</h2>
			</div>)
	}
});