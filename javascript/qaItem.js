var React = require('react');

module.exports = React.createClass ({
	render: function (){
		var obj = this.props.data
		return (
				<div>
					<div className="active title">
					    <i onClick={(e) => this.toggle(e)}></i>
							{obj.question}
					</div>
					<div className="active content">
				    	<p>{obj.answer}</p>
				 	</div>
				</div>)
		}
}) 