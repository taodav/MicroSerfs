import React from 'react'
import UnregisteredHome from './UnregisteredHome.jsx'
import RegisteredUserHome from './RegisteredUserHome.jsx'
import auth from '../../utils/auth.jsx'

export default class Home extends React.Component {
	constructor(){
		super();
		this.state = {
			user: null
		}
	}
	componentWillMount(){
		if (auth.loggedIn()){
			auth.getUser(localStorage.id).then((res) => {
				this.setState({user: res.data.user})
			})
		}
	}
	render(){
		if (auth.loggedIn()){
			return (
				<RegisteredUserHome user={this.user} />
			)
		} else {
			return (
				<UnregisteredHome />
			)
		}
	}
}