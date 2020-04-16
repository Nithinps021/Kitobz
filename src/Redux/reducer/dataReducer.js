import {ADD_BOOK,BOOK_ERROR,ADD_IMG} from '../type'

const initaialState={
    addded:false,
    status:null,
    error:null,
    imgURL:''
}
export default function(state = initaialState , action){
    switch (action.type) {
      case ADD_BOOK:
        return {
          ...state,
          added: true,
          status: action.payload,
          error: null,
        };
      case BOOK_ERROR: {
        return {
          ...state,
          added: false,
          status: null,
          error: action.payload,
        };
      }
      case ADD_IMG: {
        return {
          ...state,
          imgURL: action.payload,
        };
      }
      default:
        return state;
    }
}