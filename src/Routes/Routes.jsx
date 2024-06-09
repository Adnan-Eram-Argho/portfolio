import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import MainLayouts from "../Layouts/MainLayouts";
import About from "../Pages/About";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRooutes from "./PrivateRoutes";
import DashboardLayouts from "../Layouts/DashboardLayouts";
import BaseDashboard from "../Components/Dashboard/BaseDashboard";
import AddProject from "../Components/Dashboard/AddProject";
import EditProject from "../Components/Dashboard/EditProject";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts/>,
      children:[
        {
            index:true,
            element:<Home/>
        },
        {
          path:"about",
          element:<About/>
        },
        {
          path:'login',
          element:<Login/>
        },
        {
          path:'/register',
          element:<Register/>
        }
      ]
    },
    {
      path:"/dashboard",
      element:<PrivateRooutes>
        <DashboardLayouts/>
      </PrivateRooutes>,
      
      children:[
        {
          index:true,
          element:<BaseDashboard/>
        },
        {
          path:'addproject',
          element:<AddProject/>
        },
        {
          path:'edit-project/:id',
          element:<EditProject/>
        },
      ]
      }
  ]);

  export default router;
