import {SET_AUTHENTICATED,SET_UNAUTHENTICATED} from '../type'


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
            return{
                ...state,
                authentication:false
            }
        default:
            return state;        
    }
}