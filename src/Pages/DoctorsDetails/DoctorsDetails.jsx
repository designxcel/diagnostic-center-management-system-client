import React, { useContext } from 'react';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import doctor1 from "../../assets/doctor/dr1.jpg"
import doctor2 from "../../assets/doctor/dr2.jpg"
import doctor3 from "../../assets/doctor/dr3.jpg"
import doctor4 from "../../assets/doctor/dr4.jpg"
import { Rating } from '@smastrom/react-rating';
import { AuthContext } from '../Provider/AuthProvider';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';
import Swal from 'sweetalert2';
import UseBooking from '../../Hooks/UseBooking';

const DoctorsDetails = () => {
    const doctorInfo = useLoaderData()
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = UseAxiosSecure()
    const [, refetch] = UseBooking()
    const {_id, image, name, degree, specialist, chamber, rating,visit, contact, availability, chamber_time, details} = doctorInfo

    const handleAddToBooking = (doctorInfo) =>{
        console.log(doctorInfo)
        if(user && user.email){
            const bookingItem ={
                testId : _id,
                email: user.email,
                name,
                visit,
                chamber,
                contact, 
                chamber_time
            }
            axiosSecure.post('/drbooking', bookingItem)
                .then(res => {
                    console.log(res.data)
                    if(res.data.insertedId){
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to the booking`,
                            showConfirmButton: false,
                            timer: 1500
                          });
                          refetch()
                    }
                })
        }
        else{
            Swal.fire({
                title: "You are not logged in",
                text: "Please login first!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login"
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              });
        }
    }
    return (
        <div className='max-w-7xl mx-auto mt-10'>
            <div>
                <div className="card card-side bg-base-100 shadow-md p-10">
                    
                <figure><img src={image} alt="doctor_image"/></figure>
                <div className="ml-10 flex justify-center items-center">
                    <div className='space-y-4'>
                        <h2 className='text-4xl font-bold'>Personal Details</h2>
                        <div className='divider'></div>
                        <h2 className="card-title text-2xl font-bold">{name}</h2>
                        <p>{degree}</p>
                        <p>
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={rating}
                            readOnly
                            />
                        </p>
                        <p>{chamber}</p>
                    </div>
                </div>
                </div>
            </div>
            <div className='bg-gray-200 p-8 rounded-lg mt-10 text-center space-y-4'>
                <span className=' font-bold text-2xl'>About Doctor</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa consequatur ipsam accusantium? Neque quasi dolorem repellat tempore adipisci, iure, eveniet deserunt obcaecati, sed quia non. Alias, nostrum magni. Velit, veniam unde. Dolorem, facilis aliquid, dolore architecto sed et delectus esse sequi sunt, perspiciatis asperiores? Quaerat eveniet unde ipsa, officiis architecto fugiat voluptas totam eos in provident aspernatur earum consequatur est esse necessitatibus ab quo animi ipsum at magni non! Vel commodi maxime error nesciunt, asperiores velit minus alias dignissimos consequatur non debitis deleniti, suscipit quae enim? Quas, adipisci voluptatibus perferendis suscipit sequi alias et, deleniti neque, corrupti deserunt blanditiis placeat!</p>
            </div>
            <div className='flex justify-between gap-6 mt-10 p-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-1/2'>
                    <img className='rounded-lg' src={doctor1} alt="" />
                    <img className='rounded-lg' src={doctor2} alt="" />
                    <img className='rounded-lg' src={doctor3} alt="" />
                    <img className='rounded-lg' src={doctor4} alt="" />
                </div>
                <div className='w-1/2 border-2 rounded-lg space-y-4 p-4'>
                    <h2 className='bg-cyan-400 px-4 py-2 rounded-lg font-bold'>Specialist: {specialist}</h2>
                    <h2 className='bg-cyan-400 px-4 py-2 rounded-lg font-bold'>Availibility: {availability}</h2>
                    <h2 className='bg-cyan-400 px-4 py-2 rounded-lg font-bold'>Time: {chamber_time}</h2>
                    <p className='bg-cyan-400 px-4 py-2 rounded-lg font-bold'>Visit: {visit} BDT</p>
                    <p className='bg-cyan-400 px-4 py-2 rounded-lg font-bold'>Chamber: {chamber}</p>
                    <div>
                            <button onClick={handleAddToBooking} className='bg-gradient-to-r from-purple-400 to-pink-600 text-white px-4 py-2 rounded-lg font-bold btn-block'>Book Your Appointment</button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorsDetails;