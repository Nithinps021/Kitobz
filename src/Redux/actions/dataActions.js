import axios from "axios";
import {ADD_BOOK,BOOK_ERROR,ADD_IMG, ADDING} from '../type'
 

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