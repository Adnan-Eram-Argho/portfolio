import axios from "axios"
import { useEffect, useState } from "react"

import DashboardCards from "./DashboardCards";


function BaseDashboard() {
    const [projects,setProjects] = useState()
    useEffect(()=>{
       async function load(){
        const projectsData =await axios.get('http://localhost:3000/project');
        setProjects(projectsData?.data)
        }
        load()
    })
  return (
    <div className="w-11/12 m-auto bg-neutral text-3xl my-5 py-3 rounded-lg" id="projects">
    <h1 className="text-center text-secondary my-5">My Projects</h1>
    <hr className='w-11/12 text-secondary border border-secondary text-center m-auto' />
    <div className="flex flex-wrap gap-5 justify-center my-5">
        {
            projects?.map(project=><DashboardCards key={project?._id} project={project}/>)
        }
    </div>
    </div>
  )
}

export default BaseDashboard
