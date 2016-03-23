var React = require('react');

module.exports = React.createClass ({
	getInitialState: function () {
		return {
			arrow: false
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
		var styles = {
			arrowClass: "caret down icon",
			answerClass: "visible active content"
		}
		if (!this.state.arrow){
			styles.arrowClass =  "caret right icon";
			styles.answerClass= "invisible active content";
		}
		return styles;
	},
	render: function (){
		var obj = this.props.data
		return (
				<div>
					<div className="active title">
					    <i onClick={(e) => this.toggleUpdate(e)} className={this.toggleDraw().arrowClass}></i>
							{obj.question}
					</div>
					<div className={this.toggleDraw().answerClass}>
				    	<p>{obj.answer}</p>
				 	</div>
				</div>)
		}
}) 