import express from 'express'
import models from './models';
import bodyParser from 'body-parser';
import users from './routes/users';
import cookieParser from 'cookie-parser';
import cookieSession from 'cookie-session';
import engine from 'ejs-mate';
import sessions from './routes/sessions'
import methodOverride from 'method-override'

const app = express();

app.engine('ejs', engine);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(methodOverride('_method'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(cookieParser('S3CR37'));
app.use(cookieSession({
	name:'session',
	keys: ['key1', 'key2']
}))
app.set('port', process.env.PORT || 3000);

app.locals.userId = null

app.get('/', (req, res) => {
	res.render('index', {userId: req.session.userId})
});

app.use('/users', users())
app.use('/sessions', sessions())


app.listen(app.get('port'), () => {
	console.log("listening on port " + app.get('port'));
});
