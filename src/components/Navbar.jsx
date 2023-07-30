import { UserAuth } from "../context/AuthContext"
import google from '../assets/google.svg'

const Navbar = () => {
  const { currentUser, logout } = UserAuth();

  const handleLogout = async () => {
    try{
      await logout();
    }catch(error){
      console.log(error);
    }
  }

  return (
    <div className="sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200">
      <div className="containerWrap flex justify-between">
        <a className="btn btn-ghost normal-case text-xl text-[#000000] font-bold">WebChat</a>
        <div className="cursor-pointer text-[#000000] border border-[#000000] m-2 py-1 px-5 rounded-full flex flex-row items-center">
          <img
            src={google}
            className="w-4 mr-1"
          />
          <div>
            {currentUser ? <button 
              onClick={handleLogout}
              className=""
              >logout</button> : ""}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar