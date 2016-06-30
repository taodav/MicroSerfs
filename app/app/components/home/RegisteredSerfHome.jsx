import React from 'react';

export default class RegisteredSerfHome extends React.Component {
	render(){
		return <div>{this.props.serf.first_name}</div>
	}
}