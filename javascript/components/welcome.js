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

// <p> This is a basic study guide with some sample Javascript and Computer Science questions
// 		// For more information please contact: <a href="svinci131@gmail.com"</a></p>
// 		// </p>