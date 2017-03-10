import React,{Component} from 'react';
import * as modal from 'react-bootstrap';

export default class Modal extends Component{
	constructor(props){
		super(props);
		this.state={
			students:[],
			studentId:"1",
			firstName: "swapnil",
			lastName:"trivedi",
			courses:"Artificial Intelligence",
		};
		this.onChange=this.onChange.bind(this);
	}

	onChange(e){
		this.setState({[e.target.name]:e.target.value});
	}
	render(){
		return(
					<div>
						<button className="btn btn-primary btn-sm" 
						data-target="#addmodal" data-toggle="modal">
						Modal
						</button>



					<div className="modal" id="addmodal" tableIndex="-1">
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