import React from 'react'
import {Router} from 'react-router'
import axios from 'axios'

export default class CreateUser extends React.Component {
	constructor(props, context){
		super(props, context);
		this.state = {
			email: '',
			password_hash: ''
		}
		this.addRef = this.addRef.bind(this)
		this.newUser = this.newUser.bind(this)
	}
	newUser(){
		axios.post('/users', this.state).then((user) => {
			this.context.router.transitionTo("/")
		})
	}

	addRef(ref){
		this.setState({
			ref: ref.value
		})
	}

	render(){
		return (
			<div>
				<h3>Sign Up!</h3>
				<form onSubmit={this.newUser}>
					<div className="form-group">
						<label for="exampleInputName2">Email</label>
						<input type="text" className="form-control" ref={this.addRef} placeholder="Email" name="user[email]" />
					</div>
					<div className="form-group">
						<label for="exampleInputEmail2">Password</label>
						<input type="password" className="form-control" ref={this.addRef} placeholder="Password" name="user[password_hash]" />
					</div>
					<button type="submit" className="btn btn-primary">Sign Up</button>
				</form>
			</div>
		)
	}
}

CreateUser.contextTypes = {
  router: function contextType() {
    return React.PropTypes.func.isRequired;
  }
};