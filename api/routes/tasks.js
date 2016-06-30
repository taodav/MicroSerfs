import {Router} from 'express'
import models from '../models';

export default () => {
	let app = Router({mergeParams: true})


	app.get('/new', (req, res) => {
		models.Serfs.findAll().then((serfs) => {
			res.render('tasks/new', {serfs})
		})
	})

	app.get('/:id', (req, res) => {
		models.Task.find(req.params.id).then((task) => {
			res.render('tasks/show', {task})
		})
	})
	app.post('/', (req, res) => {
		// models.Task.create(req.body.task).then((task) => {
			models.User.find(req.params.userId).then((user) => {
				console.log(user)
				user.createTask(req.body).then((task) => {
					res.redirect('/users/' + req.params.userId + "/tasks/" + task.id);
				})
			})
		// })
	})
	return app
}