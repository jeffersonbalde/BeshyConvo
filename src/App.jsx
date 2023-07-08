import { Route, Routes } from "react-router-dom";
import { Chatroom } from "./pages/Chatroom";
import Login from "./pages/Login";
import { PrivateRoute } from "./routes/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route 
          path="/chat" 
          element={
            <PrivateRoute>
              <Chatroom />
            </PrivateRoute>
          }
          />
      </Routes>
    </AuthProvider>
  )
}