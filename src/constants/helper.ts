import { useState } from "react";

// Weather API details
export const weatherAPIkey="&key=2327c15e7594408db6652928220102&aqi=no";
export const weatherAPIbaseSearchURL="https://api.weatherapi.com/v1/current.json?q=";
// export const weatherAPIlatlonURL="https://api.openweathermap.org/data/2.5/weather?";

// export const latlonString= ()=>{
//     var latlonString;
//     const options:any = {
//         enableHighAccuracy: true,
//         timeout: 5000,
//         maximumAge: 0,
//       };
//         navigator.geolocation.getCurrentPosition((pos:any)=> {
//         const lat= pos.coords.latitude;
//         const lon= pos.coords.longitude
//         const result = `lat=${lat}&lon=${lon}`;
        
//         // console.log("LATLON",result)
//        },(err:any)=>{
//         console.log("ERROR",err)
//        },options)

//         console.log("LATLON",latlonString)
       
        
// }

