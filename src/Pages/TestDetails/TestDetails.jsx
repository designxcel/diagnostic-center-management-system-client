
import { useContext } from 'react';
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';
import UseCart from '../../Hooks/UseCart';

const TestDetails = () => {
    const detailsOfTest = useLoaderData()
    const {name, price, details, availibility, time, center, category, _id} = detailsOfTest
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = UseAxiosSecure()
    const [, refetch] = UseCart()

    const handleAddToCart = (test) =>{
        console.log(test)
        if(user && user.email){
            const testItem ={
                testId : _id,
                email: user.email,
                name,
                price
            }
            axiosSecure.post('/carts', testItem)
                .then(res => {
                    console.log(res.data)
                    if(res.data.insertedId){
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to the cart`,
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
        <div>
            <div className='bg-gradient-to-r from-purple-400 to-pink-600 p-20 text-white font-bold text-3xl text-center'>
                <h2>Details of: {name}</h2>
                <p className='text-sm underline'>
                <Link to="/test">Back to All Test Page</Link>
                    </p>
            </div>
            <div className='max-w-7xl mx-auto mt-10'>
                <div className='bg-gray-200 p-8 rounded-lg'>
                    <p>{details}</p>
                    
                </div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center p-10'>
                <div className='bg-gray-200 p-10 rounded-lg h-48 border-4 border-b-cyan-400'>
                    <p className='text-xl font-bold'>Test Price: {price}</p>
                </div>
                <div className='bg-gray-200 p-10 rounded-lg h-48 border-4  border-t-cyan-400'>
                    <p className='text-xl font-bold'>Available Day: {availibility}</p>
                </div>
                <div className='bg-gray-200 p-10 rounded-lg h-48 border-4  border-b-cyan-400'>
                    <p className='text-xl font-bold'>Available Duration: {time}</p>
                </div>
                <div className='bg-gray-200 p-10 rounded-lg h-48 border-4 border-t-cyan-400'>
                    <p className='text-xl font-bold'>Available Center: {center}</p>
                </div>
                <div className='bg-gray-200 p-10 rounded-lg h-48 border-4 border-b-cyan-400'>
                    <p className='text-xl font-bold'>Category of Test: {category}</p>
                </div>
            </div>
                <button onClick={handleAddToCart} className='btn bg-cyan-400 btn-block mb-20'>Book Your Test</button>
            </div>
        </div>
    ); 
};

export default TestDetails;