import React from 'react'
import {Link} from 'react-router'

const Home = () => 
			<div className="starter-template">
				<h1>Jumbotron heading</h1>
		        <p className="lead">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
		        <p><Link className="btn btn-lg btn-success" to="/users/new">Sign up today</Link></p>
		        <p>Or</p>
		        <p><Link className="btn btn-lg btn-success" to="/serfs/new">Become a Serf today</Link></p>
	        </div>

export default Home