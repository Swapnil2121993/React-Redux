import React,{Component} from 'react';
import {Form,Col,ControlLabel} from 'react-bootstrap';


class AdminPage extends Component{
		constructor(props){
			super(props);
			this.state={
				username:"swapnil",
				password:"trivedi",
				errors:{},
				isLoading:false
			
			};

			this.onSubmit=this.onSubmit.bind(this);
			this.onChange=this.onChange.bind(this);
		}

		onChange(e){
			this.setState({[e.target.name]:e.target.value});
		}

		

		onSubmit(e){
			e.preventDefault();

			}

	render(){

			
		return(
			<form onSubmit={this.onSubmit}>
			
			<div className="form-group">
			<label className="control-label">UserName </label>
			<input type="text" 
			name="userName" 
			onChange={this.onChange.bind(this)} 
			value={this.state.username}/>
			</div>

			<div className="form-group">
			<label className="control-label">Password </label>
			<input type="password" 
			 name="password" 
			 onChange={this.onChange} 
			 value={this.state.password}/>
			</div>

			<div className="form-group">
    		<button className="btn btn-primary btn-lg">LogIn</button>
    		</div>

    		</form>
			
			);
	}
}

export default AdminPage;