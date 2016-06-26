import React from 'react'
import {withRouter, hashHistory} from 'react-router'
import axios from 'axios'
import Alert from './Alert.jsx'
import auth from '../../utils/auth.jsx'

class CreateUser extends React.Component {
	constructor(){
		super();
		this.newUser = this.newUser.bind(this);
		this.state = {
			active: false,
			err: ''
		}
	}

	componentWillMount() {
	    if (this.props.myType === "users"){
			this.message = "Sign Up!";
		} else {
			this.message = "Become A Serf!";
		};  
	}
	newUser(e){
		e.preventDefault();
		let data = {
			first_name: this.refs.firstName.value,
			last_name: this.refs.lastName.value,
			phone: this.refs.phone.value,
			email: this.refs.email.value,
			password_hash: this.refs.password.value
		}
		auth.register(data, this.props.myType, (res) => {
			if (res.err !== null) {
				hashHistory.push('/')
			} else {
				this.setState({
					active: true,
					err: res.err
				})
			}
		})
	}

	render(){
		return (
			<div>
				<h3>{this.message}</h3>
				<Alert type={this.state.err} active={this.state.active} />
				<div className="form-group">
					<label for="exampleInputName2">First Name</label>
					<input type="text" className="form-control" ref="firstName" placeholder="Jane" />
				</div>
				<div className="form-group">
					<label for="exampleInputName2">Last Name</label>
					<input type="text" className="form-control" ref="lastName" placeholder="Doe" />
				</div>
				<div className="form-group">
					<label for="exampleInputName2">Phone Number</label>
					<input type="text" className="form-control" ref="phone" placeholder="+65 88888888" />
				</div>
				<div className="form-group">
					<label for="exampleInputName2">Email</label>
					<input type="text" className="form-control" ref="email" placeholder="Email" />
				</div>
				<div className="form-group">
					<label for="exampleInputEmail2">Password</label>
					<input type="password" className="form-control" ref="password" placeholder="Password" />
				</div>
				<button onClick={this.newUser} className="btn btn-primary">Sign Up</button>
			</div>
		)
	}
}

export default withRouter(CreateUser);