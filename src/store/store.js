import {createStore,applyMiddleware} from 'redux';
import allReducers from '../reducers/allReducers';


export default function store(initialState){
	return createStore(
	allReducers,
	initialState
	);
}

