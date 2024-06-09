import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_17iaokh",
        "template_jmvbcas",
        form.current,
        "FSy1fum5DbjeO2Cvc"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("email sent. Thank you for contacting us");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="w-11/12 m-auto bg-neutral  my-5 py-10 rounded-lg shadow-xl" id="contact">
      <h1 className="text-center text-secondary my-5 text-2xl">Contact Me</h1>
      <hr className="w-11/12 text-secondary border border-secondary text-center m-auto mb-5" />
      <div className="flex justify-center">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col w-full max-w-md items-center gap-2"
        >
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg">Name</span>
            </label>
            <input
              type="text"
              name="user_name"
              className="input input-bordered input-secondary w-full"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg">Email</span>
            </label>
            <input
              type="email"
              name="user_email"
              className="input input-bordered input-secondary w-full"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg">Message</span>
            </label>
            <textarea
              name="message"
              className="textarea textarea-bordered textarea-secondary w-full"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="form-control w-full mt-4">
            <input
              type="submit"
              value="Send"
              className="btn btn-secondary w-full"
            />
          </div>
        </form>
      </div>

      <h1 className="text-center text-secondary my-5 sm:text-2xl text-lg">
        You can also contact me using
      </h1>
      <hr className="w-11/12 text-secondary border border-secondary text-center m-auto mb-5" />
      <div className="collapse collapse-arrow bg-base-200 w-2/3 m-auto">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium text-secondary">
          email
        </div>
        <div className="collapse-content">
          <p className="text-sm">arghoadnaneram@gmail.com</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 w-2/3 m-auto">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium text-secondary">
          Phone
        </div>
        <div className="collapse-content">
          <p>+8801608181039</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 w-2/3 m-auto">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium text-secondary">
          LiknedIn
        </div>
        <div className="collapse-content">
          <a href="https://www.linkedin.com/in/adnan-eram-argho-67b66a214/" className="text-blue-400">Click here to visit my linkedin</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
