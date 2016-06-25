import React from 'react'
import Main from '../components/Main.jsx'
import CreateUser from '../components/CreateUser.jsx'
import CreateSerf from '../components/CreateSerf.jsx'
import Home from '../components/Home.jsx'
import {Route, IndexRoute} from 'react-router'

const routes = () =>
		<Route path="/" component={Main}>
			<Route path="users/new" component={CreateUser} />
			<Route path="serfs/new" component={CreateSerf} />
			<IndexRoute component={Home} />
		</Route>


export default routes()