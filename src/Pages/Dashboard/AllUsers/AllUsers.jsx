import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { FaTrash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";


const AllUsers = () => {
    const axiosSecure = UseAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
          const res = await axiosSecure.get("/users");
          return res.data;
        },
      });

      const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res =>{
            if(res.data.modifiedCount > 0){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is an Admin Now`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                  refetch()
            }
        })
      }

      const handleDeleteUser = user => {
        Swal.fire({
            title: "Are you sure to Delete?",
            text: "Once deleted,you won't be able to revert this!",
            imageUrl: 'https://i.ibb.co/TLMrTRG/techMede.png',
            imageWidth: 300,
            imageHeight: 100,
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            axiosSecure.delete(`/users/${user._id}`)
            .then(res =>{
                if(res.data.deletedCount > 0){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Selected item is deleted",
                        showConfirmButton: false,
                        timer: 1500
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
                <title>TECHMED | All Users</title>
            </Helmet>
            <div className="">
                <h2 className="uppercase text-5xl font-bold text-center mt-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">All Users</h2>
                <div className="divider max-w-7xl mx-auto"></div>
            </div>
            <div>
            <div className="overflow-x-auto">
                        <table className="table table-zebra">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                users.map((user, index) => 
                                    <tr>
                                        <th>{index + 1}</th>
                                        <th>
                                            <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={user.avatar} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                            </div>
                                        </th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            {
                                                user.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(user)}>Not Admin</button>
                                            }
                                        </td>
                                        <td className="text-red-700" alt="Delete">
                                            <button onClick={() => handleDeleteUser(user)}><FaTrash></FaTrash></button>
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

export default AllUsers;