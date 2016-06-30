import React from 'react';
import GoogleMapsLoader from 'google-maps'
import axios from 'axios'
import {hashHistory} from 'react-router'

export default class CreateTask extends React.Component {
	componentWillMount() {
		GoogleMapsLoader.KEY = process.env.GOOGLE_MAPS_API_KEY
		GoogleMapsLoader.load((google) => {
			new google.maps.Map(document.getElementById('map'), {
				center: {
					lat: 40.7413549,
					lng: -73.9980244
				},
				zoom: 13
			});
		})   
	}

	handleClick(){
		let data = {
			name: this.refs.name.value,
			price: this.refs.price.value,
			description: this.refs.description.value
		}
		axios.post('users/' + this.props.params.id + '/tasks', data).then(() => {
			hashHistory.push('/')
		})
	}
	render(){
		return(
			<div>
				<h3>New Task</h3>
				<div id="map" /><br />
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