/* eslint-disable react/prop-types */


function ProjectCard({project}) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <div className="px-6 py-4">
      <div className="font-bold text-xl text-secondary mb-2">{project?.title}</div>
      <p className=" text-base">{project?.description}</p>
    </div>
    <div className="px-6 py-4">
      <a href={project?.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-secondary my-5">View Project</a>
    </div>
  </div>
  )
}

export default ProjectCard
