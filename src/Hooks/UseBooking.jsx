import React, { useContext } from 'react';
import UseAxiosSecure from './UseAxiosSecure';
import { AuthContext } from '../Pages/Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const UseBooking = () => {
    const axiosSecure = UseAxiosSecure()
    const {user} = useContext(AuthContext)
    const { data: booking = [], refetch} = useQuery({
        queryKey: ["booking", user?.email],
        queryFn: async () => {
          const res = await axiosSecure.get(`/drbooking?email=${user.email}`);
          return res.data;
        },
      });
      return [booking, refetch]
};

export default UseBooking;