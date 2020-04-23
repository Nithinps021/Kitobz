import axios from "axios";
import {
  UPDATE_USER_IMG,
  UPDATE_BOOK,
  ADD_BOOK,
  BOOK_ERROR,
  ADD_IMG,
  ADDING,
  LOADING_UI,
  ADD_USER_BOOKS,
  CLEAR_ERRORS,
  ADD_USER_BOOKS_FAIL,
} from "../type";
 

export const addBook = (bookDetails)=>(dispach)=>{
    dispach({type:ADDING})
    axios
        .post('/addbook',bookDetails)
        .then(res=>{
            dispach({
                type:ADD_BOOK,
                payload:res.data.status
            })
        })
        .catch(err =>{
            console.log(err.code);
            dispach({
                type:BOOK_ERROR,
                payload:err.code
            })
        })
}
export const addimg = (formdata) => (dispach)=>{
    dispach({type:ADDING})
    axios.post('/addimg',formdata)
    .then(res =>{
        dispach({
            type:ADD_IMG,
            payload:res.data.status
        })
    })
    .catch(err=>{
        console.log(err);
    })
}
export const userBooks = () => (dispach)=>{
    dispach({type:LOADING_UI});
    axios.get('/usersbooks')
        .then(res=>{
           
            dispach({
                type: ADD_USER_BOOKS,
                payload: res.data
            })
            console.log(res.data);
            dispach({
                type: CLEAR_ERRORS
            })

        })
        .catch(err=>{
            dispach({
                type: ADD_USER_BOOKS_FAIL
            })
            console.log(err.code)
            dispach({
                type: CLEAR_ERRORS
            })
        })
}
export const deleteBook=(bookId)=>(dispach)=>{
    dispach({ type: LOADING_UI });
    axios.post('/deletebook',bookId)
    .then(req=>{
        dispach({
            type: CLEAR_ERRORS
        })
    })
    .catch(err =>{
        console.log(err)
    })
}
export const updateBook = (bookDetails) => (dispach) => {
  dispach({ type: ADDING });
  axios
    .post("/updatebook", bookDetails)
    .then((res) => {
      dispach({
        type: UPDATE_BOOK,
      });
      console.log("updated successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateImage =(imgURL) =>(dispach)=>{
    axios
      .post("/updateimg",imgURL)
      .then((res) => {
        console.log("image has been successfully Added");
        dispach({
            type:UPDATE_USER_IMG,
            payload:imgURL.imgURL
        })
      })
      .catch((err) => {
        console.log(err);
      });
}