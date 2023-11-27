import { FaFacebook, FaGoogle, FaInstagram, FaTelegram } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Footer = () => {
  const handleSubmit = e =>{
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const details = form.details.value;

    const info = {name, email, details}

    fetch('http://localhost:5000/contact', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(info)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'NewsLetter sent Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
}
  return (
    <div className="bg-[#102035] text-white flex flex-col md:flex-row justify-evenly items-center gap-8 text-center p-10">
      <div className="w-1/3 space-y-4">
        <h2 className="text-2xl font-bold">TECHMED</h2>
        <p>
          Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
          labore et dolore magna aliquyam erat, sed diam voluptua vero eos
          accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
          no sea takimata sanctus lorem ipsum dolor sit amet.
        </p>
        <div className="flex gap-4 justify-center items-center text-xl hover:text-cyan-400">
          <FaFacebook></FaFacebook>
          <FaGoogle></FaGoogle>
          <FaInstagram></FaInstagram>
          <FaTelegram></FaTelegram>
        </div>
      </div>
      <div className="w-1/3 text-black">
        <h2 className="text-xl font-semibold uppercase mb-5">Contact Form</h2>
        <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="textarea-accent input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="textarea-accent input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Message</span>
                        </label>
                        <textarea
                            className="textarea textarea-accent w-full"
                            placeholder="Your Message"
                            name="details"
                        ></textarea>
                    </div>
                    <div className="form-control mt-10">
                        <button className="btn btn-accent">Submit</button>
                    </div>
                </form>
      </div>
      <div className="w-1/3">
        <h2 className="text-xl font-semibold uppercase mb-5">Web SHortCut</h2>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/test">All Test</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
