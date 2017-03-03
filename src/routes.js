import React,{Component} from 'react';
import {Route,IndexRoute} from 'react-router';
import App from './App';
import Admin from './component/admin/Admin';
import Student from './component/student/Student';

export default(
				<Route Path="home" component={App}>
				<IndexRoute component={App}/>
				<Route path="admin" component={Admin}/>
				<Route path="student" component={Student}/>	
				</Route>
			);

	
