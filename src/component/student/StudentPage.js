import React, {Component,PropTypes} from 'react';
import {Form,Col,ControLabel,} from 'react-bootstrap';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import * as studentAction from '../../actions/studentAction';

class StudentPage extends Component{	

	constructor(props){
		super(props);
		this.state={
			students:[],
			studentId:"1",
			firstName: "swapnil",
			lastName:"trivedi",
			courses:"Artificial Intelligence",
		};
		this.onSubmit=this.onSubmit.bind(this);
		this.onChange=this.onChange.bind(this);
		this.onClick=this.onClick.bind(this);
		this.handleClick=this.handleClick.bind(this);
	}

	onChange(e){
		this.setState({[e.target.name]:e.target.value});
	}

	onSubmit(e) {
		e.preventDefault();
		this.props.dispatch(studentAction.sendData(this.state));
		// this.setState({students:this.state.students.push({studentId:this.state.studentId,firstName:this.state.firstName,lastName:this.state.lastName,courses:this.state.courses})});
		// this.props.dispatch(studentAction.addData(this.state));
	}

	onClick(e){
		e.preventDefault();
		browserHistory.push(`record/?studentId=${this.state.studentId}`);

	}

	handleClick(e){
		e.preventDefault();
		browserHistory.push("allrecords");
	}


	studentRow(student){
		return 	(	
				<div>
					<li key={student.studentId}>{student.studentId}</li>
					<li key={student.firstName}>{student.firstName}</li>
					<li key={student.lastName}>{student.lastName}</li>
					<li key={student.courses}>{student.courses}</li>
					
				</div>
			);
		}

	render() {
		
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

			    		

			    		<div className="form-group">
			    		<button className="btn btn-primary btn-lg" onClick={this.handleClick}>View all Records</button>
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

StudentPage.defaultProps ={
	dispatch: () => {},
	student: [],
};

function mapStateToProps(state,props){
	return {
		student:state.student
	};
}

export default connect(mapStateToProps)(StudentPage);

