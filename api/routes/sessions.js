import {Router} from 'express'
import models from '../models';

export default () => {
	let app = Router()

	app.get('/new', (req, res) => {
		res.render('sessions/new')
	})

	app.post('/', (req, res) => {
		var email = req.body.email
		models.User.find({
			where: {
				email: email
			}
		}).then((user) => {

			let token;
			let authenticated;
			let err;
			console.log(user)
			if (userExists(user) && req.body.password_hash === user.password_hash){
				authenticated = true
				token = Math.random().toString(36).substring(7)
			} else {
				authenticated = false
				token = null
				if (userExists(user)) {
					err = {type: "nil-user"}
				} else {
					err = {type: "incorrect-password"}
				}
			}

			res.send({
				authenticated,
				token,
				err
			});
		})
	})

	app.delete('/', (req, res) => {
		req.session.userId = null
		res.redirect('/')
	})

	function userExists(user) {
		return user !== null
	}

	return app
}
