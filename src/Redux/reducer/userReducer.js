import {SET_ERRORS,LOADING_UI,CLEAR_ERRORS,SET_USER,SET_AUTHENTICATED,SET_UNAUTHENTICATED} from '../type'


const initialState = {
    authentication:false,
}

export default function(state = initialState , action){
    switch(action.type){
        case SET_AUTHENTICATED:
            return({
                ...state,
                authentication:true
            })
        case SET_UNAUTHENTICATED:
            return initialState;
        default:
            return state;        
    }
}