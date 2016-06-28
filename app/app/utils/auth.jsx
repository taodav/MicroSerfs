import axios from 'axios'

let auth = {
	login(user, callback){
		if (this.loggedIn()){
			callback(true);
			return;
		}
		axios.post('/sessions', user).then((res) => {
			if (res.data.authenticated) {
				localStorage.token = res.data.token
				localStorage.id = res.data.user.id
				if (callback) callback(true);
			} else {
				callback(false, res.data.error)
			}
		})
	},

	getUser(id, callback){
		axios.get('/users/' + id).then((res) => {
			callback(res.data)
		})
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
			this.login(res.data.user, callback)
		})
	}
}

export default auth