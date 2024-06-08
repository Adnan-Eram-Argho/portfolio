import { Outlet } from "react-router-dom"
import Navbar from "../Components/Shared/Navbar"
import Footer from "../Components/Shared/Footer"


function MainLayouts() {
  return (
    <div>
        <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default MainLayouts
