import {ADD_BOOK,BOOK_ERROR,ADD_IMG,ADDING} from '../type'

const initaialState={
    added:false,
    status:null,
    error:null,
    imgURL:null,
    loading:false,
}
export default function(state = initaialState , action){
    switch (action.type) {
      case ADD_BOOK:
        return {
          ...state,
          added: true,
          status: action.payload,
          error: null,
          loading:false,
        };
      case BOOK_ERROR: {
        return {
          ...state,
          added: false,
          status: null,
          error: action.payload,
        };
      }
      case ADDING:{
        return({
          ...state,
          loading:true,
        })
      }
      case ADD_IMG: {
        return {
          ...state,
          imgURL: action.payload,
          loading:false,
        };
      }
      default:
        return state;
    }
}