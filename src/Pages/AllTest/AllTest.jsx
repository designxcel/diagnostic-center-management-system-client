import React from "react";
import { Helmet } from "react-helmet-async";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { FaArrowRight, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllTest = () => {
  const axiosPublic = UseAxiosPublic();
  const { data: tests = [] } = useQuery({
    queryKey: ["tests"],
    queryFn: async () => {
      const res = await axiosPublic.get("/test");
      return res.data;
    },
  });
  return (
    <div>
      <Helmet>
        <title>TECHMED | TEST</title>
      </Helmet>
      <div className="">
        <h2 className="uppercase text-5xl font-bold text-center mt-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">All test</h2>
        <div className="divider max-w-7xl mx-auto"></div>
      </div>
      <div className="p-20">
        <div className="overflow-x-auto">
          <table className="table table-md">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Category</th>
                <th>Diagnostic Center</th>
                <th>Price</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
                {
                    tests.map((test, index) => 
                            <tr key={test._id} test={test}>
                            <th>{index + 1}</th>
                            <td>{test.name}</td>
                            <td>{test.category}</td>
                            <td>{test.center}</td>
                            <td>{test.price}</td>
                            <td>
                              <Link to={`/testdetails/${test._id}`}>
                                <button><FaEye></FaEye></button>
                              </Link>
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

export default AllTest;
