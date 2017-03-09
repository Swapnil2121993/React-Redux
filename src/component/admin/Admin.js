import React,{Component} from 'react';
import AdminPage from './AdminPage';

class Admin extends Component{
	render(){
		return(

				<div className="row">
				<div className="col-md-4 col-md-offset-4">
				<AdminPage/>
				</div>
				</div>
			);
	}
}

export default Admin;