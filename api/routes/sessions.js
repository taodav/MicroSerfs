import {Router} from 'express'
import models from '../models';

export default () => {
	let app = Router()

	app.get('/new', (req, res) => {
		res.render('sessions/new')
	})

	app.post('/:type', (req, res) => {
		var email = req.body.email
		findUser(email, req.params.type).then((user) => {
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
		}).catch((err) => {
			console.log("no user found")
		})
	})

	app.delete('/', (req, res) => {
		req.session.userId = null
		res.redirect('/')
	})

	function findUser(email, type){
		if (type === "serfs") {
			return models.Serf.find({
				where: {
					email
				}
			})
		} else {
			return models.User.find({
				where: {
					email
				}
			})
		}
	}

	function userExists(user) {
		return user !== null
	}

	return app
}
