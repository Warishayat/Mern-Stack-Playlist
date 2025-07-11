import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar.jsx";
import ParaComponents from "./Components/ParaComponents.jsx";
import Login from "./Components/Login.jsx";
import Email from "./Components/Email.jsx";
import Phone from "./Components/Phone.jsx";
import NotFound from "./Components/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <Navbar />
        {/* <About /> */}
        <Login/>
      </div>
    ),
  },
  {
  path: "/contact",
  element: (
    <div>
      <Navbar />
      <Contact />
    </div>
  ),
  children: [
    {
      path: "email",
      element: <Email />
    },
    {
      path: "phonenumber",
      element: <Phone />
    }
  ]
},
,
  {
    path:"/student/:id",
    element : <div>
      <Navbar/>
      <ParaComponents/>
    </div>
  },
  {
    path : "*",
    element : <NotFound/>
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
