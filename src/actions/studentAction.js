export function sendData(data){
	return {
		type:'SEND_DATA',
		data: data
	};
}

export function addData(info){
		return {
			type: 'ADD_DATA',
			info: info
		};
}


