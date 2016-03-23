var React = require('react');

module.exports = React.createClass ({
	getInitialState: function () {
		return {
			arrow: true
		}
	},
	toggleUpdate: function () {
		var current; 
		if (this.state.arrow){
			console.log("here", this.state.arrow)
			this.setState({
				arrow: false
			}, function(){
				current = "caret left icon"
				console.log("here", this.state.arrow)
				return current;
			});
		}
		else {
			this.setState({
				arrow: true
			}, function(){
				console.log("here", this.state.arrow)
				return current;
			});
		}
		
	},
	toggleDraw: function (argument) {
		var arrowClass =  "caret down icon"
		var answerClass; 
		if (!this.state.arrow){
			arrowClass =  "caret right icon"
		}
		return arrowClass;
	},
	render: function (){
		var obj = this.props.data
		return (
				<div>
					<div className="active title">
					    <i onClick={(e) => this.toggleUpdate(e)} className={this.toggleDraw()}></i>
							{obj.question}
					</div>
					<div className="active content">
				    	<p>{obj.answer}</p>
				 	</div>
				</div>)
		}
}) 