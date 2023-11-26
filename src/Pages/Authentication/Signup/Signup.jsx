import { useContext, useEffect, useState } from "react";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import "./signup.css"
import Swal from "sweetalert2";


const Signup = () => {
    const [districts, setDistricts] = useState([])
    const [upazillas, setUpazillas] = useState([])
    const [bloods, setBloods] = useState([])
    useEffect(() => {
        fetch('districts.json')
        .then(res => res.json())
        .then(data => {
            setDistricts(data)
        })
    },[])

    useEffect(() => {
        fetch('upazillas.json')
        .then(res => res.json())
        .then(data => {
            setUpazillas(data)
        })
    },[])

    useEffect(() => {
        fetch('blood.json')
        .then(res => res.json())
        .then(data => {
            setBloods(data)
        })
    },[])

    const axiosPublic = UseAxiosPublic();
  const { createUser, updateUser, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleGoogleSignin = () =>{
    googleSignIn()
    .then(result => {
        console.log(result.user)
    })
  }

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      updateUser(data.name, data.photoURL)
        .then(() => {
            // console.log(loggedUser)
          const userInfo = {
            name: data.name,
            email: data.email,
            blood: data.blood,
            district:data.district,
            upazilla:data.upazilla,
            avatar:data.photoURL
          }

          axiosPublic.post('/users', userInfo)
          .then(res =>{
            if(res.data.insertedId){
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User created successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/login");
            }
          })
          
        })
        .catch((error) => console.log(error));
    });
  };
  return (
    <>
      <Helmet>
        <title>TECHMED | SignUp</title>
      </Helmet>
      <div className="signupbg">
        <div className="h-screen flex justify-evenly items-center max-w-7xl mx-auto">
          {/* <div className="w-1/2">
            <img className="rounded-lg" src={teamImg} alt="" />
          </div> */}
          <div className="card glass w-1/2">
            <h2 className="text-center text-3xl font-bold mt-10">TECHMED | SIGNUP</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  {...register("name", { required: true })}
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-500 mt-2">Name is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  name="photo"
                  {...register("photoURL", { required: true })}
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className="text-red-500 mt-2">
                    Photo url is required
                  </span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  {...register("email", { required: true })}
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-500 mt-2">Email is required</span>
                )}
              </div>

              <div className="flex gap-4">
                <div className="form-control">
                    <label className="label">
                    <span className="label-text">Blood Group</span>
                    </label>
                    <select {...register("blood")} className="select select-bordered w-full">
                        <option  disabled selected>Select Your Blood Group</option>
                            {
                                bloods.map(blood =><option key={blood.id}>{blood.group}</option>)
                            }
                    </select>
                    {errors.blood && (
                    <span className="text-red-500 mt-2">Blood input is required</span>
                    )}
                </div>
                <div className="form-control">
                    <label className="label">
                    <span className="label-text">District</span>
                    </label>
                    <select {...register("district")} className="select select-bordered w-full">
                        <option  disabled selected>Select Your District</option>
                            {
                                districts.map(district =><option key={district.id}>{district.name}</option>)
                            }
                    </select>
                    {errors.district && (
                    <span className="text-red-500 mt-2">District input is required</span>
                    )}
                </div>

                <div className="form-control">
                    <label className="label">
                    <span className="label-text">Upazilla</span>
                    </label>
                    <select {...register("upazilla")} className="select select-bordered w-full">
                        <option  disabled selected>Select Your Upazilla</option>
                            {
                                upazillas.map(upazilla =><option key={upazilla.id}>{upazilla.name}</option>)
                            }
                    </select>
                    {errors.district && (
                    <span className="text-red-500 mt-2">District input is required</span>
                    )}
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-500 mt-2">
                    Password is required
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-500 mt-2">
                    Password must be 6 characters
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-500 mt-2">
                    Password not exceeded 20 characters
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-500 mt-2">
                    Password must have an uppecase a lowercase a special
                    character and numbers
                  </span>
                )}
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn bg-cyan-400 border-none"
                  type="submit"
                  value="Signup"
                />
              </div>
              <p>
                Already Have An Account?
                <Link
                  to="/login"
                  className="text-gray-700 underline font-semibold"
                >
                  Login
                </Link>
              </p>
            </form>
                <div className="divider w-2/3 mx-auto">OR</div>
            <div className="p-6 flex justify-center">
                <button onClick={handleGoogleSignin} className="btn bg-cyan-400 border-none btn-block">Google Signin</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;