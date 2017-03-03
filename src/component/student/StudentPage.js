import React, {Component,PropTypes} from 'react';
import {Form,Col,ControlLabel,} from 'react-bootstrap';
import {connect} from 'react-redux';
import * as studentAction from '../../actions/studentAction';


class StudentPage extends Component{
	
	constructor(props){
		super(props);
		this.state={
			studentId:"",
			firstName: "",
			lastName:"",
			courses:"",
		};
		this.onSubmit=this.onSubmit.bind(this);
		this.onChange=this.onChange.bind(this);
	}


	onChange(e){
		this.setState({[e.target.name]:e.target.value});
	}

	onSubmit(e){
		e.preventDefault();

		this.props.dispatch(studentAction.sendData(this.state));
		}


	studentRow(student,id){
		return 	(	<div>
					<li>{student.studentId}</li>
					<li>{student.firstName}</li>
					<li>{student.lastName}</li>
					<li key={id}>{student.courses}</li>
					
					</div>
				);
		}

	render(){
		
		return(                                                                                                                                                                                                                                                                                                                
			
				<div>
					<form onSubmit={this.onSubmit}>
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


    		
    		{this.props.student.map(this.studentRow)}
    		


			</form>
	
			</div>
		);
	}
}

StudentPage.propTypes={
	dispatch:React.PropTypes.func.isRequired,
	student:React.PropTypes.array.isRequired
};

function mapStateToProps(state,props){
	return {
		student:state.student
	};
}

export default connect(mapStateToProps)(StudentPage);

