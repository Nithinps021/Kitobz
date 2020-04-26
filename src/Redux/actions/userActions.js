import {
  OFF_UPDATE,
  UPDATE_PROFILE,
  SET_ERRORS,
  LOADING_UI,
  CLEAR_ERRORS,
  SET_UNAUTHENTICATED,
  SET_AUTHENTICATED,
  SET_USER,
  MENU_FALSE,
  MENU_TRUE,
} from "../type";
import axios from 'axios'

export const loginUser = (loginDetails, history) => (dispach) =>{
    dispach({type:LOADING_UI})
    axios
      .post("/login", loginDetails)
      .then((res) => {
        const FBIdToken = `Bearer ${res.data.token}`
        localStorage.setItem('FBToken',FBIdToken);
        axios.defaults.headers.common['Authorization']=FBIdToken;
        dispach({type:SET_AUTHENTICATED});
        dispach(getUserData())
        dispach({type:CLEAR_ERRORS})
        history.push("/home");

      })
      .catch((error) => {
        if(error.response && error.response.data){
           dispach({
             type: SET_ERRORS,
             payload: error.response.data,
           });
        }        
      });
}

export const getUserData = () => (dispatch)=>{
        axios.get('/userinfo')
            .then(res =>{
                dispatch({
                   type:SET_USER,
                   payload:res.data 
                })
            })
            .catch(err =>{
                console.log(err);
            })
}

export const signupUser = (signDetails,history) => (dispach) =>{
  dispach({type:LOADING_UI})
  axios
    .post("/signup", signDetails)
    .then((res) => {
      console.log(res.data);
      const FBIdToken = `Bearer ${res.data.token}`
      localStorage.setItem('FBToken',FBIdToken);
      axios.defaults.headers.common['Authorization']=FBIdToken;
      dispach({type:SET_AUTHENTICATED});
      dispach(getUserData())
      history.push("/home");
      dispach({type:CLEAR_ERRORS})
     
    })
    .catch((error) => {
      if (error.response && error.response.data){
           dispach({
             type: SET_ERRORS,
             payload: error.response.data,
           });
      }
    });
}

export const logoutUser = () => (dispach) =>{
  localStorage.removeItem('FBToken');
  delete axios.defaults.headers.common['Authorization'] 
  dispach({type:SET_UNAUTHENTICATED})
  window.location.reload(false);

}

export const menuClick = () => (dispach)=>{
   dispach({
     type:MENU_TRUE,
   })
}

export const menuClose = () => (dispach )=>{
  dispach({
    type: MENU_FALSE,
  })
}

export const updateProfile = (details) =>(dispach)=>{
  dispach({type:LOADING_UI})
  axios
    .post("/updateinfo", details)
    .then((res) => {
      console.log("updated successfully");
      dispach({
        type:UPDATE_PROFILE,
        payload:details
      });
      dispach({type:CLEAR_ERRORS})
    })
    .catch((err) => {
      dispach({
        type:SET_ERRORS,
        payload:err.response.data,
      })
      console.log(err.response.data);
    });
}

export const offupdate=()=>(dispach)=>{
  dispach({
    type:OFF_UPDATE
  })
}