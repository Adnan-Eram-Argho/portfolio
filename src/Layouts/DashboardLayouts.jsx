import { Link, Outlet } from "react-router-dom";
import auth from "../Firebase/firebase.config";
import { useSignOut } from "react-firebase-hooks/auth";

function DashboardLayouts() {
  const [signOut] = useSignOut(auth);

  const handleSignOut = async () => {
    const success = await signOut();
    if (success) {
      alert("You are signed out");
    }
  };

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet />
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content flex flex-col">
          {/* Sidebar content here */}
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'addproject'}>Add Project</Link></li>
          <li className="mt-auto">
            <button className="btn btn-outline btn-secondary w-full" onClick={handleSignOut}>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DashboardLayouts;
