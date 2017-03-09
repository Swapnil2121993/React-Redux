export default function students(state=[], action){
	switch(action.type) {
		case'SEND_DATA':
			return [
				...state,
				Object.assign({},action.data)   //concept of immutable state in reducers with ES6 syntax
			];

		  case'ADD_DATA':
		  	console.log(action);
		  	console.log(state);
		  	return [
		  		...state,
		  		student(undefined, action),
		  	];
			  			  			
		  			
		default: {
			return state
		};
	}
}

export const getStudents=(state)=>{    //selector
	console.log(state);
	return state.students;
}

function student(state={}, action){
	switch(action.type) {
		case'SEND_DATA':
			return [
			...state,
				Object.assign({},action.data)   //concept of immutable state in reducers with ES6 syntax
			];

	  case'ADD_DATA':
	  	console.log('in addData', action);
	  	return {
	  		studentId: action.studentId,
		  	firstName: action.firstName,
	  		lastName: action.lastName,
		  	courses: action.courses,
		  	}
			  			  			
		  			
		default: {
			return state
		};
	}
}
