import { RouterProvider } from "react-router-dom"
import router from "./Routes/Routes"
import { ToastContainer } from "react-toastify"


function App() {
 

  return (
    <>
   <>
   <ToastContainer />
       <RouterProvider router={router} />
       
    </>
    </>
  )
}

export default App
