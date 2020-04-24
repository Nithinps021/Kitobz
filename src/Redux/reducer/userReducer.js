import {
  OFF_UPDATE,
  UPDATE_USER_IMG,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  SET_USER,
  UPDATE_PROFILE,
} from "../type";


const initialState = {
    authentication:false,
    userDetails:{},
    updated:false,
}

export default function(state = initialState , action){
    switch (action.type) {
      case SET_USER:
        return {
          ...state,
          userDetails: action.payload,
        };
      case SET_AUTHENTICATED:
        return {
          ...state,
          authentication: true,
        };
      case SET_UNAUTHENTICATED:
        return {
          ...state,
          authentication: false,
        };
      case UPDATE_USER_IMG: {
          state.userDetails.imgURL=action.payload;
        return {
          ...state,
        };
      }
      case UPDATE_PROFILE:{
        state.userDetails.branch=action.payload.branch;
        state.userDetails.sem = action.payload.sem;
        state.userDetails.phoneNo = action.payload.phoneNo;
        return{
          ...state,
          updated:true
        }
      }
      case OFF_UPDATE:{
        return({
          ...state,
          updated:false
        })
      }
      default:
        return state;
    }
}