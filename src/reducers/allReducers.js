import {combineReducers} from 'redux';
import students, * as allStudents from './students';

const allReducers=combineReducers({
	students
});

export default allReducers;

export const getStudents = (state) => {
	return allStudents.getStudents(state);
}