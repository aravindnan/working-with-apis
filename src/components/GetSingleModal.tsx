import axios from 'axios'
import moment from 'moment'
import React, { useEffect, useState } from 'react'

function GetSingleModal(props:any) {
    const{setOption}=props
    const[singleData,setSingleData]:any=useState({})
    const [findTried,setFindTried]:any=useState(false)
    const[loading,setloading]=useState(false)
    const [idToFind,setIdToFind]=useState("")


  const getSingleItem=async(itemID:any)=>{
      setloading(true);
      await axios.get(`http://localhost:8000/get-single-item/${itemID}`).then((res:any)=>{
       console.log("the Single Item ",res)
       if(res.data!==null)
       setSingleData(res.data)
       else
       setSingleData({})
       setloading(false);
      }).catch((err)=>{
       console.log("ERROR",err)
      })
}

const handleFindItem=(id:any)=>{
  setFindTried(true)
  if(id!==""){
    getSingleItem(id)
  }
}

const inputHandler=(e:any)=>{
  setIdToFind(e.target.value)
}


  return (
    <div
    onClick={(e:any)=>e.stopPropagation()}
     className='bg-white p-5 flex flex-col mx-auto min-w-[600px] shadow-lg rounded-sm '>
      <div className='text-[30px] font-bold text-left'>
       Find Item
      </div>
      {
        !findTried?
        <div className="flex flex-col my-4 ">
          <span className="text-left font-semibold text-[14px] my-0" >Enter Item ID to Update</span>
          <div className='flex flex-row w-full  justify-between gap-2'>
          <input 
          value={idToFind}
          onChange={inputHandler}
           className="p-1 border-l-[4px] flex-1 bg-[#F8F8F8] border-[#0E0C0C]"
            placeholder="101" type="text"/>
          <button onClick={()=>handleFindItem(idToFind)} className="bg-[#0E0C0C] text-center text-[14px] flex rounded-sm flex-row items-center w-fit px-3 py-1  text-white font-medium">Find</button>
          </div>
        </div>:null
      }

      {
        Object.keys(singleData).length>0 && !loading?
        <div>
             <table className='w-full mt-5'>
          <tr className='text-left bg-[#0E0C0C] text-[white] text-[16px] '> 
            <th className='p-1'>Name</th>
            <th > ID</th>
            <th>Price</th>
            <th>Availabity</th>
            <th>Manufacture Date</th>
          </tr>
              <tr className={`my-1 text-left py-2 text-[14px]bg-[#F8F8F8]`}>
                <td className='p-1'>{singleData?.itemName}</td>
                <td className='pr-3'>{singleData?.itemID}</td>
                <td className='pr-3'>{singleData?.itemPrice}</td>
                <td>{`${singleData?.itemAvailability?"Yes":"No"}`}</td>
                <td>{moment(singleData?.itemDate).format("LL")}</td>
              </tr>
        
        </table>
        </div>:
        loading && findTried?
        <div>Loading</div>:null
        
    }
    {
        Object.keys(singleData).length===0 && !loading && findTried?
        <div>Item Not present</div>:null
    }
    
       
      
   </div>
  )
}

export default GetSingleModal