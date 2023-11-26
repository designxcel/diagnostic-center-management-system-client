import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
const AdminHome = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className='flex justify-center text-center'>
           <div className='space-y-4'>
           <div className="mb-20">
                <h2 className="uppercase text-5xl font-bold text-center mt-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">TECHMED | DIAGNOSTIC CENTER MANAGEMENT</h2>
                <div className="divider max-w-7xl mx-auto"></div>
            </div>
           <div className='flex justify-center'>
                <img className='h-48 rounded-xl' src={user?.photoURL} alt="" />
            </div>
            <h2 className='font-bold text-5xl mb-4'>ADMIN HOME</h2>
            <p className='text-4xl font-semibold'>Name of the Admin: {user?.displayName}</p>
            <div className='divider'></div>
            
           </div>
        </div>
    );
};

export default AdminHome;