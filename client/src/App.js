import './App.css';
import Register from './Register/Register.jsx'
import Login from './Login/Login.jsx'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar.jsx';
import LeftBar from './components/LeftBar/LeftBar.jsx';
import RightBar from './components/RightBar/RightBar.jsx';
import Home from './Home/Home.jsx';
import Profile from './Profile/Profile.jsx';

export function Layout(){
  return (
    <div>
      <Navbar />
      <div style={{display: "flex"}}>
        <LeftBar />
        <Outlet />
        <RightBar />
      </div>
    </div>
  )
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/profile/:id",
          element: <Profile />
        },
      ]
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
