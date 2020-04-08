import {SET_ERRORS,LOADING_UI,CLEAR_ERRORS,SET_UNAUTHENTICATED,SET_AUTHENTICATED} from '../type'
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
        // dispach(getUserData())
        dispach({type:CLEAR_ERRORS})
        history.push("/");
        
      })
      .catch((error) => {
          dispach({
              type:SET_ERRORS,
              payload:error.response.data
          })
        console.log(error.response.data)
      });
}

// export const getUserData = () => (dispatch)=>{
//         axios.get('/user')
//             .then(res =>{
//                 dispatch({
//                    type:SET_USER,
//                    payload:res.data 
//                 })
//             })
//             .catch(err =>{
//                 console.log(err);
//             })
// }

export const signupUser = (signDetails, history) => (dispach) =>{
  dispach({type:LOADING_UI})
  axios
    .post("/signup", signDetails)
    .then((res) => {
      console.log(res.data);
      const FBIdToken = `Bearer ${res.data.token}`
      localStorage.setItem('FBToken',FBIdToken);
      axios.defaults.headers.common['Authorization']=FBIdToken;
      dispach({type:SET_AUTHENTICATED});
      // dispach(getUserData())
      dispach({type:CLEAR_ERRORS})
      history.push("/");
    })
    .catch((error) => {
        dispach({
            type:SET_ERRORS,
            payload:error.response.data
        })
      console.log(error.response.data)
    });
}

export const logoutUser = () => (dispach) =>{
  localStorage.removeItem('FBToken');
  delete axios.defaults.headers.common['Authorization']
  dispach({type:SET_UNAUTHENTICATED})
}