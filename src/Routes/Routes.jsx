import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import MainLayouts from "../Layouts/MainLayouts";
import About from "../Pages/About";


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
        }
      ]
    },
  ]);

  export default router;
