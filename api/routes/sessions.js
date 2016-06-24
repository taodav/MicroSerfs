import {Router} from 'express'
import models from '../models';

export default () => {
	let app = Router()

	app.get('/new', (req, res) => {
		res.render('sessions/new')
	})

	app.post('/', (req, res) => {
		var email = req.body.user.email
		models.User.find({
			where: {
				email: email
			}
		}).then((user) => {
			if(user.email === email && user.password === req.body.user.password){
				req.session.userId = user.dataValues.id
				req.app.locals.userId = user.dataValues.id
				res.redirect('/users/' + user.dataValues.id);	
			} else {
				res.render('sessions/new', {error: "Incorrect username/password combination."})
			}
		})
	})

	app.delete('/', (req, res) => {
		req.session.userId = null
		res.redirect('/')
	})
	return app
}