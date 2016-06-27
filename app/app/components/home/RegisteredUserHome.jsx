import React from 'react';
import {Link} from 'react-router'
import auth from '../../utils/auth.jsx'

export default class RegisteredUserHome extends React.Component {
	componentWillMount() {
		auth.getUser(localStorage.id).then((res) => {
			console.log(res.data)
			this.user = res.data.user
		})
	}
	render(){
		return(
			<div className="starter-template">
				<h1>Welcome Back, {this.user.first_name}</h1>
		        <p className="lead">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
	        </div>
		)
	}
}