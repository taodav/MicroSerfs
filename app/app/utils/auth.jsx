import axios from 'axios'

let auth = {
	login(user, callback){
		if (this.loggedIn()){
			callback(true);
			return;
		}
		axios.post('/sessions', user).then((res) => {
			if (res.data.authenticated) {
				// localStorage.token = res.data.token
				localStorage.id = res.data.id
				console.log(localStorage.id)
				callback(true)
			} else {
				callback(false, res.data.error)
			}
		})
	},

	getUser(id){
		return axios.get('/users/' + id)
	},

	loggedIn(){
		return !!localStorage.token
	},

	logout(callback){
		axios.delete('/sessions').then((res) => {
			if (res.data.err) {
				callback(false)
			} else {
				localStorage.clear()
				callback(true)
			}
		})
	},

	register(data, type, callback) {
		axios.post('/' + type, data).then((res) => {
			this.login(res.data, callback)
		})
	}
}

export default auth