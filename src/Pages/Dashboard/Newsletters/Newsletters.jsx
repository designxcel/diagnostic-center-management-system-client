import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";
import { Helmet } from "react-helmet-async";

const Newsletters = () => {
    const axiosPublic = UseAxiosPublic()
    const { data: newsletter = [] } = useQuery({
        queryKey: ["newsletter"],
        queryFn: async () => {
          const res = await axiosPublic.get("/contact");
          return res.data;
        },
      });
    return (
        <div>
            <Helmet>
                <title>TECHMED | Newsletter</title>
            </Helmet>
            <div className="">
                <h2 className="uppercase text-5xl font-bold text-center mt-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Newsletter</h2>
                <div className="divider max-w-7xl mx-auto"></div>
            </div>
            <div className="overflow-x-auto">
                        <table className="table table-zebra">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Details</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                newsletter.map((letter, index) => 
                                    <tr>
                                        <th>{index + 1}</th>
                                        <td>
                                            <p className="text-xl font-semibold">{letter.name}</p>
                                        </td>
                                        <td>
                                            <p>{letter.email}</p> 
                                        </td>
                                        <td>{letter.details}</td>
                                        
                                    </tr>
                                    )
                            }
                            
                            </tbody>
                        </table>
            </div>
            </div>
    );
};

export default Newsletters;