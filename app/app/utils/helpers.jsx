import axios from 'axios'

let allUsers = () => {
	return axios.get('/users')
}

let helpers = {
	allUsers
}

export default helpers