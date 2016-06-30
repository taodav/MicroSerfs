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


	render(){
		return(
			<div>
				<h3>New Task</h3>
				<div id="map" /><br />
				<div>{this.props.children}</div>
			</div>
		)
	}
}