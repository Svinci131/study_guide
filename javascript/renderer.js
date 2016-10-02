var React = require('react');
var ReactDOM = require('react-dom');
var Menu = require('./components').Menu;
var Learn = require('./components').Learn;
var Search = require('./components').Search;
var Welcome = require('./components').Welcome;

var Load = {
	Search: function () {
		ReactDOM.render(
			<Search />,
			document.getElementById('container')
		);
	}, 
	Welcome: function (topics){
		ReactDOM.render(
			<Welcome topics= { topics } />,
			document.getElementById('container')
		);
	},
	Learn: function (data, id) {
		ReactDOM.render(
			<Learn id= { id } data= { data } />,
			document.getElementById('container')
		);
	}

}

module.exports = function render (page, data, id) {
	Load[page](data, id);
}