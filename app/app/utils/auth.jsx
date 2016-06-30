import axios from 'axios'

let auth = {
	login(user, type, callback){
		if (this.loggedIn()){
			callback(true);
			return;
		}
		axios.post('/sessions/' + type, user).then((res) => {
			if (res.data.authenticated) {
				localStorage.token = res.data.token
				localStorage.id = res.data.user.id
				localStorage.type = type
				callback(true);
			} else {
				callback(false, res.data.error)
			}
		})
	},

	getUser(id, type, callback){
		axios.get('/users/' + id).then((res) => {
			callback(res.data)
		})
	},

	loggedIn(){
		return !!localStorage.token
	},

	logout(){
		console.log('Logged Out')
		localStorage.clear()
	},

	register(data, type, callback) {
		axios.post('/' + type, data).then((res) => {
			this.login(res.data, type, callback)
		})
	}
}

export default auth