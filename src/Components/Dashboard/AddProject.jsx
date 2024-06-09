import axios from "axios";
import { toast } from "react-toastify";



function AddProject() {

    
    const  handleCreateProject=async(e)=>{
    //   const token = localStorage.getItem('token')
      e.preventDefault();
      const form =e.target;
      
      const title = form.title.value;
      const link = form.link.value;
   
      const description = form.description.value;
      const newsData = {title,link,description}
      console.log(newsData)
      let config = {
        headers: {
        //   authorization: `bearer ${token}`,
        }
      }
  
     const result=  await axios.post("http://localhost:3000/project",newsData,config).then() 
     console.log(result)
     toast.success('Successfully added!')
    }
  return (
    <div className="w-full p-16">
    <h1 className="text-center text-secondary my-5 text-3xl">Add Projects</h1>
    <hr className='w-11/12 text-secondary border border-secondary text-center m-auto' />
  <form className="w-full mt-3" onSubmit={handleCreateProject}>
    
    <div className="mb-4">
      <label htmlFor="">Title</label>
      <input
        type="text"
        name="title"
        placeholder="Title"
        className=" py-5 input input-bordered input-secondary w-full"
      />
    </div>
    <div className="mb-4">
      <label htmlFor=""> link</label>
      <input
        type="text"
        name="link"
        placeholder="link"
        className=" py-5 px-7 input input-bordered input-secondary w-full"
      />
    </div>

    <div className="mb-4">
      <label htmlFor="">description</label>
      <textarea
        type="text"
        name="description"
        placeholder="description"
        className=" py-5 px-7 textarea textarea-bordered textarea-secondary w-full"
      />
    </div>
    <div className="mb-4">
    
      <input
        type="submit"
        
        value={"Add News"}
        className="w-full py-5 px-7 btn btn-outline btn-secondary"
      />
    </div>
  </form>
</div>
  )
}

export default AddProject
