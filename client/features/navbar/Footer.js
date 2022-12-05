import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../public/slogo.png";

const Footer = () => {
  return (
    <div className="w-screen h-[130px] z-10 ">
      <footer className="p-4 bg-white shadow md:px-20 md:py-8 dark:bg-black ">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center mb-4 sm:mb-0 pb-2 border rounded-xl bg-gray-200 px-4">
            <Link to="/">
              <img className="w-70  h-[50px]" src={logo} />
            </Link>
          </div>
          <ul className="flex flex-wrap items-center mb-6 sm:mb-0">
            <li>
              <a
                href="#"
                className="mr-4 text-sm text-white hover:text-light  md:mr-6 dark:text-gray-400"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="mr-4 text-sm text-white hover:text-light md:mr-6 dark:text-gray-400"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="mr-4 text-sm text-white hover:text-light md:mr-6 dark:text-gray-400"
              >
                Licensing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-white hover:text-light dark:text-gray-400"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-white sm:text-center dark:text-gray-400">
          © 2022{" "}
          <a
            href="https://flowbite.com"
            target="_blank"
            className="hover:text-light"
          >
            Bucket UNESCO™
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </div>
  );
};

export default Footer;
