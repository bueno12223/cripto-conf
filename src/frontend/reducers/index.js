const reducer = (state, action) =>{

	switch(action.type){
		case 'REGISTER_REQUEST':
			console.log(action.payload)
		return [
			...state,
			action.payload
		]
		default:
			return state;
			 
            }
}
export default reducer;