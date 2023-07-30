/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useEffect } from "react";
import google from '../assets/google.svg';
import github from '../assets/github.svg';
import facebook from '../assets/facebook.svg';
import linkedin from '../assets/linkedin.svg';
import chatIcon from '../assets/icon.svg'
  
const Login = () => {
  const navigate = useNavigate();
  const {currentUser, signinWithGoogle} = UserAuth();

  const handleLogin = async () => {
    try{
      await signinWithGoogle();
    }catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    if(currentUser){
      navigate("/chat")
    }
  },[currentUser])

  return (
    <div className="bg-[#E8E8E8] w-screen h-screen font-inter">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-row gap-4">
            <img src={chatIcon} className="w-12 sm:w-20"/>
            <h1 className="text-[#000000] text-[50px] font-bold upper sm:text-8xl">WebChat</h1>
          </div>
          <p className="text-[#000000] text-base mt-3 w-[330px] text-center sm:text-2xl sm:w-[600px]">Join the conversation, meet new people, 
            and make connections in one shared room
          </p>
          <div 
            className=" mt-7 border border-[#000000] justify-center py-2 px-4 bg-[#ffffff] rounded-full flex flex-row items-center cursor-pointer"
            onClick={handleLogin}
          >
            <img 
                src={google} 
                className="inline w-5 h-5 mr-1"
            />
            <div>
              <button className="text-[#5C5656] text-sm">Sign in with Google</button></div>
          </div>
        </div>
        <div className="mt-40">
          <p className="text-[#000000] text-xs">Created by jeffersonbalde</p>
          <div className="flex flex-row items-center justify-center gap-3 mt-1">
            {/* github */}
            <div>
              <a 
                href="https://github.com/jeffersonbalde"
                target="_blank" rel="noreferrer"
              >
                <img
                  src={github}
                  className="w-5 h-5"
                />
              </a>
            </div>
            {/* github */}
            <div>
              <a 
                href="https://www.facebook.com/profile.php?id=100092473991987"
                target="_blank" rel="noreferrer"
              >
                <img
                  src={facebook}
                  className="w-5 h-5"
                />
              </a>
            </div>
            {/* github */}
            <div>
              <a 
                href="https://www.linkedin.com/in/jeffersonbalde/"
                target="_blank" rel="noreferrer"
              >
                <img
                  src={linkedin}
                  className="w-5 h-5"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 

export default Login