var React = require('react');
var gen = require('./gen_functions')

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
	getTopics: function () {
		var obj = this.props.data;
		var items = Object.keys(obj).map(function (item){
			return (<a href={"#learn/"+item} className="item">
		        {gen._formatForSite(item)}
		      </a>)
		});
		return items;
	},
	showSideBar: function () {
		//document.getElementById("sidebar").style.visibility = "initial"
		React.findDOMNode( this.refs.sidebar ).style.visibility = "initial";
	},
	render: function () {
		return (
			<div>
			<div id="sidebar" className="ui simple sidebar inverted vertical menu" ref="sidebar">
				{this.getTopics()}
			</div>
			<div className="ui fixed inverted menu">
			  <div className="ui container">
			    <a onClick={this.showSideBar} className="launch icon item">
			      <i className="content icon hamburger"></i>
			    </a>
			      <div className="item">
			        <a href="#home" >Intermediate Javascript Study Guide</a>
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
