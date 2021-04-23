const reducer = (state, action) =>{

	switch(action.type){
		case 'ERROR_REQUEST':
		return [
			...state
		]
		default:
			return state;
			 
            }
}
export default reducer;