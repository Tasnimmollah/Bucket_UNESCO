import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
//import { logout } from '../../app/store';
import logo from "../../../public/slogo.png";
import bucket from "../../../public/bucket.png";

const Navbar = () => {
  // const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const logoutAndRedirectHome = () => {
  //   dispatch(logout());
  //   navigate('/login');
  // };

  return (
    // FIX NAVBAR BY ADDING fixed
    <div className="w-screen h-[100px] z-10  fixed">
      <div className="px-20  w-full h-full items-end">
        <div className="flex justify-between items-end">
          <div className="flex items-end drop-shadow-sm pb-2">
            <Link to="/">
              <img className="w-70  h-[50px]" src={logo} />
            </Link>
          </div>
          <ul className="hidden md:flex drop-shadow-lg items-end pt-12">
            <li>
              <button className="text-2xl text-white">Featured</button>
            </li>
            <li className="">
              <button className="text-2xl text-white">Log in</button>
            </li>
            <li className="">
              <button className="text-2xl text-white">Sign up</button>
            </li>
            <li className="">
              <button className="text-2xl text-white">Bucket</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

{
  /* <li>
<div>
  <button>
    <Link to="/">
      <img
        className="w-50 h-[40px] hover:scale-110 "
        src={bucket}
      />
    </Link>
  </button>
</div>
</li> */
}
