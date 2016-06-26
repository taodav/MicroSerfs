import React from 'react';
import {Link} from 'react-router'

export default class Nav extends React.Component {
	handleClick(e){
		$('.active').removeClass('active')
		e.target.className = 'active';
	}
	render(){
		return (
			<nav className="navbar navbar-inverse">
				<div className="container">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<Link to="/" className="navbar-brand">MicroSerfs</Link>
					</div>
					<div id="navbar" className="collapse navbar-collapse">
						<ul className="nav navbar-nav">
							<li onClick={this.handleClick.bind(this)}><Link to="/">Home</Link></li>
							<li onClick={this.handleClick.bind(this)}><Link to="/users/new">Sign Up</Link></li>
							<li onClick={this.handleClick.bind(this)}><Link to="/serfs/new">Become A Serf</Link></li>
							<li onClick={this.handleClick.bind(this)}><Link to="/sessions/new">Log In</Link></li>
						</ul>
					</div>
				</div>
			</nav>
		)
	}
}