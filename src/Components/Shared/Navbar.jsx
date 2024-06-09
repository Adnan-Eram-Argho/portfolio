import { Link, useLocation } from "react-router-dom"
import auth from "../../Firebase/firebase.config";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";

function Navbar() {
    const location = useLocation();

    const [user] = useAuthState(auth);
const [signOut] = useSignOut(auth);

    const handleSignOut =async () => {
        const success = await signOut();
        if (success) {
          alert('You are signed out');
        }
      }
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
            location?.pathname== "/about" || location?.pathname=='/login'?   <></>  : <li><a href="#skills">Skills</a></li>
          }
          {
            location?.pathname== "/about" || location?.pathname=='/login'?   <></>  : <li><a href="#projects">Projects</a></li>
        }
          {
            location?.pathname== "/about" || location?.pathname=='/login'?   <></>  : <li><a href="#contact">Contacts</a></li>
          }
  
  {
                user?.email ?
                <>
               <Link to="dashboard" className="btn mr-2 mb-2 btn-outline btn-secondary"> Dashboard</Link>
               <button className="btn btn-outline btn-secondary" onClick={handleSignOut}> sign out</button>
                </>
                :
                <>
                 <Link to={'login'} className="btn btn-outline btn-secondary">Login</Link>
                
                </>
            }
        </ul>
      </div>
      <Link to={'/'} className="btn btn-ghost text-xl">A<span className="text-secondary">E</span>A</Link>
    </div>
    <div className="navbar-center hidden lg:flex navbar navbar-end">
      <ul className="menu menu-horizontal px-1">
        <li><Link to={'about'}>About me</Link></li>
        {
            location?.pathname== "/about" || location?.pathname=='/login'?   <></>  : <li><a href="#skills">Skills</a></li>
        }
        {
            location?.pathname== "/about" || location?.pathname=='/login'?   <></>  : <li><a href="#projects">Projects</a></li>
        }
           {
            location?.pathname== "/about" || location?.pathname=='/login'?   <></>  : <li><a href="#contact">Contacts</a></li>
          }
       
       {
                user?.email ?
                <>
               <Link to="dashboard" className="btn mr-2 btn-outline btn-secondary"> Dashboard</Link>
               <button className="btn btn-outline btn-secondary" onClick={handleSignOut}> sign out</button>
                </>
                :
                <>
                 <Link to={'login'} className="btn btn-outline btn-secondary">Login</Link>
                
                </>
            }
       
      </ul>
    </div>
   
  </div>
  )
}

export default Navbar
