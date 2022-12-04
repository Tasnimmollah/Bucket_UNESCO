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
    <div className="w-screen h-[100px] z-10 " absolute>
      <div className="px-10  w-full h-full">
        <div className="flex justify-between items-end">
          <div className="flex items-end drop-shadow-sm">
            <Link to="/">
              <img className="w-70  h-[50px]" src={logo} />
            </Link>
          </div>
          <ul className="hidden md:flex drop-shadow-sm items-end">
            <li>
              <button className="text-xl ">Featured</button>
            </li>
            <li className="">
              <button className="text-xl ">Log in</button>
            </li>
            <li className="">
              <button className="text-xl ">Sign up</button>
            </li>
            <li>
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
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
