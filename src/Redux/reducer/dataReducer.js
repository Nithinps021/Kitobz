import {
  UPDATE_BOOK,
  ADD_BOOK,
  BOOK_ERROR,
  ADD_IMG,
  ADDING,
  ADD_USER_BOOKS,
  ADD_USER_BOOKS_FAIL,
} from "../type";

const initaialState={
    added:false,
    status:null,
    error:null,
    imgURL:null,
    loading:false,
    books:[],
    notnull:true,
}
export default function(state = initaialState , action){
    switch (action.type) {
      case ADD_BOOK:
        return {
          ...state,
          added: true,
          status: action.payload,
          error: null,
          loading: false,
        };
      case BOOK_ERROR: {
        return {
          ...state,
          added: false,
          status: null,
          error: action.payload,
        };
      }
      case ADDING: {
        return {
          ...state,
          loading: true,
        };
      }
      case ADD_IMG: {
        return {
          ...state,
          imgURL: action.payload,
          loading: false,
        };
      }
      case ADD_USER_BOOKS: {
        return {
          ...state,
          books: action.payload,
        };
      }
      case ADD_USER_BOOKS_FAIL: {
        return {
          ...state,
          notnull: false,
        };
      }
      case UPDATE_BOOK: {
        return {
          ...state,
          loading: false,
          added: true,
        };
      }
     
      default:
        return state;
    }
}