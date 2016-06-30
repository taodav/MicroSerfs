import React from 'react'
import UnregisteredHome from './UnregisteredHome.jsx'
import RegisteredUserHome from './RegisteredUserHome.jsx'
import RegisteredSerfHome from './RegisteredSerfHome.jsx'
import auth from '../../utils/auth.jsx'

export default class Home extends React.Component {
	constructor(){
		super();
		this.state = {
			user: {
				first_name: "",
				last_name: "",
				email: ""
			}
		}
	}
	componentWillMount(){
		if (auth.loggedIn()){
			auth.getUser(localStorage.id, localStorage.type, (user) => {
				this.setState({user})
			})
		}
	}
	render(){
		if (auth.loggedIn() && localStorage.type == "users"){
			return (
				<RegisteredUserHome user={this.state.user} />
			)
		} else if (auth.loggedIn()) {
			return (
				<RegisteredSerfHome serf={this.state.user} />
			)
		}

		else {
			return (
				<UnregisteredHome />
			)
		}
	}
}