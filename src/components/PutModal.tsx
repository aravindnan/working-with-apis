import axios from 'axios';
import React, { useState } from 'react'

function PutModal(props:any) {
    const {setOption}=props;
    const [loading,setloading]:any=useState(false)
    const [editID,setEditID]:any=useState("");
    const [newItem,setNewItem]:any=useState({})
    const [editSuccess,setEditSuccess]:any=useState("false")
    const [editTried,setEditTried]:any=useState(false)


     const editItem=async(editID:any,editItem:any)=>{
      setloading(true)
      await axios.put(`http://localhost:8000/edit-single-item/${editID}`,editItem).then((res:any)=>{
       if(res.data.createdAt){
        setEditSuccess("true")
        setloading(false)
       }
       else{
        setEditSuccess("not-found")
        setloading(false)
       }
       
      }).catch((err)=>{
       console.log("ERROR",err)
      })
}

    const inputHandler=(e:any)=>{
      const tempItem = newItem;
      if(e.target.name==="itemAvailability") 
         tempItem[`${e.target.name}`]=e.target.checked;
      else 
          tempItem[`${e.target.name}`]=e.target.value 
      setNewItem(tempItem)
    }

    const handleSubmit=()=>{
      if(newItem.itemName===""||
         newItem.itemID===""||
         newItem.itemPrice===""||
         newItem.itemDate===""
      ){
        alert("PLEASE GIVE VALID INPUTS")
      }
      else{
        setloading(true)
        setEditTried(true)
        editItem(editID,newItem);
      }
    }

  return (
    <div
    onClick={(e:any)=>e.stopPropagation()}
     className='bg-white p-5 flex flex-col mx-auto min-w-[600px] shadow-lg rounded-sm '>
      <div className='text-[30px] font-bold text-left'>
       Update Item
      </div>

      {
        !editTried?
      <div className=' p-1'>
        <div className="flex flex-col my-4 pb-5 border-b-[5px] border-black ">
          <span className="text-left font-semibold text-[14px] my-0" >Enter Item ID to Update</span>
          <div className='flex flex-row w-full  justify-between gap-2'>
          <input
          onChange={(e)=>setEditID(e.target.value)}
          value={editID} 
           className="p-1 border-l-[4px] flex-1 bg-[#F8F8F8] border-[#0E0C0C]" placeholder="101" type="text"/>
          </div>
        </div>
         <div>Enter New Details</div>
        <form>

        <div className="flex flex-col my-4 ">
          <span className="text-left font-semibold text-[14px] my-0" > Item Name</span>
          <input
          required
          onChange={inputHandler}
          name="itemName" 
          className="p-1 border-l-[4px] bg-[#F8F8F8] border-[#0E0C0C]" placeholder="eg: Product 1" type="text"/>
        </div>
         <div className="flex flex-col my-4 ">
          <span className="text-left font-semibold text-[14px] my-0" >ID</span>
          <input
          required
          onChange={inputHandler}
          name="itemID"
          
          className="p-1 border-l-[4px] bg-[#F8F8F8] border-[#0E0C0C]" placeholder="eg:101" type="text"/>
        </div>

        <div className="flex flex-col my-4 ">
          <span className="text-left font-semibold text-[14px] my-0" >Price</span>
          <input 
           required
           onChange={inputHandler}
           name="itemPrice"

          className="p-1 border-l-[4px] bg-[#F8F8F8] border-[#0E0C0C]" placeholder="eg: 10$" type="text"/>
        </div>

        <div className="flex flex-row my-4 ">
          <input
            // required
            onChange={inputHandler}
            name="itemAvailability"
           
           className="p-1 border-l-[4px] bg-[#F8F8F8] border-[#0E0C0C]"  type="checkbox"/>
          <span className="text-left font-semibold text-[14px] ml-2 my-0" >Availability</span>
        </div>

        <div className="flex flex-col my-4 ">
          <span className="text-left font-semibold text-[14px] my-0" >Manufacture date</span>
          <input
          required
          onChange={inputHandler}
          name="itemDate"
           className="p-1 border-l-[4px] bg-[#F8F8F8] border-[#0E0C0C]"  type="date"/>
        </div>


        

        </form>

        <div className='flex justify-end flex-row  mt-10 gap-3'>
        <button onClick={()=>setOption("none")} className="text-center text-[14px] font-semibold flex rounded-sm flex-row items-center w-fit px-3 py-1  text-black ">
      
      Cancel
  </button>
         <button
          onClick={handleSubmit}
          className="bg-[#0E0C0C] text-center text-[14px] flex rounded-sm flex-row items-center w-fit px-3 py-1  text-white font-medium">
      
        Add Item
    </button>
</div>

      </div>:
      null
      }

      {
        loading && editTried?
        <div className='mt-[15%]'>Loading...</div>:null
      }

      {
        editSuccess==="true" && editTried && !loading?
        <div className='mt-[5%] font-medium text-[18px]'>
         Item Succesfully Edited
        </div>:
        editSuccess==="not-found" && editTried && !loading?
        <div className='mt-[5%] font-medium text-[18px]'>
         Could not Find Item with ID {editID}
        </div>:null 
      }
   </div>
  )
}

export default PutModal