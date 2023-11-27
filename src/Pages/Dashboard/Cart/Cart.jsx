import { Helmet } from "react-helmet-async";
import UseCart from "../../../Hooks/UseCart";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { Link } from "react-router-dom";


const Cart = () => {
    const [cart, refetch] = UseCart()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    const axiosSecure = UseAxiosSecure()

    const handleDelete = id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                .then(res => {
                    if(res.data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
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
                <title>TECHMED | Cart</title>
            </Helmet>
            <div className="">
                <h2 className="uppercase text-5xl font-bold text-center mt-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Cart Items</h2>
                <div className="divider max-w-7xl mx-auto"></div>
            </div>
            <div className="flex justify-evenly text-xl font-bold mb-10">
                <h2>Total Test Items: {cart.length}</h2>
                <p>Total Amount: {totalPrice} BDT</p>
            </div>
            <div>
            <div className="overflow-x-auto">
            <table className="table table-zebra">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name of Test</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    cart.map((item, index) => 
                        <tr key={cart._id}>
                            <th>{index + 1}</th>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td className="text-red-700">
                                <button onClick={() => handleDelete(item._id)}><FaTrash></FaTrash></button>
                            </td>
                        </tr>
                        )
                }
                </tbody>
                
            </table>
            <div className="flex justify-end mt-10">
                {cart.length ? <Link to="/dashboard/payment">
                    <button className="btn bg-cyan-400">Pay</button>
                </Link> :
                <button disabled className="btn bg-cyan-400">Pay</button>
                
                }
             </div>
            </div>
            </div>
        </div>
    );
};

export default Cart;