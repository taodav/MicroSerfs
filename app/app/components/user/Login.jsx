import React from 'react';
import {withRouter, hashHistory} from 'react-router'
import axios from 'axios'
import auth from '../../utils/auth.jsx'
import Alert from './Alert.jsx'

class Login extends React.Component {
	constructor(){
		super();
		this.state = {
			err: '',
			active: false
		}
	}
	handleClick(e){
		let data = {
			email: this.refs.email.value,
			password_hash: this.refs.password.value
		}
		auth.login(data, (auth, err) => {
			if (auth === true) {
				hashHistory.push('/')
			} else {
				this.setState({
					err,
					active: true
				})
			}
		})
	}

	render(){
		return(
			<div>
				<h3>Login</h3>
				<Alert type={this.state.err} active={this.state.active}/>
				<div className="form-group">
					<label for="exampleInputName2">Email</label>
					<input type="text" className="form-control" ref="email" placeholder="Email" name="user[email]" />
				</div>
				<div className="form-group">
					<label for="exampleInputEmail2">Password</label>
					<input type="password" className="form-control" ref="password" placeholder="Password" name="user[password_hash]" />
				</div>
				<button onClick={this.handleClick.bind(this)} className="btn btn-primary">Login As A User</button><br /><br />
				<button onClick={this.handleClick.bind(this)} className="btn btn-primary">Login As A Serf</button>
			</div>
		)
	}
}

export default withRouter(Login);