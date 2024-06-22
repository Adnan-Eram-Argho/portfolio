import my_pic from '../../../public/Images/myPic.png'

function Hero() {
  return (
    <div className="container w-full mx-auto p-4 ">
    <div className="flex flex-col lg:flex-row items-center lg:justify-between bg-neutral text-white rounded-lg pb-0 p-6 lg:px-12 ">
      {/* Profile Section */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
        <h1 className="text-3xl lg:text-3xl font-bold mb-2">Adnan Eram Argho<span className='text-secondary font-5xl'>.</span></h1>
        <hr  className='w-10 text-secondary border border-secondary'/>
        <p className="text-sm lg:text-lg mb-4">Full stack Web Developer | 4+ Years Experience </p>
        <a href='#contact' className="btn btn-outline btn-secondary">Contact me</a>
      </div>
      {/* Image Section */}
      <div className="mt-6 lg:mt-0">
        <img src={my_pic} alt="Jack Harper" className="w-48 h-full lg:w-full lg:h-full lg:rounded-lg rounded-full object-cover" />
      </div>
      {/* Description Section */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left mt-6 lg:mt-0 lg:ml-5">
        <h2 className='text-secondary text-2xl'>Introduction</h2>
        <h2 className="text-xl lg:text-3xl font-semibold mb-2"> Full Stack Web Developer,MERN Stack</h2>
        <p className="text-sm lg:text-lg">A self-taught developer from Bangladesh. Passionate about continuous learning and problem-solving.</p>
        <a href='https://drive.google.com/file/d/17FHvdlAVn2pfSnrdDa2Y3rZVeS993ADt/view' className="btn btn-outline btn-secondary my-5" target='_blank'>Download Resume</a>
      </div>
    </div>
  </div>
  )
}

export default Hero
