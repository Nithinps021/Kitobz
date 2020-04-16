import {SET_AUTHENTICATED,SET_UNAUTHENTICATED,SET_USER} from '../type'


const initialState = {
    authentication:false,
    userDetails:{}
}

export default function(state = initialState , action){
    switch(action.type){
        case SET_USER:
            return ({
                ...state,
                userDetails: action.payload,
            });
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