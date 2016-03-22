var React = require('react');

module.exports = React.createClass({
	getTopics: function () {
		var obj = this.props.data;
		var arr = Object.keys(obj).reduce(function( arr, currentItem) {
			arr.push( currentItem);
			return arr;
		}, []);
		
		var items = arr.map (function (item){
			return (<a href={"#"+item+"/"} className="item">
		        {item}
		      </a>)
		})
		return items
	},
	render: function () {
		return (
			<div>
			<div id="sidebar" className="ui simple sidebar inverted vertical menu" data-reactid=".0.0">
				{this.getTopics()}
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
