import React from 'react';
import UseBooking from '../../../Hooks/UseBooking';
import { Helmet } from 'react-helmet-async';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure';

const Appointment = () => {
    const [booking, refetch] = UseBooking()
    const axiosSecure = UseAxiosSecure()
    const totalPrice = booking.reduce((total, item) => total + item.visit, 0)
    const handleDelete = id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/drbooking/${id}`)
                .then(res => {
                    if(res.data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                          refetch()
                    }
                })
            
            }
          });
    }
    return (
        <div>
            <Helmet>
                <title>TECHMED | Appointment</title>
            </Helmet>
            <div className="">
                <h2 className="uppercase text-5xl font-bold text-center mt-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">My Appointment</h2>
                <div className="divider max-w-7xl mx-auto"></div>
            </div>
            <div className='flex justify-around text-xl font-bold mb-10'>
                <h2>My booking: {booking.length}</h2>
                <h2>Total : {totalPrice}</h2>
            </div>
            <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Chamber</th>
                        <th>Contact</th>
                        <th>Chamber Time</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    
                    {
                        booking.map((item, index) => 
                            <tr key={item._id}>
                                <th>{index+1}</th>
                                <td>{item.name}</td>
                                <td>{item.chamber}</td>
                                <td>{item.contact}</td>
                                <td>{item.chamber_time}</td>
                                <td>
                                    <div className='text-red-700'>
                                    <button>Pending</button>
                                    </div>
                                </td>
                                <td>
                                    <div className='text-red-700'>
                                    <button onClick={() => handleDelete(item._id)}><FaTrash></FaTrash></button>
                                    </div>
                                </td>
                            </tr>
                            )
                    }
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    );
};

export default Appointment;