import Login from "./page/login/Login"
import Register from "./page/register/Register";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar"
import Leftbar from "./components/leftbar/Leftbar"
import Chatbar from "./components/chatbar/Chatbar"
import Home from "./page/home/Home"
import Profile from "./page/profile/Profile"
import "./style.scss"



function App() {

  const currentUser = true

  const Layout = () => {
    return (
      <div className="theme-dark">
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

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute><Layout /></ProtectedRoute>,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/profile/:id",
          element: <Profile />
        }
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
