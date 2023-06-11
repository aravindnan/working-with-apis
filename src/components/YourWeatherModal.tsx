import React, { useEffect, useState } from "react";
import { weatherAPIkey, weatherAPIbaseSearchURL } from "../constants/helper";
import axios from "axios";
import { HumidityIcon, InfoIcon, PressureIcon, RainyIcon, TempIcon, WindIcon } from "./Icons";

function YourWeatherModal() {
  const [loading, setloading] = useState<boolean>(false);
  const [locationWeather, setlocationWeather]:any = useState<object>({});
  const [apitried,setapitried]:any=useState<boolean>(false)


  const getlatlon = () => {
    const options: any = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    navigator.geolocation.getCurrentPosition(
      async (pos: any) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        const result = `${lat},${lon}`;
        try {
          await axios
            .get(weatherAPIbaseSearchURL + result + weatherAPIkey)
            .then((weatherResult: any) => {
              setlocationWeather(weatherResult.data);
              setloading(false);
              setapitried(true)
            
              console.log(" `LOCATION` WEATHER RESULT ", weatherResult);
            });
        } catch (error) {
            alert("Enter a valid city name or some error has occured")
            console.log("Error:", error);
        }
      },
      (err: any) => {
        console.log("ERROR", err);
      },
      options
    );
  };

  const getCurrentLocationWeather = async () => {
    setloading(true);
    getlatlon();
    
  };

  useEffect(() => {
    getCurrentLocationWeather();
  }, []);

  return (
    <div
      onClick={(e: any) => e.stopPropagation()}
      className="bg-white p-5 flex flex-col mx-auto min-w-[600px] shadow-lg rounded-sm "
    >
      <div className="text-[25px] font-bold text-left">Your Weather</div>
      <div className="flex flex-row items-center">
        <InfoIcon fill="black" />
        <span> Location must be enabled to perform this action</span>
      </div>

      {
            loading && apitried?
            <div>loading</div>:null}
          {
            !loading && apitried?
           <div className='p-2  flex flex-col border-2 rounded-sm'>
            <div className='text-[25px] font-black '>
                {locationWeather?.location?.name}
            </div>
            <div className='font-semibold text-[12px]'>{locationWeather?.location?.region},{locationWeather?.location?.country}</div>
            <div className=''>{locationWeather?.current?.condition?.text}</div>
            <div className=' grid grid-cols-3 gap-2 m-2  '>
                <div className=' h-[100px] flex flex-col  font-semibold justify-center'>
                    <div className='text-[12px] text-center font-light'>Temperature</div>
                    <div className='flex justify-center'><TempIcon/></div>
                    <div>{locationWeather?.current?.temp_c} °C</div>
                </div>
                <div className=' h-[100px] flex flex-col  font-semibold justify-center'>
                    <div className='text-[12px] text-center font-light'>Wind Speed</div>
                    <div className='flex justify-center'><WindIcon/></div>
                    <div>{locationWeather?.current?.wind_kph} kph</div>
                </div>
                <div className=' h-[100px] flex flex-col  font-semibold justify-center'>
                    <div className='text-[12px] text-center font-light'>Air Pressure</div>
                    <div className='flex justify-center'><PressureIcon/></div>
                    <div>{locationWeather?.current?.pressure_mb} mb</div>
                </div>
                <div className=' h-[100px] flex flex-col  font-semibold justify-center'>
                    <div className='text-[12px] text-center font-light'>Humidity</div>
                    <div className='flex justify-center'><HumidityIcon/></div>
                    <div>{locationWeather?.current?.humidity}</div>
                </div>
                <div className=' h-[100px] flex flex-col  font-semibold justify-center'>
                    <div className='text-[12px] text-center font-light'>Precipitation</div>
                    <div className='flex justify-center'><RainyIcon/></div>
                    <div>{locationWeather?.current?.precip_mm} mm</div>
                </div>
            </div>

        </div>:
         null
          }  
        
    </div>
  );
}

export default YourWeatherModal;
