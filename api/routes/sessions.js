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
			attributes: ['id', 'first_name', 'last_name', 'email'],
			where: {
				email
			}
		}).then((user) => {
// REFACTOR THIS
			var token;
			var id;
			var authenticated;
			var err;
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
				user,
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
