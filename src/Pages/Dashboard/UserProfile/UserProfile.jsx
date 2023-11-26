import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const UserProfile = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className='text-center'>
            <div className='flex justify-center items-center'>
                <img className='h-40 rounded-full' src={user?.photoURL} alt="" />
            </div>
            <h2 className='text-5xl font-bold'>Profile Name: {user?.displayName}</h2>
            <p>Email: {user?.email}</p>
            {/* <p>Blood Group: {user?.blood}</p>
            <p>Blood Group: {user?.district}</p> */}
        </div>
    );
};

export default UserProfile;