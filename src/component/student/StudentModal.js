import React,{Component} from 'react';
import Modal from 'react-bootstrap';

export default class StudentModal extends React.Component {
	constructor(props){
		super(props);
		this.state={
			open:"true"
		};
	}

	handleClick(e){
		e.preventDefault();
        this.setState({open:"true"});

}
 
  render(){

  	let closeModal=()=>this.setState({open:"false"})
  
    
    return (
    		<div>
    		<button className="btn-btn-primary-btn-sm" onClick={this.handleClick.bind(this)}>model</button>

    		<Modal
    		show={this.state.open}
    		onHide={closeModal}
    		aria-labelledby="ModalHeader"
    		>

    		<Modal.Header>
    		<Modal.Title id="ModalHeader">Student Online Portal</Modal.Title>
    		</Modal.Header>

    		<Modal.Body>
    		<p>Hello</p>
    		</Modal.Body>

    		<Modal.Footer>
    		<Modal.Dismiss className="btn-btn-default">Cancel</Modal.Dismiss>
    		</Modal.Footer>

    		</Modal>
    		</div>

    		);
    	}
    }
     

   