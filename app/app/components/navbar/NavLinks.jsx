import React from 'react';
import {Link} from 'react-router'
import auth from '../../utils/auth.jsx'

export default class NavLinks extends React.Component {
	handleClick(e){
		$('.active').removeClass('active')
		e.target.className = 'active';
	}
	render(){
		return (
			<div>
				<li onClick={this.handleClick.bind(this)}><Link to="/">Home</Link></li>
				{if (auth.loggedIn()){}
					<LoggedIn handleClick={this.handleClick} />
				{}} else {}
					<NotLoggedIn handleClick={this.handleClick} />
				{}}
			</div>
		)
	}
}

class NotLoggedIn extends React.Component { 
	render(){
		return(
			<div>
				<li onClick={this.props.handleClick}><Link to="/users/new">Sign Up</Link></li>
				<li onClick={this.props.handleClick}><Link to="/serfs/new">Become A Serf</Link></li>
				<li onClick={this.props.handleClick}><Link to="/sessions/new">Log In</Link></li>
			</div>
		)
	}
}


class LoggedIn extends React.Component {
	render(){
		return(
			<div>
				<li onClick={auth.logout()}><Link to="/">
					Log Out</Link>
				</li>
			</div>
		)
	}
} 
