import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { FaTrash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";


const DoctorList = () => {
    const axiosSecure = UseAxiosSecure()
    const { data: doctors = [] } = useQuery({
        queryKey: ["doctors"],
        queryFn: async () => {
          const res = await axiosSecure.get("/drlists");
          return res.data;
        },
      });
    return (
        <div>
            <Helmet>
                <title>TECHMED | Doctors list</title>
            </Helmet>
            <div className="">
                <h2 className="uppercase text-5xl font-bold text-center mt-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Doctors List</h2>
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
                                <th>Info</th>
                                <th>Chamber</th>
                                <th>Contact Point</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                doctors.map((doctor, index) => 
                                    <tr>
                                        <th>{index + 1}</th>
                                        <th>
                                            <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={doctor.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                            </div>
                                        </th>
                                        <td>
                                            <div>
                                                <p className="text-xl font-semibold">{doctor.name}</p>
                                                <p className="text-xs text-gray-500">{doctor.degree}</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                
                                                <p><span className="font-bold">Specialist:</span> {doctor.specialist}</p>
                                            </div>
                                        </td>
                                        <td>{doctor.chamber}</td>
                                        <td>{doctor.contact}</td>
                                        <td className="text-red-700" alt="Delete"><FaTrash></FaTrash></td>
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

export default DoctorList;