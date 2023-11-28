import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaCartPlus } from "react-icons/fa";
import UseCart from "../../../Hooks/UseCart";
import UseAdmin from "../../../Hooks/UseAdmin";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = UseCart()
  const [isAdmin] = UseAdmin()

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const menus = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/test">All Test</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      {
        user && isAdmin && <li><Link to="/dashboard/adminHome">Dashboard</Link></li>
      }
      {
        user && !isAdmin && <li><Link to="/dashboard/userProfile">Dashboard</Link></li>
      }
      {user ?  
        <>
          <li>
              <p onClick={handleLogOut}>Logout</p>
          </li>
        </>
        : 
        <li>
          <Link to="/login">Login</Link>
        </li>}

      {/* {user ? 
        <>
          <li>
            <p onClick={handleLogOut}>Logout</p>
          </li>
        </>
       : 
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      } */}
    </>
  );
  return (
    <div className="navbar w-full bg-white text-gray-700 px-10 h-36">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menus}
          </ul>
        </div>
        <li className="list-none text-xl font-bold">
          <Link to="/">TECH<span className="text-blue-700">MED</span></Link>
        </li>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menus}</ul>
      </div>
      <div className="navbar-end">
        
        <div className="mr-4">
          {user? <Link to="/dashboard/cart">
            <button className="flex gap-4 items-center bg-cyan-400 px-4 py-2 rounded-lg">
              <FaCartPlus className="text-2xl text-white"></FaCartPlus>
              <div className="badge badge-ghost">+{cart.length}</div>
            </button>
          </Link> : ''}
        </div>
        <p className="mr-5 text-black">{user?.displayName}</p>
        <div className="avatar">
          <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            {user ? (
              <>
                <img src={user?.photoURL} />
              </>
            ) : (
              <>
                <img src="https://i.ibb.co/8j12twz/istockphoto-1300845620-612x612.jpg" />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
