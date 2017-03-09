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
			filterText:'',
			filteredRecords: [],
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
 		const filteredRecords = filter(this.props.students, function(student) {
 			return student.courses === filterText ?student : '';
 		});
 		this.setState({filteredRecords});
 		
 	}

 	render() {
 		console.log(this.state);
 		const {
 			students,
 		} = this.props;

 		const {
 			filteredRecords
 		} = this.state;

 		let records = students;

 		if (filteredRecords.length > 0 ) {
 			records = filteredRecords;
 		}

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
			 			<tbody>
 							{records.map((record) => {
 								return (
	 								<tr>
	 									<td>{record.studentId}</td>
	 						    		<td>{record.firstName}</td>
	 						 			<td>{record.lastName}</td>
	 						 			<td key={record.courses}>{record.courses}</td>
		 						 	</tr>
 								);
 							})}
 					</tbody>
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


