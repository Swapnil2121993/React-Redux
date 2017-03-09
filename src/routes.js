import React,{Component} from 'react';
import {Route,IndexRoute} from 'react-router';
import App from './App';
import Admin from './component/admin/Admin';
import Student from './component/student/Student';
import ViewRecord from './component/student/ViewRecord';
import viewAllRecords from './component/student/viewAllRecords';



export default(
				<Route Path="/" component={App}>
				<IndexRoute component={App}/>
				<Route path="admin" component={Admin}/>
				<Route path="student" component={Student}/>	
				<Route path="record" component={ViewRecord}/>
				<Route path="record/:studentId" component={ViewRecord}/>
				<Route path="allrecords" component={viewAllRecords}/>


				</Route>
			);

	