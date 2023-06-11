import axios from 'axios';
import React, { useState } from 'react'

function DeleteModal(props:any) {
    const {setOption}=props;
    const[deleteSucess,setDeleteSucess]=useState(false)
    const[deleteTried,setdeleteTried]=useState(false)
    const[loading,setloading]=useState(false)
    const [delID,setDelID]=useState("")

   const deleteItem=async(itemID:any)=>{
    setloading(true)
      await axios.delete(`http://localhost:8000/delete-single-item/${itemID}`).then((res:any)=>{
       console.log("Deleted Response is ",res)
       if(res.data.deletedCount===1){
        setDeleteSucess(true)
        setloading(false)
       }
       else{
        setDeleteSucess(false)
        setloading(false)
       }
       
      }).catch((err)=>{
       console.log("ERROR",err)
      })
  }

  const handleDeleteItem=(id:any)=>{
    setdeleteTried(true);
    if(id!==""){
      deleteItem(id)
    }
  }

    const inputHandler=(e:any)=>{
      setDelID(e.target.value)
    }
    
  return (
    <div
    onClick={(e:any)=>e.stopPropagation()}
     className='bg-white p-5 flex flex-col mx-auto min-w-[600px] shadow-lg rounded-sm '>
     
      <div className='text-[30px] font-bold text-left'>
       Delete Item
      </div>
      {
        !deleteTried?
        <div className="flex flex-col my-4 ">
          <span className="text-left font-semibold text-[14px] my-0" >Enter Item ID to Delete</span>
          <div className='flex flex-row w-full  justify-between gap-2'>
          <input
           value={delID}
           onChange={inputHandler}
           className="p-1 border-l-[4px] flex-1 bg-[#F8F8F8] border-[#0E0C0C]" placeholder="101" type="text"/>
          <button onClick={()=>handleDeleteItem(delID)} className="bg-[#0E0C0C] text-center text-[14px] flex rounded-sm flex-row items-center w-fit px-3 py-1  text-white font-medium">Delete</button>
          </div>
        </div>:null
      }

      {
        deleteSucess && deleteTried && !loading?
        <div className=' font-medium text-[18px]'>
            Item Deleted Sucessfully
        </div>:null
      }
      {
        deleteTried && !deleteSucess && !loading?
        <div className=' font-medium text-[18px]'>
            Item is not Present :(
        </div>:null
      }
      {
        loading?
        <div>Trying to find Item...</div>:null
      }
   </div>
  )
}

export default DeleteModal