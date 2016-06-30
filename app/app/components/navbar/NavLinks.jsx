import React from 'react';
import {Link} from 'react-router'
import auth from '../../utils/auth.jsx'

export default class NavLinks extends React.Component {
	handleClick(e){
		$('.active').removeClass('active')
		e.target.className = 'active';
	}
	render(){
		if (auth.loggedIn()){
			return <LoggedIn handleClick={this.handleClick} />
		} else {
			return <NotLoggedIn handleClick={this.handleClick} />
		}
	}
}						

						

class NotLoggedIn extends React.Component { 
	render(){
		return(
			<ul className="nav navbar-nav">
				<li onClick={this.props.handleClick}><Link to="/">Home</Link></li>
				<li onClick={this.props.handleClick}><Link to="/users/new">Sign Up</Link></li>
				<li onClick={this.props.handleClick}><Link to="/serfs/new">Become A Serf</Link></li>
				<li onClick={this.props.handleClick}><Link to="/sessions/new">Log In</Link></li>
			</ul>
		)
	}
}


class LoggedIn extends React.Component {
	render(){
		return(
			<ul className="nav navbar-nav">
				<li onClick={this.handleClick}><Link to="/">Home</Link></li>
				<li onClick={auth.logout}><Link to="/">
					Log Out</Link>
				</li>
			</ul>
		)
	}
} 
