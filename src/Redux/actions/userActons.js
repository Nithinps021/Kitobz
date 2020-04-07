import {SET_ERRORS,LOADING_UI,CLEAR_ERRORS,SET_USER} from '../type'
import axios from 'axios'

export const loginUser = (loginDetails, history) => (dispach) =>{
    dispach({type:LOADING_UI})
    axios
      .post("/login", loginDetails)
      .then((res) => {
        console.log(res.data);
        const FBIdToken = `Bearer ${res.data.token}`
        localStorage.setItem('FBToken',FBIdToken);
        axios.defaults.headers.common['Authorization']=FBIdToken;
        // dispach(getUserData())
        dispach({type:CLEAR_ERRORS})
        history.push("/");
      })
      .catch((error) => {
          dispach({
              type:SET_ERRORS,
              payoad:error.response.data
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