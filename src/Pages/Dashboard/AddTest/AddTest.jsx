
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { Helmet } from "react-helmet-async";


const AddTest = () => {
    

      const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const price = form.price.value;
        const category = form.category.value;
        const time = form.time.value;
        const availibility = form.availibility.value;
        const center = form.center.value;
        const details = form.details.value;
        const test = form.test.value;
        const testAdd = {
            name, price, category, time, availibility, center, details, test
        }

        fetch('http://localhost:5000/test',{
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(testAdd)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                form.reset()
                Swal.fire({
                    title: 'Congratulations!',
                    text: 'You have successfully Added a Test service.',
                    imageUrl: 'https://i.ibb.co/smj93SQ/mainLogo.png',
                    imageWidth: 400,
                    imageHeight: 100,
                    imageAlt: 'Custom image',
                  })
            }
        })
      };
    return (
        <div>
            <Helmet>
                <title>TECHMED | Add Test</title>
            </Helmet>
            <div className="">
                <h2 className="uppercase text-5xl font-bold text-center mt-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Add Test</h2>
                <div className="divider max-w-7xl mx-auto"></div>
            </div>
            <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label className="label">
                        <span className="label-text">Test Name</span>
                        </label>
                        <input
                        type="text"
                        placeholder="Enter Test Name"
                        name="name"
                        className="input input-bordered"
                        />
                    </div>
                    <div className="flex  flex-col md:flex-row gap-4">
                        <div className="form-control md:w-1/3">
                            <label className="label">
                            <span className="label-text">Category</span>
                            </label>
                            <input
                            type="text"
                            placeholder="Enter category type"
                            name="category"
                            className="input input-bordered"
                            />
                        </div>
                        <div className="form-control md:w-1/3">
                            <label className="label">
                            <span className="label-text">Center</span>
                            </label>
                            <input
                            type="text"
                            placeholder="Enter chamber name"
                            name="center"
                            className="input input-bordered"
                            />
                        </div>
                        <div className="form-control md:w-1/3">
                            <label className="label">
                            <span className="label-text">Time Slot</span>
                            </label>
                            <input
                            type="text"
                            placeholder="Time Slot"
                            name="time"
                            className="input input-bordered"
                            />
                        </div>
                        
                    </div>
                   
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="form-control w-full">
                            <label className="label">
                            <span className="label-text">Availibility</span>
                            </label>
                            <input
                            type="text"
                            placeholder="Enter available day"
                            name="availibility"
                            className="input input-bordered"
                            />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                            <span className="label-text">Price</span>
                            </label>
                            <input
                            type="text"
                            placeholder="Enter Price"
                            name="price"
                            className="input input-bordered"
                            />
                            
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                            <span className="label-text">Test ID</span>
                            </label>
                            <input
                            type="text"
                            placeholder="Enter Price"
                            name="test"
                            className="input input-bordered"
                            />
                            
                        </div>
                    </div>
                    <div>
                    <label className="label">
                            <span className="label-text">Test Details (if any)</span>
                            </label>
                        <textarea  placeholder="Doctors Details" name="details" className="textarea textarea-bordered textarea-lg w-full " ></textarea>
                    </div>
                    <div>
                        <input type="submit" value="Add Doctor" className="btn bg-cyan-400 btn-block mt-4" />
                    </div>
                </form>
        </div>
    );
};

export default AddTest;