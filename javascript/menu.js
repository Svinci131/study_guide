var React = require('react');

module.exports = React.createClass({
	render: function () {
		return (<div>
			<div id="sidebar" className="ui simple sidebar inverted vertical menu" data-reactid=".0.0">
			</div>
			<div className="ui fixed inverted menu">
			  <div className="ui container">
			    <a className="launch icon item">
			      <i className="content icon hamburger"></i>
			    </a>
			      <div className="item">
			        Intermediate Javascript Study Guide
			      </div>
			    
			    <div className="right menu">
			      <div className="item">
			        User
			      </div>
			      <div className="item">
			        <a href="update.html">Add</a>
			      </div>
			      <div className="vertically fitted borderless item">
			        <iframe className="github" src="http://ghbtns.com/github-btn.html?user=semantic-org&amp;repo=semantic-ui&amp;type=watch&amp;count=true" allowtransparency="true" frameborder="0" scrolling="0" width="100" height="20"></iframe>
			      </div>
			    </div>
			  </div>
	</div>
			</div>)
	}
});
