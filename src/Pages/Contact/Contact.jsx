import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';


const Contact = () => {
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
        <div>
            <Helmet>
                <title>TECHMED | Contact</title>
            </Helmet>
            <div className='bg-gradient-to-r from-purple-400 to-pink-600 p-20 text-white font-bold text-3xl text-center'>
                <h2>Contact us</h2>
            </div>
            <div className="max-w-7xl mx-auto mt-10 min-h-[60vh]">
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
        </div>
    );
};

export default Contact;