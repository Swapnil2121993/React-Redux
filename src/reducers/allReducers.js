import {combineReducers} from 'redux';
import student from './studentReducers';

const allReducers=combineReducers({

	student:student
});

export default allReducers;