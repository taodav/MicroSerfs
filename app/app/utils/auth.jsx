import axios from 'axios'

let auth = {
	login(user, callback){
		if (this.loggedIn()){
			callback(true);
			return;
		}
		axios.post('/sessions', user).then((res) => {
			if (res.authenticated) {
				localStorage.token = res.token
				callback(true)
			} else {
				callback(false, res.error)
			}
		})
	},

	loggedIn(){
		return !!localStorage.token
	},

	logout(callback){
		axios.delete('/sessions').then((res) => {
			if (res.err) {
				callback(false)
			} else {
				callback(true)
			}
		})
	},

	register(data, type, callback) {
		axios.post('/' + type, data).then((res) => {
			callback(true)
		})
	}
}

export default auth