import Navbar from "./components/Navbar";
import { Chatroom } from "./pages/Chatroom";
import Login from "./pages/Login";

export default function App() {
  return (
    <div>
      <Navbar />
      {/* <Login /> */}
      <Chatroom />
    </div>
  )
}