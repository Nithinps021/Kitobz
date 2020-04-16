import axios from "axios";
import {ADD_BOOK,SET_ERRORS,ADD_IMG} from '../type'
 

export const addBook = (bookDetails)=>(dispach)=>{
    axios
        .post('/addbook',bookDetails)
        .then(res=>{
            dispach({
                type:ADD_BOOK,
                payload:res.data.status
            })
        })
        .catch(err =>{
            console.log(err);
            dispach({
                type:SET_ERRORS,
                payload:err.response.data
            })
        })
}
export const addimg = () => (dispach)=>{
    axios.post('/addimg')
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