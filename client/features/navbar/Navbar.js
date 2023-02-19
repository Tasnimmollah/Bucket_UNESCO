import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
//import { logout } from '../../app/store';
import logo from "../../../public/slogo.png";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { Link as LinkScroll } from "react-scroll";

const Navbar = (props) => {
  const { backColor, setBackColor, fixNav, setFixNav, uLog, setULog } = props;

  return (
    <div
      className={`w-screen h-[140px] z-10 fixed px-20 ${
        backColor === true ? `bg-black` : `bg-transparent`
      }`}
    >
      <div className="  w-full h-full ">
        <div className="flex justify-between items-end">
          <div className="flex items-center pb-2 border rounded-xl bg-gray-200 px-4 ">
            <Link to="/">
              <img className="w-70 h-[50px]" src={logo} />
            </Link>
          </div>
          <ul className="hidden md:flex drop-shadow-lg items-end pt-12">
            <li>
              <LinkScroll
                to="featured"
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
              >
                {" "}
                <button className="text-2xl text-white">Featured</button>
              </LinkScroll>
            </li>

            <li className="">
              <LinkScroll
                to="login"
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
              >
                {" "}
                <button className="text-2xl text-white">Log in</button>
              </LinkScroll>
            </li>
            <li className="">
              <LinkScroll
                to="login"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                {" "}
                <button className="text-2xl text-white">Sign up</button>
              </LinkScroll>
            </li>

            <li className="">
              <Link to="/bucket">
                <button className="text-2xl text-white">Bucket</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
