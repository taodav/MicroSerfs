import React from 'react'
import {Link} from 'react-router'
import helpers from '../utils/helpers.jsx'

export default class Main extends React.Component {
	constructor(){
		super();
		this.state = {
			users: []
		};
	}

	componentWillMount(){
		helpers.allUsers().then((users) => {
			this.setState({users})
		})
	}

	render(){
		console.log(this.state.users.data)
		return (
			<div>
				<nav className="navbar navbar-inverse">
					<div className="container">
						<div className="navbar-header">
							<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
							<a className="navbar-brand" href="#">MicroSerfs</a>
						</div>
						<div id="navbar" className="collapse navbar-collapse">
							<ul className="nav navbar-nav">
								<li className="active"><a href="#">Home</a></li>
								<li><a href="#about">About</a></li>
								<li><a href="#contact">Contact</a></li>
							</ul>
						</div>
					</div>
				</nav>
				<div className="container">{this.props.children}</div>
			</div>
			)
	}
}