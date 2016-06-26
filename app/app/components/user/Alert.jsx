import React from 'react'

export default class Alert extends React.Component {
	componentWillMount() {
	      if(this.props.err === "nil-user") {
	      	this.message = "No user with given email found.";
	      } else if (this.props.err === "incorrect-password") {
	      	this.message = "Incorrect password.";
	      }
	}

	render(){
		if (this.props.active) {
			return (
				<div className="alert alert-danger" role="alert">
					{this.props.message}
				</div>
			)
		} else {
			return <div></div>;
		}
	}
}