import { createBrowserRouter } from "react-router-dom";
import MAinLayout from "../MainLayout/MAinLayout";
import Home from "../Pages/Home/Home";
import ServicesDetails from "../Components/Services/ServicesDetails";
import Login from "../Pages/Home/Login/Login";
import Regester from "../Pages/Regester/Regester";
import Dashbord from "../Dashbord/Dashbord";
import Employment from "../Dashbord/Employ/Employment";
import PrivateRoute from "./PrivetRoutes";
import Employmenthr from "../Dashbord/Employ/EmployManageHr";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MAinLayout></MAinLayout>,
    // errorElement: <NotFoundPage></NotFoundPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services-Details/:id",
        element: <ServicesDetails></ServicesDetails>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/regester",
        element: <Regester></Regester>,
      },
    ],
  },
  {
        path: "/dashbord",
        element: <PrivateRoute><Dashbord></Dashbord></PrivateRoute>,
        children: [
          {
            path: "/dashbord",
           
          },
          {
            path: "/dashbord/employee-list",
            element: <Employment></Employment>
          },
          {
            path: "/dashbord/employee-list-hr",
            element: <Employmenthr></Employmenthr>
          }
        ]
  },
]);
