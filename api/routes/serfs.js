import {Router} from 'express'
import models from '../models';
import tasks from './tasks'

export default () => {
	let app = Router({mergeParams: true})

	app.get('/new', (req, res) => {
		res.render('serfs/new')
	})

	app.get('/:id', (req, res) => {
		models.Serf.find({
			where: {
				id: req.params.id
			},
			include: [models.Task]	
		}).then((serf) => {
			res.render('serfs/show', {serf})
		})
	})

	app.post('/', (req, res) => {
		models.Serf.create(req.body.serf).then((serf) => {
			req.session.serfId = serf.dataValues.id
			req.app.locals.serfId = serf.dataValues.id
			res.send(serf)
		})
	})
	return app
}