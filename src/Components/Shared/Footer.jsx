/* eslint-disable react/no-unescaped-entities */


function Footer() {
  return (
<footer className="footer p-10 bg-base-100 text-neutral-content ">
     
     <div>
     <p className=" footer-title text-secondary">Get in Touch:</p>
       <aside className="flex sm:flex-row flex-col items-center  ">
         <svg
           width="80"
           height="80"
           viewBox="0 0 48 48"
           xmlns="http://www.w3.org/2000/svg"
           
         >
           <defs>
             <style>
               {
                 ".e{fill:none;stroke:#f59e0b;stroke-linecap:round;stroke-linejoin:round;}"
               }
             </style>
           </defs>
           <path
             id="c"
             className="e"
             d="m24.9697,39.04v-3.7188c2.9742-2.9742,5.4671-3.9181,9.2651-3.9181h0c3.798,0,6.2909.9439,9.2651,3.9181v3.7188h-18.5303Z"
           />
           <circle className="e" cx="34.2349" cy="22.8928" r="4.9752" />
           <path
             id="d"
             className="e"
             d="m24.9697,39.04H4.5v-6.2886c5.0295-5.0295,9.2451-6.6257,15.6678-6.6257h0c5.7656,0,9.7526,1.2863,14.1465,5.188"
           />
           <circle className="e" cx="20.1678" cy="15.8085" r="6.8485" />
         </svg>
       
         <p className=" font-semibold  max-w-3xl  ml-2 sm:text-left text-center text-base">Looking for a passionate Full-Stack Developer? Let's collaborate and create innovative solutions together. Contact me for job opportunities!</p>
       </aside>
     </div>
     <nav>
       <h6 className="footer-title text-secondary">Social</h6>
       <div className="grid grid-flow-col gap-4">
         <a>
           <svg
             xmlns="http://www.w3.org/2000/svg"
             width="24"
             height="24"
             viewBox="0 0 24 24"
             className="fill-current"
           >
             <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
           </svg>
         </a>
         <a>
           <svg
             xmlns="http://www.w3.org/2000/svg"
             width="24"
             height="24"
             viewBox="0 0 24 24"
             className="fill-current"
           >
             <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
           </svg>
         </a>
         <a>
           <svg
             xmlns="http://www.w3.org/2000/svg"
             width="24"
             height="24"
             viewBox="0 0 24 24"
             className="fill-current"
           >
             <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
           </svg>
         </a>
       </div>
     </nav>
   </footer>
  )
}

export default Footer
