var React = require('react');

module.exports = React.createClass({
	render: function () {
		return (<div class="item">
				      <div class="ui icon input">
				        <input type="text" placeholder="Search..." />
				        <i class="search link icon"></i>
				      </div>
				    </div>)
	}
});