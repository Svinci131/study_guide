var React = require('react');
var Menu = require("./menu");

module.exports = React.createClass({
	render: function () {
		return (<div>
			<Menu topics={this.props.topics} />
			<h1>Welcome!</h1>
		</div>)
	}
});
