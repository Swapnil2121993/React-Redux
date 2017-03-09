import React,{Component} from 'react';
import { getStudents } from '../../../src/reducers/allReducers';
import filter from 'lodash/filter';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import {table} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';


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
		 					onChange={this.handleChange.bind(this)}/>
		 				
		 				<button onClick={this.onClickFilter.bind(this)}>
		 				 FilterByCourse
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
	    				<button className="btn btn-primary btn-lg" 
	    				onClick={this.onClick.bind(this)}
	    				data-target="#addModal" data-toggle="modal">Add new Record</button>
	    				</div>
	    				
	    			<div className="modal" id="addModal" tableIndex="-1">
					    	<div className="modal-dialog">
					    			<div className="modal-content">
		    				
		    				<div className="modal-header">
		    				    <button className="close" data-dismiss="modal">&times;</button>
		    				      <h4 className="modal-title">Student Online Portal</h4>
		    				</div>

		    	<div className="modal-body">

					    <form>
							<div className="form-group">
								<label className="control-label">Student Id </label>
								<input type="text" 
								name="studentId" 
								className="form-control" 
								onChange={this.onChange} 
								value={this.state.studentId}/>
							</div>

				<div className="form-group">
					<label className="control-label">First Name </label>
					<input type="text" 
					name="firstName" 
					className="form-control" 
					value={this.state.firstName} 
					onChange={this.onChange}/>
				</div>

				<div className="form-group">
					<label className="control-label">Last Name </label>
						<input type="text" 
						name="lastName" 
						className="form-control" 
						value={this.state.lastName}
						onChange={this.onChange}/>
				</div>

				<div className="form-group">
						<label className="control-label">Courses</label>
							<select className="form-control"name="courses" onChange={this.onChange}value={this.state.courses} >
		      					<option value="Algorithm Concept">Algorithm Concept</option>
		      					<option value="Java Networking">Java Networking</option>
		      					<option value="Distributed System">Distributed System</option>
		      					<option value="Artificial Intelligence">Artificial Intelligence</option>
		      					<option value="Operating System Security">Operating System Security</option>
		    				</select>	

    			</div>		
	
			    		<div className="form-group">
			    		<button className="btn btn-primary btn-lg">Submit</button>
			    		</div>

	    				</form>
	    					
						    		</div>
							    		</div>
											</div>
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


