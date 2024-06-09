/* eslint-disable react/prop-types */

import axios from "axios";
import { Link } from "react-router-dom"
import { toast } from "react-toastify";


function DashboardCards({project}) {
  // const token = localStorage.getItem('token')
  async function deleteElement(){
    let config = {
      headers: {
        // authorization: `bearer ${token}`,
      }
    }

      const del = await axios.delete(`https://portfolio-server-phi-pearl.vercel.app/project/${project?._id}`,config);
      console.log(del)
      if(del){
       
        toast.success('Successfully Deleted!')

      }
     }
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <div className="px-6 py-4">
      <div className="font-bold text-xl text-secondary mb-2">{project?.title}</div>
      <p className=" text-base">{project?.description}</p>
    </div>
    <div className="px-6 py-4 ">
      <a href={project?.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-secondary my-5">View Project</a>
    </div>
    <div className="flex flex-wrap gap-2">
    <Link to={`/dashboard/edit-project/${project?._id}`} className="btn btn-outline btn-secondary my-2">Edit Project</Link>
    <button className="btn btn-outline btn-secondary my-2" onClick={deleteElement}>Delete Project</button>
    </div>
  </div>
  )
}

export default DashboardCards
