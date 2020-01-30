import * as actionType from '../actions/actionsType';

const INITIAL_STATE = {
    token:null,
    error:null
    
   
}

export const Reducer = (state = INITIAL_STATE,action)=>{
    switch(action.type){
        case actionType.AUTH_SUCCESS:
            return{...state, token:action.payload}
        case actionType.AUTH_FAIL:
            return{...state, error:action.payload}
        case actionType.AUTH_LOGOUT:
            return{...state,token:action.payload}
        default:
            return state
    }
};




export default Reducer;