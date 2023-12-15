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

import BarCharts from "../Dashbord/BarChart/BarChart";
import Employ from "../Dashbord/Employ/Employ";
import WorkSheet from "../Dashbord/workSheet/workSheet";
import WorkSheetHrTable from "../Dashbord/workSheet/WorkSheetHrTable";
import CountuctUS from "../Pages/ContuctUs/CountuctUS";
import Errorpage from "../Pages/Errorpage";
import AdminRoutes from "./AdminRoutes";
import HrRoutes from "./HrRoute";
import EmployeeRoutes from "./EmployeeRoute";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MAinLayout></MAinLayout>,
    errorElement: <Errorpage></Errorpage>,
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
      {
        path: "/contuct-us",
        element: <CountuctUS></CountuctUS>
      }
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
            element: <AdminRoutes><Employment></Employment></AdminRoutes>
          },
          {
            path: "/dashbord/employee-list-hr",
            element: <HrRoutes><Employmenthr></Employmenthr></HrRoutes>
          },
          {
            path: "/dashbord/employee-list-hr/details/:slug",
            element: <HrRoutes><BarCharts></BarCharts></HrRoutes>
          },
          {
            path: "/dashbord/payment-history",
            element: <EmployeeRoutes><Employ></Employ></EmployeeRoutes>
          },
          {
            path:"/dashbord/work-sheet",
            element: <EmployeeRoutes><WorkSheet></WorkSheet></EmployeeRoutes>,
            lodder:  fetch('https://backend-seven-ruddy.vercel.app/workSheetCount')
          },
          {
            path: "/dashbord/work-sheet-hr",
            element: <HrRoutes><WorkSheetHrTable></WorkSheetHrTable></HrRoutes>
          },
          
          

        ]
  },
]);
