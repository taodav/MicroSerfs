import {Router} from 'express'
import models from '../models';
import tasks from './tasks'

export default () => {
	let app = Router({mergeParams: true})

	app.use('/:userId/tasks', tasks())

	app.get('/:id', (req, res) => {
		models.User.find(req.params.id).then((users) => {
			res.send(users)
		})
	})

	app.get('/new', (req, res) => {
		res.render('users/new')
	})

	app.get('/:id', (req, res) => {
		models.User.find({
			where: {
				id: req.params.id
			},
			include: [models.Task]	
		}).then((user) => {
			res.render('users/show', {user})
		})
	})

	app.post('/', (req, res) => {
		models.User.create(req.body).then((user) => {
			req.session.userId = user.dataValues.id
			req.app.locals.userId = user.dataValues.id
			req.session.save()
			// add validations and errors
			res.send(user);
		})
	})
	return app
}