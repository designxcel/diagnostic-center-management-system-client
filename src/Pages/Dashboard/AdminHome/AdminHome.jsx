import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
const AdminHome = () => {
    const {user} = useContext(AuthContext)
    const axiosSecure = UseAxiosSecure()
    
    const { data: stats = [] } = useQuery({
        queryKey: ["admin-stats"],
        queryFn: async () => {
          const res = await axiosSecure.get("/admin-stats");
          return res.data;
        },
      });
    return (
        <div className='flex justify-center text-center'>
           <div className='space-y-4'>
           <div className="mb-10">
                <h2 className="uppercase text-5xl font-bold text-center mt-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">TECHMED | DIAGNOSTIC CENTER MANAGEMENT</h2>
                <div className="divider max-w-7xl mx-auto"></div>
            </div>
           <div className='flex justify-center'>
                <img className='h-24 rounded-xl' src={user?.photoURL} alt="" />
            </div>
            <h2 className='font-bold text-5xl mb-4'>ADMIN HOME</h2>
            <p className='text-4xl font-semibold'>Name of the Admin: {user?.displayName}</p>
            <div className='divider'></div>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2'>
                <div className='bg-gradient-to-t from-purple-400 to-pink-600 h-24 rounded-lg flex justify-center items-center text-white font-bold text-xl p-2'>
                    <h2>Users:{stats.users}</h2>
                </div>
                <div className='bg-gradient-to-t from-purple-400 to-pink-600 h-24 rounded-lg flex justify-center items-center text-white font-bold text-xl p-2'>
                    <h2>Doctors: {stats.doctors}</h2>
                </div>
                <div className='bg-gradient-to-t from-purple-400 to-pink-600 h-24 rounded-lg flex justify-center items-center text-white font-bold text-xl p-2'>
                    <h2>Tests ITEMS: {stats.tests}</h2>
                </div>
                <div className='bg-gradient-to-t from-purple-400 to-pink-600 h-24 rounded-lg flex justify-center items-center text-white font-bold text-xl p-2'>
                    <h2>Labs: {stats.lab}</h2>
                </div>
                <div className='bg-gradient-to-t from-purple-400 to-pink-600 h-24 rounded-lg flex justify-center items-center text-white font-bold text-xl p-2'>
                    <h2>Doctor Booking: {stats.drbookings}</h2>
                </div>
                <div className='bg-gradient-to-t from-purple-400 to-pink-600 h-24 rounded-lg flex justify-center items-center text-white font-bold text-xl p-2'>
                    <h2>Test Result: {stats.testsDone}</h2>
                </div>
                <div className='bg-gradient-to-t from-purple-400 to-pink-600 h-24 rounded-lg flex justify-center items-center text-white font-bold text-xl p-2'>
                    <h2>Revenue: {stats.revenue}</h2>
                </div>
            </div>
           </div>
        </div>
    );
};

export default AdminHome;