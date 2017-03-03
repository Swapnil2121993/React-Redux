export default function studentReducers(state=[], action){
	switch(action.type){
		case'SEND_DATA':
		return[...state,
		Object.assign({},action.data)   //concept of immutable state in reducers with ES6 syntax
		];
	

	default:{
	return state;
	}
}
}