import React from 'react'
import Nav from './Nav.jsx';
import helpers from '../utils/helpers.jsx'

export default class Main extends React.Component {

	render(){
		return (
			<div>
				<Nav />
				<div className="container">{this.props.children}</div>
			</div>
			)
	}
}