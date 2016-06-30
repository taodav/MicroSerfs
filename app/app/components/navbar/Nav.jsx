import React from 'react';
import {Link, hashHistory} from 'react-router'
import NavLinks from './NavLinks.jsx'

export default class Nav extends React.Component {
	
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
						<NavLinks />
					</div>
				</div>
			</nav>
		)
	}
}