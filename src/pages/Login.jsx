/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useEffect } from "react";
import google from '../assets/google.svg';
import github from '../assets/github.svg';
import facebook from '../assets/facebook.svg';
import linkedin from '../assets/linkedin.svg';
  
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
          <h1 className="text-[#000000] text-6xl font-bold upper sm:text-8xl">WebChat</h1>
          <p className="text-[#000000] text-lg mt-3 w-[350px] text-center sm:text-2xl sm:w-[500px]">Join the conversation, meet new people, 
              and make connections in one shared room
          </p>
          <div 
            className="mt-7 border border-[#000000] py-4 px-24 rounded-full flex flex-row items-center cursor-pointer"
            onClick={handleLogin}
          >
            <img 
                src={google} 
                className="inline w-7 h-7"
            />
            <div>
              <button className="text-[#5C5656]">Sign in with Google</button></div>
          </div>
        </div>
        <div className="mt-40">
          <p className="text-[#000000] text-sm">Created by jeffersonbalde</p>
          <div className="flex flex-row items-center justify-center gap-3 mt-1">
            {/* github */}
            <div>
              <a 
                href="https://github.com/jeffersonbalde"
                target="_blank" rel="noreferrer"
              >
                <img
                  src={github}
                  className="w-6 h-6"
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
                  className="w-6 h-6"
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
                  className="w-6 h-6"
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