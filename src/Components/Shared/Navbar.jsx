import { Link, useLocation } from "react-router-dom"

function Navbar() {
    const location = useLocation();
  return (
    <div className="navbar bg-base-100 bg-opacity-85  mt-0 sticky top-0 z-10">
    <div className="navbar-start">
      <div className="dropdown ">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><Link to={'about'}>About me</Link></li>
          {
            location?.pathname== "/about" ?   <></>  : <li><a href="#skills">Skills</a></li>
          }
          {
            location?.pathname== "/about" ?   <></>  : <li><a href="#projects">Projects</a></li>
        }
          {
            location?.pathname== "/about" ?   <></>  : <li><a href="#contact">Contacts</a></li>
          }
  
          <li className="navbar-end"><button>login</button></li>
        </ul>
      </div>
      <Link to={'/'} className="btn btn-ghost text-xl">A<span className="text-secondary">E</span>A</Link>
    </div>
    <div className="navbar-center hidden lg:flex navbar navbar-end">
      <ul className="menu menu-horizontal px-1">
        <li><Link to={'about'}>About me</Link></li>
        {
            location?.pathname== "/about" ?   <></>  : <li><a href="#skills">Skills</a></li>
        }
        {
            location?.pathname== "/about" ?   <></>  : <li><a href="#projects">Projects</a></li>
        }
                  {
            location?.pathname== "/about" ?   <></>  : <li><a href="#contact">Contacts</a></li>
          }
       
       <li> <button className="btn"> Login</button></li>
      </ul>
    </div>
   
  </div>
  )
}

export default Navbar
