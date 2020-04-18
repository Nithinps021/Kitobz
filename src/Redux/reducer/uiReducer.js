import {SET_ERRORS,LOADING_UI,CLEAR_ERRORS,MENU_FALSE,MENU_TRUE} from '../type'


const initialState ={
    loading:false,
    errors:null,
    open:false,
};
 
export default function(state = initialState ,action){
    switch(action.type){
        case LOADING_UI:
            return({
                ...state,
                loading:true
            })
        case SET_ERRORS:
            return({
                ...state,
                loading:false,
                errors:action.payload
            })
        case CLEAR_ERRORS:
            return({
                ...state,
                loading:false,
                errors:null
            })
        case MENU_TRUE:{
            return({
                ...state,
                open:true,
            })
        }
        case MENU_FALSE: {
            return ({
                ...state,
                open: false,
            })
        }
        default:
            return state;        
    }
}