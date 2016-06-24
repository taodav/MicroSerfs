import {Router} from 'express'
import models from '../models';

export default () => {
	let app = Router()


	app.get('/new', (req, res) => {
		res.render('tasks/new')
	})

	app.get('/:id', (req, res) => {
		models.Task.find(req.params.id).then((task) => {
			res.render('tasks/show', {task})
		})
	})
	app.post('/', (req, res) => {
		models.Task.create(req.body.task).then((task) => {
			model.User.find(req.params.id).then((user) => {
				res.redirect('/' + task.dataValues.id);
			})
		})
	})
	return app
}