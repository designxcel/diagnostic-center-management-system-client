import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";


const PaymentHistory = () => {
    const {user} = useContext(AuthContext)
    const axiosSecure = UseAxiosSecure()
    

    const { data: payments = [] } = useQuery({
        queryKey: ["payments"],
        queryFn: async () => {
          const res = await axiosSecure.get(`/payments/${user.email}`);
          return res.data;
        },
      });
      const totalPrice = payments.reduce((total, item) => total + item.price, 0)
    return (
        <div>
            <div className="">
                <h2 className="uppercase text-5xl font-bold text-center mt-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Payment History</h2>
                <div className="divider max-w-7xl mx-auto"></div>
            </div>
            <div className="flex justify-evenly items-center mb-10">
                <h2 className="text-xl font-bold">Total History of Payments: {payments.length}</h2>
                <h2 className="text-xl font-bold">Total Purchase so far: {totalPrice}</h2>
            </div>
            <div>
            <div className="overflow-x-auto">
          <table className="table table-md">
            <thead>
              <tr>
                <th>#</th>
                <th>Transaction Id</th>
                <th>Email</th>
                <th>Price</th>
                <th>Date</th>
                <th>Status of Order</th>
              </tr>
            </thead>
            <tbody>
                {
                    payments.map((payment, index) => 
                            <tr key={payment._id}>
                            <th>{index + 1}</th>
                            <td>{payment.transactionId}</td>
                            <td>{payment.email}</td>
                            <td>{payment.price}</td>
                            <td>{payment.date}</td>
                            <td>{payment.status}</td>
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

export default PaymentHistory;