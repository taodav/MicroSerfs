import React from 'react'
import {hashHistory, Link} from 'react-router'

export default class TaskForm extends React.Component {
	handleClick(){
		let data = {
			name: this.refs.name.value,
			price: this.refs.price.value,
			description: this.refs.description.value
		}
		// axios.post('users/' + this.props.params.id + '/tasks', data).then(() => {
			hashHistory.push('/search')
		// })
	}
	render(){
		return (
			<div>
				<div className="form-group">
					<label for="exampleInputName2">Task Name</label>
					<input type="text" className="form-control" ref="name" placeholder="Pick up my laundry"/>
				</div>
				<div className="form-group">
					<label for="exampleInputEmail2">Description</label>
					<textarea className="form-control" ref="description" placeholder="Description" />
				</div>
				<div className="form-group">
					<label for="exampleInputEmail2">Price</label>
					<input type="number" className="form-control col-sm-2" ref="price" placeholder="Price($)" />
				</div>
				<button onClick={this.handleClick.bind(this)} className="btn btn-primary">Call A Serf</button><br /><br />
			</div>
		)
	}
}
