import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ClosedEyeIcon, OpenEyeIcon, ForwardArrowIcon, InfoIcon } from '../components/Icons'
import axios from 'axios'

function RegisterPage() {

  const navigate=useNavigate();
    const emptyState={
      fullName: "",
      dateOfBirth: "",
      mobile: "",
      username: "",
      password:""
    }
    const [passwordView,setPasswordView]=useState(false)
    const [newUser,setNewUser]:any=useState(emptyState)
    const [registerResult,setRegisterResult]:any=useState("")

    const [loading,setloading]=useState(false)

    const register = async (registerDetails: any) => {
      await axios
        .post(`http://localhost:8000/register`, registerDetails)
        .then((res: any) => {
          setloading(false);
          if(res.data._id){
            navigate("/login")
          }
        })
        .catch((err) => {
          setRegisterResult(err.response.data)
          
          setTimeout(() => {
            setRegisterResult("")
          }, 5000);
        });
    };


    const inputHandler=(e:any)=>{
      const tempUser=newUser;
      tempUser[`${e.target.name}`]=e.target.value;
      setNewUser(tempUser);
    }

    const handleRegister=()=>{
      if(newUser.fullName===""||
      newUser.mobile===""||
      newUser.username===""||
      newUser.dateOfBirth===""||
      newUser.password===""
      ){
        alert("Fill all fields")
      }
      else{
        setloading(true);
        register(newUser);
      }

    }

  return (
    <div className="bg-white">
    <div className="mx-auto mt-[1%]  w-fit p-2">
      <div className="font-bold text-[30px] my-2 text-center">Working With APIs</div>

    <div className="mx-auto  flex flex-col py-5  px-10 w-[600px] border-t-[10px] border-[#0E0C0C]">
      <div className='text-[#f85656] font-medium text-[12px] flex flex-row items-center'>
        {
          registerResult!==""?
          <>
          <InfoIcon fill="#f85656"/>{" "}{registerResult}
          </>:null
        }
        
      </div>
     <form>
    <div className="flex flex-col my-2 ">
          <span className="text-left font-semibold text-[14px] my-1" >Full Name</span>
          <input
           name="fullName"
           required
           onChange={inputHandler}
           className="p-3 border-l-[8px] bg-[#F8F8F8] border-[#0E0C0C]" placeholder="John Doe" type="text"/>
    </div>
    <div className="flex flex-col my-2 ">
          <span className="text-left font-semibold text-[14px] my-1" >Date of Birth</span>
          <input
          name="dateOfBirth"
          required
          onChange={inputHandler}
           className="p-3 cursor-pointer border-l-[8px] bg-[#F8F8F8] border-[#0E0C0C]"type="date"/>
    </div>
    <div className="flex flex-col my-2 ">
          <span className="text-left font-semibold text-[14px] my-1" >Mobile Number</span>
          <input
          name="mobile"
          required
          onChange={inputHandler}
           className="p-3 cursor-pointer border-l-[8px] bg-[#F8F8F8] border-[#0E0C0C]" placeholder="" type="number"/>
    </div>

      <div className="flex flex-col my-2 ">
        <span className="text-left font-semibold text-[14px] my-1" >Username</span>
        <input 
        name="username"
        required
        onChange={inputHandler}
        className="p-3 border-l-[8px] bg-[#F8F8F8] border-[#0E0C0C]" placeholder="eg:johndoe895" type="text"/>
      </div>
      <div className="flex flex-col my-2 ">
        <span className="text-left font-semibold text-[14px] my-1">Password</span>
        <div className="flex flex-row items-center bg-[#F8F8F8]">
        <input 
        name="password"
        required
        onChange={inputHandler}
        className=" p-3 border-l-[8px] flex-1 bg-[#F8F8F8] border-[#0E0C0C]" placeholder="" type={passwordView?"text":"password"} />
        <div className="item-center flex px-2 cursor-pointer   h-fit" onClick={()=>setPasswordView(!passwordView)}>
          {
              passwordView?<ClosedEyeIcon/>:<OpenEyeIcon/>
          }

        </div>
        </div>
      </div>
      </form> 
      <div>
          <button 
          type='submit'
          onClick={handleRegister}
          className="bg-[#0E0C0C] mt-5 mb-3 min-w-[110px] justify-between mx-auto flex flex-row items-center w-fit px-3  text-white font-semibold">
              <span>
              Register
              </span>
              <div>
              <ForwardArrowIcon/>
              </div>
          </button>

      </div>
      <Link to={"/login"}>
      <div className="cursor-pointer">Already a user ? <b>Login</b></div>
      </Link>

    </div>
    </div>
  </div>
  )
}

export default RegisterPage