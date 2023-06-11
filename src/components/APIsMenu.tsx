import React from 'react'
// import { getAllItems } from '../APIs/apis';

function APIsMenu(props:any) {
    const{setOption}=props;

  return (
    <div className='w-[85%]  mx-auto '>
        <div className='text-center font-bold text-[30px] border-b-[10px] pb-3 border-[#0E0C0C]'>Working With APIs</div>
        <div className='py-2'>This is an illustration to show the working of 4 types of  REST APIs Particularly <b>GET , PUT , POST , DELETE</b></div>
        <div className=' flex flex-row gap-3 p-2 my-5 cursor-pointer justify-center'>
          <div onClick={()=>{setOption("get-all")}} className='p-3 bg-[#F8F8F8] text-[#0E0C0C] hover:bg-[#0E0C0C] rounded-sm hover:text-white hover:shadow-md items-center justify-center w-[150px] h-[150px] flex'>
            <div><b>GET</b><br/>Show all items</div>
          </div>
          <div onClick={()=>setOption("get-single")} className='p-3 bg-[#F8F8F8] text-[#0E0C0C] hover:bg-[#0E0C0C] rounded-sm hover:text-white hover:shadow-md items-center justify-center w-[150px] h-[150px] flex'>
            <div><b>GET/ id</b><br/>Show 1 item</div>
          </div>
          <div onClick={()=>setOption("put")} className='p-3 bg-[#F8F8F8] text-[#0E0C0C] hover:bg-[#0E0C0C] rounded-sm hover:text-white hover:shadow-md items-center justify-center w-[150px] h-[150px] flex'>
            <div><b>PUT/ id</b><br/>Update item</div>
          </div>
          <div onClick={()=>setOption("post")} className='p-3 bg-[#F8F8F8] text-[#0E0C0C] hover:bg-[#0E0C0C] rounded-sm hover:text-white hover:shadow-md items-center justify-center w-[150px] h-[150px] flex'>
            <div><b>POST</b><br/>Add item</div>
          </div>
          <div onClick={()=>setOption("delete")} className='p-3 bg-[#F8F8F8] text-[#0E0C0C] hover:bg-[#0E0C0C] rounded-sm hover:text-white hover:shadow-md items-center justify-center w-[150px] h-[150px] flex'>
            <div><b>DELETE/ id</b><br/>Remove  item</div>
          </div>
        </div>
      </div>
  )
}

export default APIsMenu