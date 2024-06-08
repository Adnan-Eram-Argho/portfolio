

function Skills() {
  return (
    <div className="w-11/12 m-auto bg-neutral text-3xl my-5 py-3 rounded-lg" id="skills">
    <h1 className="text-center text-secondary my-5">My Skills</h1>
    <hr className='w-11/12 text-secondary border border-secondary text-center m-auto' />
    <div className="flex flex-wrap gap-5 justify-center my-5">
      <div className="card max-w-64 h-[500px] bg-base-100 shadow-xl my-5">
        <figure>
          <i className="fa-brands fa-react text-secondary text-8xl mt-2"></i>
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl">React js:</h2>
          <hr className='w-full text-secondary border border-secondary' />
          <p className="text-lg">I have been learning and practicing React.js since 2022. It allows me to build dynamic and responsive user interfaces efficiently.</p>
        </div>
      </div>

      <div className="card w-64 h-[500px] bg-base-100 shadow-xl my-5">
        <figure>
          <i className="fa-brands fa-node-js text-secondary text-8xl mt-2"></i>
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl">Node js:</h2>
          <hr className='w-full text-secondary border border-secondary' />
          <p className="text-lg">Experienced in building server-side applications with Node.js, leveraging its asynchronous, event-driven architecture for scalable network applications.</p>
        </div>
      </div>

      <div className="card w-64 h-[500px] bg-base-100 shadow-xl my-5">
        <figure>
        <i className="fa-brands fa-square-js text-secondary text-8xl mt-2"></i>
          
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl">Express js:</h2>
          <hr className='w-full text-secondary border border-secondary' />
          <p className="text-lg">Proficient in using Express.js for building robust and scalable server-side applications. It simplifies the process of handling HTTP requests and middleware integration.</p>
        </div>
      </div>

      <div className="card w-64 h-[500px] bg-base-100 shadow-xl my-5">
        <figure>
        
          <i className="fa-solid fa-database text-secondary text-8xl mt-2"></i>
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl">MongoDB:</h2>
          <hr className='w-full text-secondary border border-secondary' />
          <p className="text-lg">Skilled in working with MongoDB, a NoSQL database. It allows for flexible and scalable storage of JSON-like documents, making data management efficient.</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Skills
