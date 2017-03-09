/* global _ */

import React,{Component} from 'react';
import { getStudents } from '../../../src/reducers/allReducers';
import filter from 'lodash/filter';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import {table} from 'react-bootstrap';


 class viewAllRecords extends Component{
 	constructor(props){
		super(props);
		this.state={
			filterText:''
		};
		
	}

 	static propTypes = {
 		students: React.PropTypes.array.isRequired,
 	};

 	static defaultProps = {
 		students: [],
 	};

 	


 	onClick(e){
 		e.preventDefault();
 		browserHistory.push("student");
 	}

 	handleChange(e){
 		this.setState({[e.target.name]:e.target.value});
 	}	

 	studentInfo(student){
 		if (student) {
 			return (
 					<tbody>
 						<tr>
 						 	<td>{student.studentId}</td>
 						    <td>{student.firstName}</td>
 						 	<td>{student.lastName}</td>
 						 	<td key={student.courses}>{student.courses}</td>
 						</tr>
 					</tbody>
 			);
 		}
 	}

 	onClickFilter(e) {
 		e.preventDefault();
		const filterText = this.state.filterText;
 		console.log(filterText);
 		const filteredRecords = filter(this.props.students, function(student) {
 			console.log(student.courses);
 			console.log(filterText);
 			console.log(student.courses === filterText);
 			console.log(student);
 			return student.courses === filterText ?student : '';
 		});
 		console.log(this.studentInfo);
 		filteredRecords.map(this.studentInfo);
 	}

 	render(){
		return (
		 		<div>
		 			<div>
		 				<input 
		 					type="text" 
		 					name="filterText"
		 					value={this.state.filterText} 
		 					onChange={this.handleChange.bind(this)}
		 				/>
		 				<button 
		 					onClick={this.onClickFilter.bind(this)}>
		 				 FilterResults 
		 				</button>
		 			</div>
		 			<table className="table table-hove">
	 					<th>student Id</th>
	 					<th>FirstName</th>
	 					<th>LastName</th>
	 					<th>Courses</th>
			 			{this.props.students.map(this.studentInfo)}
			 		</table>
			 		<div className="form-group">
	    				<button onClick={this.onClick.bind(this)}>Add new Record</button>
	    			</div>
		 	 	</div>
		 	 );
	}
 }

 function mapStateToProps(state,props){
   return{
   		students:getStudents(state)
   };
 
 }

 export default connect(mapStateToProps)(viewAllRecords);


