import React,{Component} from 'react';
import {Modal} from 'react-bootstrap';
import * as studentAction from '../../actions/studentAction';


export default class StudentModal extends React.Component {
	constructor(props){
		super(props);
		this.state={
			open:"true"
		};
	}

    onSubmit(e) {
        e.preventDefault();
        this.props.dispatch(studentAction.sendData(this.state));
    }
	

    close(){
        this.setState({open:false});
    }
 
  render(){

    return (
            
            <div>
        
            <Modal
    		show={this.state.open}
    		onHide={this.close}
    		aria-labelledby="ModalHeader"
    		>

    		<Modal.Header>
    		<Modal.Title id="ModalHeader">Student Online Portal</Modal.Title>
    		</Modal.Header>

    		<Modal.Body>
    		<p>Hello</p>
    		</Modal.Body>

    		<Modal.Footer>
    		<button onClick={this.close.bind(this)}>
             Close
            </button>
    		</Modal.Footer>

    		</Modal>
    		</div>

    		);
    	}
    }

function mapStateToProps(state,props){
    return {
        student:state.student
    };
}
     

