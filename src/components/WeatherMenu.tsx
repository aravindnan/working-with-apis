import axios from "axios";
import React, { useState } from "react";
// import {
//   weatherAPIbaseSearchURL,
//   weatherAPIkey,
//   weatherAPIlatlonURL,
// } from "../constants/helper";

function WeatherMenu(props:any) {
  const{option,setOption}=props;

  return (
    <div className="w-[85%]  mx-auto my-20">
      <div className=" text-black text-[18px] my-5"> This is an illustration to use <b>OpenWeatherAPI</b> to find weather inforamtion of a particular location </div>

      <div className="flex flex-row items-center gap-3 justify-center ">
        <div 
        onClick={()=>setOption("your-weather")}
        className=' cursor-pointer p-3 bg-[#F8F8F8] text-[#0E0C0C] hover:bg-[#0E0C0C] rounded-sm hover:text-white hover:shadow-md items-center justify-center w-[150px] h-[150px] flex font-semibold'>Your Weather</div>
        <div 
        onClick={()=>setOption("search-weather")}
        className=' cursor-pointer p-3 bg-[#F8F8F8] text-[#0E0C0C] hover:bg-[#0E0C0C] rounded-sm hover:text-white hover:shadow-md items-center justify-center w-[150px] h-[150px] flex font-semibold'>Search Weather</div>
      </div>
    </div>
  );
}

export default WeatherMenu;
