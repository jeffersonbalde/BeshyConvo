import ChatBox from "../components/ChatBox"
import Navbar from "../components/Navbar"
import SendMessage from "../components/SendMessage"

export const Chatroom = () => {
  return (
    <div className="bg-[#FFFFFF] w-full h-full">
        <Navbar />
        <ChatBox />
        <SendMessage />
    </div>
  )
}
