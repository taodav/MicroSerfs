import React from 'react'
import Main from '../components/Main.jsx'
import CreateUser from '../components/user/CreateUser.jsx'
import Home from '../components/home/Home.jsx'
import Login from '../components/user/Login.jsx'
import CreateTask from '../components/tasks/CreateTask.jsx'
import {Route, IndexRoute} from 'react-router'

const CreateUserWrapper = () => <CreateUser myType={"users"} />
const CreateSerfWrapper = () => <CreateUser myType={"serfs"} />


const routes = () =>
		<Route path="/" component={Main}>
			<Route path="users/new" component={CreateUserWrapper} />
			<Route path="users/:id">
				<Route path="/tasks/new" component={CreateTask} />
			</Route>
			<Route path="serfs/new" component={CreateSerfWrapper} />
			<Route path="sessions/new" component={Login} />
			<IndexRoute component={Home} />
		</Route>


export default routes()