import express from 'express'
import models from './models';
import users from './routes/users';
import sessions from './routes/sessions'
import serfs from './routes/serfs'
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cookieSession from 'cookie-session';
import engine from 'ejs-mate';
import methodOverride from 'method-override'

const app = express();

// temp front-end views
app.engine('ejs', engine);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(methodOverride('_method'))

// Required middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(cookieParser('S3CR37'));
app.use(cookieSession({
	name:'session',
	keys: ['key1', 'key2']
}))

//setting port
app.set('port', process.env.PORT || 3000);

app.locals.userId = null

//index page
// app.get('/', (req, res) => {
// 	res.render('index', {userId: req.session.userId})
// });

//react app
app.use(express.static(__dirname + '../../app/public'))


//other routes
app.use('/users', users())
app.use('/sessions', sessions())
app.use('/serfs', serfs())

//sync model and listen to server after promise for sync resolves
models.sequelize.sync().then(() => {
	app.listen(app.get('port'), () => {
		console.log("listening on port " + app.get('port'));
	});
})
