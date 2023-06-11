import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { weatherAPIbaseSearchURL, weatherAPIkey } from '../constants/helper'
import { HumidityIcon, PressureIcon, RainyIcon, TempIcon, WindIcon } from './Icons'

function SearchWeatherModal() {
    const [cityName,setCityName]=useState<string>("")
    const [loading,setloading]=useState<boolean>(false)
    const [cityWeather, setCityweather]: any = useState<object>({});
    const [apitried,setapitried]:any=useState<boolean>(false)


    const inputHandler=(e:any)=>{
        setCityName(e.target.value)
    }

    const getCityWeather = async (cityName: any) => {
        try {
          await axios
            .get(weatherAPIbaseSearchURL + cityName + weatherAPIkey)
            .then((weatherResult: any) => {
              setCityweather(weatherResult.data);
              setloading(false);
              setapitried(true)
              console.log("City Weather",weatherResult);
            });
        } catch (error) {
          alert("Enter a valid city name or some error has occured")
          console.log("Error:", error);
        }
      };

      const submitHandler=()=>{
        if(cityName!==""){  
            setloading(true)
            getCityWeather(cityName)
        }
        else{
            alert("Enter city name")
        }
      }



  return (
    <div
    onClick={(e:any)=>e.stopPropagation()}
    className='bg-white p-5 flex flex-col mx-auto min-w-[600px] shadow-lg rounded-sm '
    >
      <div className='text-[25px] font-bold text-left'>
      Search Weather
      </div>
      <div className="flex flex-col my-4 ">
          <span className="text-left font-semibold text-[14px] my-0" >Enter City</span>
          <div className='flex flex-row w-full  justify-between gap-2'>
          <input 
          value={cityName}
          onChange={inputHandler}
           className="p-1 border-l-[4px] flex-1 bg-[#F8F8F8] border-[#0E0C0C]"
            placeholder="New York" type="text"/>
          <button
          onClick={()=>submitHandler()}
           className="bg-[#0E0C0C] text-center text-[14px] flex rounded-sm flex-row items-center w-fit px-3 py-1  text-white font-medium">Search</button>
          </div>
        </div>
        {
            loading && apitried?
            <div>loading</div>:null}
          {
            !loading && apitried?
        <div className='p-2  flex flex-col border-2 rounded-sm'>
            <div className='text-[25px] font-black '>
                {cityWeather.location.name}
            </div>
            <div className='font-semibold text-[12px]'>{cityWeather.location.region},{cityWeather.location.country}</div>
            <div className=''>{cityWeather.current.condition.text}</div>
            <div className=' grid grid-cols-3 gap-2 m-2  '>
                <div className=' h-[100px] flex flex-col  font-semibold justify-center'>
                    <div className='text-[12px] text-center font-light'>Temperature</div>
                    <div className='flex justify-center'><TempIcon/></div>
                    <div>{cityWeather.current.temp_c} °C</div>
                </div>
                <div className=' h-[100px] flex flex-col  font-semibold justify-center'>
                    <div className='text-[12px] text-center font-light'>Wind Speed</div>
                    <div className='flex justify-center'><WindIcon/></div>
                    <div>{cityWeather.current.wind_kph} kph</div>
                </div>
                <div className=' h-[100px] flex flex-col  font-semibold justify-center'>
                    <div className='text-[12px] text-center font-light'>Air Pressure</div>
                    <div className='flex justify-center'><PressureIcon/></div>
                    <div>{cityWeather.current.pressure_mb} mb</div>
                </div>
                <div className=' h-[100px] flex flex-col  font-semibold justify-center'>
                    <div className='text-[12px] text-center font-light'>Humidity</div>
                    <div className='flex justify-center'><HumidityIcon/></div>
                    <div>{cityWeather.current.humidity}</div>
                </div>
                <div className=' h-[100px] flex flex-col  font-semibold justify-center'>
                    <div className='text-[12px] text-center font-light'>Precipitation</div>
                    <div className='flex justify-center'><RainyIcon/></div>
                    <div>{cityWeather.current.precip_mm} mm</div>
                </div>
            </div>

        </div>:
         null
          }  
        


        





    </div>
  )
}

export default SearchWeatherModal