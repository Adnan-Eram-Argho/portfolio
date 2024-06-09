import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

function EditProject() {
  const { id } = useParams();
  console.log(id)
  const [projects, setProjects] = useState({});
  const [loading, setLoading] = useState(true);

  const handleEditProjects = async (e) => {
    e.preventDefault();
    // const token = localStorage.getItem('token');
    const form = e.target;      
    const title = form.title.value;
    const link = form.link.value;
    const description = form.description.value;
    const newsData = { title, link, description };
    console.log(newsData);
    let config = {
      headers: {
        // authorization: `bearer ${token}`,
      }
    };
    await axios.patch(`https://portfolio-server-phi-pearl.vercel.app/project/${id}`, newsData, config);
    toast.success('Successfully edited!');
  };

  useEffect(() => {
    async function load() {
      try {
        const newsData = await axios.get(`https://portfolio-server-phi-pearl.vercel.app/project/${id}`);
        setProjects(newsData?.data);
      } catch (error) {
        console.error("Error loading data", error);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [id]);

  if (loading) {
    return <div className="flex items-center justify-center h-screen"><span className="loading loading-spinner loading-lg text-center"></span></div>;
  }
console.log(projects?.title)
  return (
    <div className="w-full p-16">
      <h1 className="text-center text-secondary my-5 text-3xl">Edit Projects</h1>
      <hr className='w-11/12 text-secondary border border-secondary text-center m-auto' />
      <form className="w-full mt-3" onSubmit={handleEditProjects}>
        <div className="mb-4">
          <label htmlFor="">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            defaultValue={projects?.title}
            className="py-5 input input-bordered input-secondary w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Link</label>
          <input
            type="text"
            name="link"
            placeholder="Link"
            defaultValue={projects?.link}
            className="py-5 px-7 input input-bordered input-secondary w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Description</label>
          <textarea
            type="text"
            name="description"
            placeholder="Description"
            defaultValue={projects?.description}
            className="py-5 px-7 textarea textarea-bordered textarea-secondary w-full"
          />
        </div>
        <div className="mb-4">
          <input
            type="submit"
            value={"Edit Project"}
            className="w-full py-5 px-7 btn btn-outline btn-secondary"
          />
        </div>
      </form>
    </div>
  );
}

export default EditProject;
