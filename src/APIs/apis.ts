import axios from "axios"
import { useDispatch } from "react-redux"
import { json } from "stream/consumers"
import * as actions from "../redux/actions"


// const dispatch= useDispatch()

 
// export const getAllItems=async()=>{
//        await axios.get("http://localhost:8000/get-all-items").then((res:any)=>{
//         console.log("the List is ",res.data)
//         dispatch(actions.getallitemsAction(res.data))
//        //  return res.data
//        }).catch((err)=>{
//         console.log("ERROR",err)
//        })
// }

// export const getSingleItem=async(itemID:any)=>{
//        await axios.get(`http://localhost:8000/get-single-item/${itemID}`).then((res:any)=>{
//         console.log("the Single Item ",res)
//         return res.data;
//        }).catch((err)=>{
//         console.log("ERROR",err)
//        })
// }

// export const addItem=async(newItem:any)=>{
//        await axios.post(`http://localhost:8000/add-item`,newItem).then((res:any)=>{
//         console.log("Added Item is ",res)
//         return res;
//        }).catch((err)=>{
//         console.log("ERROR",err)
//        })
// }

// export const editItem=async(editID:any,editItem:any)=>{
//        await axios.put(`http://localhost:8000/edit-single-item/${editID}`,editItem).then((res:any)=>{
//         console.log("Edited Item is ",res)
//         return res;
//        }).catch((err)=>{
//         console.log("ERROR",err)
//        })
// }

// export const deleteItem=async(itemID:any)=>{
//        await axios.delete(`http://localhost:8000/delete-single-item/${itemID}`).then((res:any)=>{
//         console.log("Deleted Response is ",res)
//         return res;
//        }).catch((err)=>{
//         console.log("ERROR",err)
//        })
// }