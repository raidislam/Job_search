import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layout/MainLayout"
import Home from "../pages/Home/Home"
import Register from "../pages/Register/Register"
import Signin from "../pages/Signin/Signin"
import JobDetails from "../pages/JobDetails/JobDetails"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h2>Route Not Found</h2>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "signin",
        element: <Signin />
      },
      {
        path: "/jobs/:id",
        element: <JobDetails />,
        loader:({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
      }
    ],
  },
])
