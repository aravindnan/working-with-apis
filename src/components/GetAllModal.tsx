import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import { getAllItems } from '../APIs/apis';
import * as actions from "../redux/actions"
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

function GetAllModal(props:any) {
    const{pData}=props;
    const[loading ,setloading]=useState(true)
    // const[itemData,setItemData]=useState([]);

    const dispatch=useDispatch();

   const getAllItems=async()=>{
      await axios.get("http://localhost:8000/get-all-items").then((res:any)=>{
       dispatch(actions.getallitemsAction(res.data))
       setloading(false)
      }).catch((err)=>{
       console.log("ERROR",err)
      })
}

    useEffect(() => { 
      getAllItems();
    }, []);

    const itemData:any= useSelector((state:any)=>state.mainReducer.itemList)
    
 
   

  return (
    <div
    onClick={(e:any)=>e.stopPropagation()}
     className='bg-white p-5 flex flex-col mx-auto min-w-[600px] shadow-lg rounded-sm min-h-[400px]'>
      <div className='text-[25px] font-bold text-left'>
      Items
      </div>
      <div>
        {!loading?
        <table className='w-full mt-5'>
          <tr className='text-left bg-[#0E0C0C] text-[white] text-[16px] '> 
            <th className='p-1'>Name</th>
            <th className='border-l-[1px] border-[white] pl-2' > ID</th>
            <th className='border-l-[1px] border-[white] pl-2'>Price</th>
            <th className='border-l-[1px] border-[white] pl-2'>Availabity</th>
            <th className='border-l-[1px] border-[white] pl-2'>Manufacture Date</th>
          </tr>
          {
            itemData?.map((node:any ,i:number)=>(
              <tr key={node._id} className={`my-1 ${i%2===0?"bg-[#F8F8F8]":" bg-[white]"} text-left py-2 text-[14px] hover:bg-[#ebeaea]`}>
                <td className='p-1'>{node.itemName}</td>
                <td className='pr-3 pl-2'>{node.itemID}</td>
                <td className='pr-3 pl-2'>{node.itemPrice}</td>
                <td className='pl-2'>{`${node.itemAvailability?"Yes":"No"}`}</td>
                <td className='pl-2'>{moment(node.itemDate).format("LL")}</td>
              </tr>
            ))    

          }
        </table>
        :
        <div className='mt-[20%]'>Loading</div>
        }
        {!loading&&itemData?.length===0?
          <div>
           There are no Existing Items :( <br />Add a new one!

          </div>:null
        }

      </div>

      

    </div>
  )
}

export default GetAllModal