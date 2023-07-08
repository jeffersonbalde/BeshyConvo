/* eslint-disable react/prop-types */
import { UserAuth } from "../context/AuthContext"

const Message = ({message}) => {
    
    const { currentUser } = UserAuth();

  return (
    <div className="bg-[#FFFFFF] px-2">
        <div className={`chat ${message.uid === currentUser.uid ? "chat-end" : "chat-start"}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                <img src={message.avatar} />
                </div>
            </div>
            <div className="chat-header text-xs text-slate-700">
                {message.name}  
            </div>
            <div className="chat-bubble bg-[#F3F3F3] text-[#000000]">{message.text}</div>
        </div>
    </div>
  )
}

export default Message