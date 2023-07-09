// import { useState } from "react"
// import { UserAuth } from "../context/AuthContext";
// import { addDoc, collection, serverTimestamp } from "firebase/firestore";
// import { db } from "../firebase";
// import send from '../assets/send.svg'

// const SendMessage = () => {

//     const [ value, setValue ] = useState("");
//     const { currentUser } = UserAuth();
    
//     const handleSendMessage = async (e) => {
//         e.preventDefault();

//         if(value.trim() === ""){
//             alert("Invalid Message Beshy");
//             return;
//         }

//         try{
//             const { uid, displayName, photoURL } = currentUser;
//             await addDoc(collection(db, "messages"), {
//                 text: value,
//                 name: displayName,
//                 avatar: photoURL,
//                 createdAt: serverTimestamp(),
//                 uid     
//             });
//         }catch(error){
//             console.log(error);
//         }

//         setValue("");
//     }
//   return (
//     <div className="bg-[#FFFFFF] fixed bottom-0 w-full py-5 shadow-lg border-t-2">
//         <form className="containerWrap flex px-2" onSubmit={handleSendMessage}>
//             <div className="flex flex-row items-center justify-center w-full gap-3">
//                 <input 
//                     type="text" 
//                     className="text-[#000000] py-2 px-3 w-full focus:outline-none bg-[#F3F3F3] rounded-full" 
//                     value={value}
//                     onChange={e => setValue(e.target.value)}
//                     />
//                 <div>
//                     <button 
//                         className=""
//                         type="submit">
//                         <img 
//                             src={send}
//                             className="w-7"
//                         />
//                     </button>
//                 </div>
//             </div>
//         </form>
//     </div>
//   )
// }

// export default SendMessage

import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import send from "../assets/send.svg";

const SendMessage = () => {
  const [value, setValue] = useState("");
  const { currentUser } = UserAuth();

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (value.trim() === "") {
      alert("Invalid Message Beshy");
      return;
    }

    try {
      const { uid, displayName, photoURL } = currentUser;
      const messageWithEmoji = value
        .split(" ")
        .map((word) => `${word}🤸`)
        .join(" ");

      await addDoc(collection(db, "messages"), {
        text: messageWithEmoji,
        name: displayName,
        avatar: photoURL,
        createdAt: serverTimestamp(),
        uid,
      });
    } catch (error) {
      console.log(error);
    }

    setValue("");
  };

  return (
    <div className="bg-[#ffffff] fixed bottom-0 w-full py-5 shadow-lg border-t-2 ">
      <form className="containerWrap flex px-4" onSubmit={handleSendMessage}>
        <div className="flex flex-row items-center justify-center w-full gap-3">
          <input
            type="text"
            className="text-[#000000] py-2 px-3 w-full focus:outline-none bg-[#F3F3F3] rounded-full"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <div>
            <button className="" type="submit">
              <img src={send} className="w-7" alt="Send" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SendMessage;
