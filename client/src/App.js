import './App.css';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Write from './pages/Write';
import Single from './pages/Single';
import Navbar from "./components/NavBar";
import { Outlet } from 'react-router-dom';
import Footer from "./components/Footer";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <Single />,
      },
      {
        path: "/write",
        element: <Write />,
      },
    ],
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

function App() {
  return (
    <div className="app">
      <div className="app-container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;