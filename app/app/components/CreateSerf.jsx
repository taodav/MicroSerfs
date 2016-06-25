import React from 'react'

export default class CreateSerf extends React.Component {
	render(){
		return (
			<div>
				<h3>Become A Serf!</h3>
				<form className="form-inline" action="/serfs" method="POST">
					<div className="form-group">
						<label for="exampleInputName2">Email</label>
						<input type="text" className="form-control" id="exampleInputName2" placeholder="Email" name="user[email]" />
					</div>
					<div className="form-group">
						<label for="exampleInputEmail2">Password</label>
						<input type="password" className="form-control" id="exampleInputEmail2" placeholder="Password" name="user[password_hash]" />
					</div>
					<button type="submit" className="btn btn-primary">Send invitation</button>
				</form>
			</div>
		)
	}
}