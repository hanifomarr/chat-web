import Login from "./page/login/Login"
import Register from "./page/register/Register";
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar"
import Leftbar from "./components/leftbar/Leftbar"
import Chatbar from "./components/chatbar/Chatbar"
import Home from "./page/home/Home"
import Profile from "./page/profile/Profile"
import "./style.scss"
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";



function App() {

  const { currentUser, darkMode } = useContext(AuthContext, DarkModeContext);


  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div style={{ display: "flex" }}>
          <Leftbar />
          <div style={{ flex: 6 }}>
            <Outlet />

          </div>
          <Chatbar />
        </div>
      </div>
    )
  }

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to={"/login"} />
    }
    return children
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute>
          <Layout />
        </ProtectedRoute>}>
          <Route path="/" element={<Home />} />
          <Route path="profile/:id" element={<Profile />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
