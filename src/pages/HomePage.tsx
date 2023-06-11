import React, { useEffect, useState } from 'react'
import { pData } from '../components/DummyData';
import GetAllModal from '../components/GetAllModal';
import GetSingleModal from '../components/GetSingleModal';
import PutModal from '../components/PutModal';
import PostModal from '../components/PostModal';
import APIsMenu from '../components/APIsMenu';
import DeleteModal from '../components/DeleteModal';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from "../redux/actions"
import { useNavigate } from 'react-router';
import WeatherSection from '../components/WeatherMenu';
import YourWeatherModal from '../components/YourWeatherModal';
import SearchWeatherModal from '../components/SearchWeatherModal';

function HomePage() {
  const [option,setOption]=useState("none");
  const navigate=useNavigate()
  const dispatch=useDispatch();

  const login= useSelector((state:any)=>state.mainReducer.login)

  useEffect(()=>{
    if(!login){
      // navigate("/login")
    }

  },[])

  const handleLogout=()=>{
    dispatch(actions.loginAction(false))
    navigate("/login")
  }
  
  return (
    <div className=' py-10 relative w-full h-[100vh] '>
      <div className='flex w-[85%] mx-auto justify-end'>
        <button
         onClick={()=>handleLogout()}
         className='bg-[#0E0C0C] py-1 px-2 rounded-[2px] text-white text-[12px]'>Logout</button>
      </div>
      <APIsMenu setOption={setOption}/>
      <WeatherSection setOption={setOption} option={option}/>

      {
        option!=="none"?
        <div
        onClick={()=>setOption("none")}
        
        className='absolute top-0 w-full h-full bg-[#00000053] backdrop-blur-[2px] flex justify-center items-center z-10'>
          {
            option==="get-all"?
            <GetAllModal pData={pData}/>
            :
            option==="get-single"?
            <GetSingleModal setOption={setOption}/>
            :
            option==="put"?
            <PutModal setOption={setOption}/>
            :
            option==="post"?
            <PostModal setOption={setOption}/>
            :
            option==="delete"?
            <DeleteModal setOption={setOption} />
            :
            option==="your-weather"?
            <YourWeatherModal/>
            :
            option==="search-weather"?
            <SearchWeatherModal/>
            :
            null

          }
        </div>
        :null
      }


    </div>
  )
}

export default HomePage