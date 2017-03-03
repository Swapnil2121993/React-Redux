import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import {Router,browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store from './store/store';
import routes from './routes';
import './index.css';


const store1=store();

ReactDom.render(
	<Provider store={store1}>
	<Router history={browserHistory} routes={routes}/>
	</Provider>,
	document.getElementById("root"));