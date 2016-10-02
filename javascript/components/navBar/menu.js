var React = require('react');
var Search = require("./search.js");
var Sidebar = require("./sidebar");

module.exports = React.createClass({
	componentDidMount: function () {
        document.body.addEventListener('click', this.myHandler);
    },
    componentDidUnmount: function () {
        document.body.removeEventListener('click', this.myHandler);
    },
    myHandler: function () {
        var sidebarVisibility = document.getElementById("sidebar").style.visibility
        if (sidebarVisibility === "initial"){
        	document.getElementById("sidebar").style.visibility = "hidden"
        }
    },
	showSideBar: function () {
		document.getElementById("sidebar").style.visibility = "initial"
		React.findDOMNode( this.refs.sidebar ).style.visibility = "initial";
	},
	render: function () {
		return (
			<div>
			<Sidebar topics={this.props.topics} />
			<div className="ui fixed inverted menu">
			  <div className="ui container">
			    <a onClick={this.showSideBar} className="launch icon item">
			      <i className="content icon hamburger"></i>
			    </a>
			      <div className="item">
			        <a href="#home">Intermediate Javascript Study Guide</a>
			      </div>
			    <div className="right menu">
			      <Search />
			      <div className="item">
			        <a href="update.html">Add</a>
			      </div>
			    </div>
			  </div>
	</div>
			</div>)
	}
});