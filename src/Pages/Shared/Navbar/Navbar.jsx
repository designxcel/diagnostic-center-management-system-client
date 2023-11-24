import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

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
        <Link to="/">menu1</Link>
      </li>
      <li>
        <Link to="/dashboard">menu2</Link>
      </li>
      <li>
        <Link to="/menu">menu3</Link>
      </li>
      <li>
        <Link to="/order/salad">menu4</Link>
      </li>

      {/* {user ? (
        <>
          <li>
            <p onClick={handleLogOut}>Logout</p>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )} */}
    </>
  );
  return (
    <div className="navbar fixed z-10 bg-opacity-50 max-w-7xl bg-black text-white px-10">
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
          <Link to="/">BISTRO BOSS</Link>
        </li>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menus}</ul>
      </div>
      <div className="navbar-end">
        <button>profile</button>
        {/* <div className="mr-4">
          <Link to="/dashboard/cart">
            <button className="btn">
              <FaCartPlus className="text-2xl"></FaCartPlus>
              <div className="badge badge-primary">+{cart.length}</div>
            </button>
          </Link>
        </div> */}
        {/* <p className="mr-5">{user?.displayName}</p>
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
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
