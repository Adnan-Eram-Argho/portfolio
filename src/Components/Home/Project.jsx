import { useEffect, useState } from "react"
import axios from "axios";
import ProjectCard from "./ProjectCard";



function Project() {
    const[projects,setProjects] = useState();

    useEffect(()=>{
async function load(){
const Allprojects  = await axios.get("http://localhost:3000/project")
setProjects(Allprojects?.data)
}
load()
    },[])
  return (
    <div className="w-11/12 m-auto bg-neutral text-3xl my-5 py-3 rounded-lg" id="projects">
    <h1 className="text-center text-secondary my-5">My Projects</h1>
    <hr className='w-11/12 text-secondary border border-secondary text-center m-auto' />
    <div className="flex flex-wrap gap-5 justify-center my-5">
        {
            projects?.map(project=><ProjectCard key={project?._id} project={project}/>)
        }
    </div>
    </div>
  )
}

export default Project
