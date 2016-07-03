import React from 'react';
import {Link} from 'react-router'
import auth from '../../utils/auth.jsx'

export default class RegisteredUserHome extends React.Component {

	render(){
		return(
			<div className="starter-template">
				<h1>Welcome Back, {this.props.user.first_name}</h1>
		        <p className="lead">Get something done today.</p>
		        <Link to={"/tasks"} className="btn btn-primary">Create A Task</Link>
	        </div>
		)
	}
}