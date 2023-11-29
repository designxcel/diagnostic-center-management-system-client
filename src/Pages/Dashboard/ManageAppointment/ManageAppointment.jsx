
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";


const ManageAppointment = () => {
    const [loadBooking, setLoadBooking] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/drbooking')
        .then(res => res.json())
        .then(data => {
            setLoadBooking(data)
        })
    },[])

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
                fetch(`http://localhost:5000/drbooking/${id}`,{
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                          const remaining = loadBooking.filter(booking => booking._id !== id);
                            setLoadBooking(remaining);
                    }
                })
            
            }
          });
    }

    const handleUpdateBooking = id =>{
        fetch(`http://localhost:5000/drbooking/${id}`,{
            method: 'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify({status: 'Approved'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your booking has been approved",
                    showConfirmButton: false,
                    timer: 1500
                  });
                const remainingItems = loadBooking.filter(booking => booking._id !== id);
                    const updated = loadBooking.find(booking => booking._id === id);
                    updated.status = 'Approved'
                    const newBookings = [updated, ...remainingItems];
                    setLoadBooking(newBookings);
            }
        })
    }

    
    return (
        <div>
            <Helmet>
                <title>TECHMED | Manage Appointment</title>
            </Helmet>
            <div className="">
                <h2 className="uppercase text-5xl font-bold text-center mt-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Manage Patient Appointment</h2>
                <div className="divider max-w-7xl mx-auto"></div>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Dr. Name</th>
                        <th>Chamber</th>
                        <th>Contact</th>
                        <th>Email</th>
                        <th>Chamber Time</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    
                    {
                        loadBooking.map((booking, index) => 
                            <tr key={booking._id}>
                                <th>{index+1}</th>
                                <td>{booking.name}</td>
                                <td>{booking.chamber}</td>
                                <td>{booking.contact}</td>
                                <td>{booking.email}</td>
                                <td>{booking.chamber_time}</td>
                                <td>
                                    {
                                        status === 'Approved' ?
                                        <span className="font-bold text-primary">Approved</span>
                                        :
                                        <div className='text-red-700'>
                                        <button onClick={()=>handleUpdateBooking(booking._id)}>Pending</button>
                                        </div>
                                    }
                                    
                                </td>
                                <td>
                                    <div className='text-red-700'>
                                    <button onClick={() => handleDelete(booking._id)}><FaTrash></FaTrash></button>
                                    </div>
                                </td>
                            </tr>
                            )
                    }
                    </tbody>
                </table>
                </div>
        </div>
    );
};

export default ManageAppointment;