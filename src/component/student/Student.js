import React,{Component} from 'react';
import StudentPage from './StudentPage';
import {Link} from 'react-router';

class Student extends Component{
	render(){
		return(
				<div className="row">
					<div className="col-md-4 col-md-offset-4">
						<StudentPage/>
					</div>
				</div>
			);
	}
}

export default Student;