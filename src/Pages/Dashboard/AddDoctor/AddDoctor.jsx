import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddDoctor = () => {
    const axiosSecure = UseAxiosSecure();
    const axiosPublic = UseAxiosPublic();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();


      const onSubmit = async(data) => {
        
        // console.log(data)
        const imageFile = {image:data.image[0]}
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type':'multipart/form-data'
            }
            
        })
        if(res.data.success){
            const drInfo = {
                name: data.name,
                image: res.data.data.display_url,
                degree: data.degree,
                specialist: data.specialist,
                chamber: data.chamber,
                contact: data.contact
            }
            const doctorAdd = await axiosSecure.post('/drlists', drInfo)
            if(doctorAdd.data.insertedId){
                            reset();
                          Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Doctor created successfully",
                            showConfirmButton: false,
                            timer: 1500,
                        });
            }
        }
      };
    return (
        <div>
            <Helmet>
                <title>TECHMED | Add Doctor</title>
            </Helmet>
            <div className="">
                <h2 className="uppercase text-5xl font-bold text-center mt-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Add Doctor</h2>
                <div className="divider max-w-7xl mx-auto"></div>
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <label className="label">
                        <span className="label-text">Doctor Name</span>
                        </label>
                        <input
                        type="text"
                        placeholder="Enter Doctor Name"
                        name="name"
                        {...register("name", { required: true })}
                        className="input input-bordered"
                        />
                        {errors.name && (
                        <span className="text-red-500 mt-2">Name is required</span>
                        )}
                    </div>
                    <div className="flex  flex-col md:flex-row gap-4">
                        <div className="form-control md:w-1/3">
                            <label className="label">
                            <span className="label-text">Doctor Degree</span>
                            </label>
                            <input
                            type="text"
                            placeholder="Enter Doctor Degree"
                            name="degree"
                            {...register("degree", { required: true })}
                            className="input input-bordered"
                            />
                            {errors.degree && (
                            <span className="text-red-500 mt-2">Degree is required</span>
                            )}
                        </div>
                        <div className="form-control md:w-1/3">
                            <label className="label">
                            <span className="label-text">Doctor Speciality</span>
                            </label>
                            <input
                            type="text"
                            placeholder="Enter Doctor Speciality"
                            name="specialist"
                            {...register("specialist", { required: true })}
                            className="input input-bordered"
                            />
                            {errors.specialist && (
                            <span className="text-red-500 mt-2">Speciality is required</span>
                            )}
                        </div>
                        <div className="form-control md:w-1/3">
                                    <label className="label">
                                    <span className="label-text">Doctor Image</span>
                                    </label>
                                    
                                    <input {...register("image", {required: true})} type="file" className="file-input file-input-bordered w-full" />
                                    {errors.image && (
                                    <span className="text-red-500 mt-2">Images is required</span>
                                    )}
                            </div>
                    </div>
                   
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="form-control w-full">
                            <label className="label">
                            <span className="label-text">Doctor Chamber</span>
                            </label>
                            <input
                            type="text"
                            placeholder="Enter Doctor Chamber Name"
                            name="chamber"
                            {...register("chamber", { required: true })}
                            className="input input-bordered"
                            />
                            {errors.chamber && (
                            <span className="text-red-500 mt-2">Chamber name is required</span>
                            )}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                            <span className="label-text">Doctor Contact Point</span>
                            </label>
                            <input
                            type="text"
                            placeholder="Enter Doctor Contact"
                            name="contact"
                            {...register("contact", { required: true })}
                            className="input input-bordered"
                            />
                            {errors.contact && (
                            <span className="text-red-500 mt-2">Contact number is required</span>
                            )}
                        </div>
                    </div>
                    <div>
                    <label className="label">
                            <span className="label-text">Doctor Details (if any)</span>
                            </label>
                        <textarea {...register("details")} placeholder="Doctors Details" name="details" className="textarea textarea-bordered textarea-lg w-full " ></textarea>
                    </div>
                    <div>
                        <input type="submit" value="Add Doctor" className="btn bg-cyan-400 btn-block mt-4" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;