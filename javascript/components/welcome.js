var React = require('react');
var Menu = require("./navBar/menu");

module.exports = React.createClass({
	render: function () {
		return (<div>
			<Menu topics={this.props.topics} />
			<h1>Welcome!</h1>
		</div>)
	}
});
