import React, {Component,PropTypes } from 'react';
import './App.css';
import Header from './component/common/Header';
import Router from './routes';


class App extends Component {
  
  render() {
    return (
        <div className="container-fluid">
        <h1>Student Online Portal</h1>
        <Header/>
        {this.props.children}
        </div>
    );
  }
}

App.PropTypes = {
children:PropTypes.object.isRequired
};

 

export default App;
