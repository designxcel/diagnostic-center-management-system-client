import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import UseAxiosPublic from '../../../Hooks/UseAxiosPublic';

const UserProfile = () => {
    const {user} = useContext(AuthContext)
    const axiosPublic = UseAxiosPublic()
    const { data: stats = [] } = useQuery({
        queryKey: ["user-stats"],
        queryFn: async () => {
          const res = await axiosPublic.get("/user-stats");
          return res.data;
        },
      });
    return (
        <div className='text-center'>
            <div className='flex justify-center items-center'>
                <img className='h-40 rounded-full' src={user?.photoURL} alt="" />
            </div>
            <h2 className='text-5xl font-bold'>Profile Name: {user?.displayName}</h2>
            <p>Email: {user?.email}</p>

            <div className='grid grid-cols-2 md:grid-cols-3 gap-2 mt-20'>
                <div className='bg-gradient-to-t from-purple-400 to-pink-600 h-24 rounded-lg flex justify-center items-center text-white font-bold text-xl p-2'>
                    <h2>Doctors Booking: {stats.drbookings}</h2>
                </div>
                <div className='bg-gradient-to-t from-purple-400 to-pink-600 h-24 rounded-lg flex justify-center items-center text-white font-bold text-xl p-2'>
                    <h2>Test Taken: {stats.testsDone}</h2>
                </div>
                <div className='bg-gradient-to-t from-purple-400 to-pink-600 h-24 rounded-lg flex justify-center items-center text-white font-bold text-xl p-2'>
                    <h2>Total Amount Paid: {stats.revenue}</h2>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;