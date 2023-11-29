import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateDoctor = () => {
    const doctors = useLoaderData()
    const {_id} = doctors
    

      const handleUpdateDoctor = (e) =>{
        e.preventDefault()
        const form = e.target;

        const dname = form.dname.value;
        const degree = form.degree.value;
        const specialist = form.specialist.value;
        const photo = form.photo.value;
        const chamber = form.chamber.value;
        const contact = form.contact.value;
        const details = form.details.value;

        const updatedDoctor = {
            dname, degree, specialist, photo, chamber, contact, details
        }
        fetch(`http://localhost:5000/drlists/${_id}`, {
            method: 'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(updatedDoctor)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                form.reset()
                Swal.fire({
                    imageUrl: 'https://i.ibb.co/GWCwq8z/logoIcon.png',
                    title: 'Congratulations!',
                    text: 'You have successfully Updated Doctor info',
                    imageWidth: 400,
                    imageHeight: 100,
                    imageAlt: 'Custom image',
                  })
            }
        })
      }
    return (
        <div>
            <div className='bg-gradient-to-r from-purple-400 to-pink-600 p-20 text-white font-bold text-3xl text-center mb-10'>
                <h2>Info Update of: {doctors.name}</h2>
            </div>
            <div>
            <form onSubmit={handleUpdateDoctor}>
                    <div className="form-control">
                        <label className="label">
                        <span className="label-text">Doctor Name</span>
                        </label>
                        <input
                        type="text"
                        defaultValue={doctors.name}
                        placeholder="Enter Doctor Name"
                        name="dname"
                        className="input input-bordered"
                        />
                    </div>
                    <div className="flex  flex-col md:flex-row gap-4">
                        <div className="form-control md:w-1/3">
                            <label className="label">
                            <span className="label-text">Doctor Degree</span>
                            </label>
                            <input
                            type="text"
                            defaultValue={doctors.degree}
                            placeholder="Enter Doctor Degree"
                            name="degree"
                            className="input input-bordered"
                            />
                        </div>
                        <div className="form-control md:w-1/3">
                            <label className="label">
                            <span className="label-text">Doctor Speciality</span>
                            </label>
                            <input
                            type="text"
                            defaultValue={doctors.specialist}
                            placeholder="Enter Doctor Speciality"
                            name="specialist"
                            className="input input-bordered"
                            />
                        </div>
                        <div className="form-control md:w-1/3">
                                    <label className="label">
                                    <span className="label-text">Doctor Image</span>
                                    </label>
                                    <input type="file" name='photo' className="file-input file-input-bordered w-full" />
                                    
                            </div>
                    </div>
                   
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="form-control w-full">
                            <label className="label">
                            <span className="label-text">Doctor Chamber</span>
                            </label>
                            <input
                            type="text"
                            defaultValue={doctors.chamber}
                            placeholder="Enter Doctor Chamber Name"
                            name="chamber"
                            className="input input-bordered"
                            />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                            <span className="label-text">Doctor Contact Point</span>
                            </label>
                            <input
                            type="text"
                            defaultValue={doctors.contact}
                            placeholder="Enter Doctor Contact"
                            name="contact"
                            className="input input-bordered"
                            />
                        </div>
                    </div>
                    <div>
                    <label className="label">
                            <span className="label-text">Doctor Details (if any)</span>
                            </label>
                        <textarea placeholder="Doctors Details" defaultValue={doctors.details} name="details" className="textarea textarea-bordered textarea-lg w-full h-auto" ></textarea>
                    </div>
                    <div>
                        <input type="submit" value="Update Doctor" className="btn bg-cyan-400 btn-block mt-4" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateDoctor;