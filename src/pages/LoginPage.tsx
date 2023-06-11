import { useState } from "react";
import {
  ClosedEyeIcon,
  ForwardArrowIcon,
  InfoIcon,
  OpenEyeIcon,
} from "../components/Icons";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import * as actions from "../redux/actions"
import { useDispatch } from "react-redux";

function LoginPage() {
  const emptyState={
    username:"",
    password:""
  }

  const navigate=useNavigate()
  const dispatch=useDispatch()

  const [passwordView, setPasswordView] = useState(false);
  const [loginDetails, setLoginDetails] = useState({});
  const [loginResult,setLoginResult]= useState("")
  const [loading, setloading] = useState(false);

    const login = async (loginDetails: any) => {
      await axios
        .post(`http://localhost:8000/login`, loginDetails)
        .then((res: any) => {
          setloading(false);
          if(res.data.loginStatus){
            dispatch(actions.loginAction(true))

            navigate("/home")
          }
        })
        .catch((err) => {
          setLoginResult(err.response.data.message)
          setTimeout(() => {
            setLoginResult("");
          }, 5000);
        });
    };

  const inputHandler=(e:any)=>{
    const tempDetails:any=loginDetails;
    tempDetails[`${e.target.name}`]=e.target.value;
    setLoginDetails(tempDetails);
  }

  const HandleLogin=()=>{
    setloading(true)
    login(loginDetails);
   


  }

  return (
    <div className="bg-white">
      <div className="mx-auto mt-[10%]  w-fit p-2">
        <div className="font-bold text-[30px] my-2 text-center">
          Working With APIs
        </div>
        <div className="mx-auto  flex flex-col py-5  px-10 w-[600px] border-t-[10px] border-[#0E0C0C]">
        <div className='text-[#f85656] font-medium text-[12px] flex flex-row items-center'>
        {
          loginResult!==""?
          <>
          <InfoIcon fill="#f85656"/>{" "}{loginResult}
          </>:null
        }
        
      </div>
          <div className="flex flex-col my-2 ">
            <span className="text-left font-semibold text-[14px] my-1">
              Username
            </span>
            <input
              name="username"
              onChange={inputHandler}
              className="p-3 border-l-[8px] bg-[#F8F8F8] border-[#0E0C0C]"
              placeholder="eg:johndoe895"
              type="text"
            />
          </div>
          <div className="flex flex-col my-2 ">
            <span className="text-left font-semibold text-[14px] my-1">
              Password
            </span>
            <div className="flex flex-row items-center bg-[#F8F8F8]">
              <input
                name="password"
                onChange={inputHandler}
                className=" p-3 border-l-[8px] flex-1 bg-[#F8F8F8] border-[#0E0C0C]"
                placeholder=""
                type={passwordView ? "text" : "password"}
              />
              <div
                className="item-center flex px-2 cursor-pointer   h-fit"
                onClick={() => setPasswordView(!passwordView)}
              >
                {passwordView ? <ClosedEyeIcon /> : <OpenEyeIcon />}
              </div>
            </div>
          </div>
          <div>
            <button
             onClick={HandleLogin}
             className="bg-[#0E0C0C] mt-5 mb-3 min-w-[90px] justify-between mx-auto flex flex-row items-center w-fit px-3  text-white font-semibold">
              <span>Login</span>
              <div>
                <ForwardArrowIcon />
              </div>
            </button>
          </div>
          <Link to={"/register"}>
            <div className="cursor-pointer">
              New User ?<b> Register</b>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
