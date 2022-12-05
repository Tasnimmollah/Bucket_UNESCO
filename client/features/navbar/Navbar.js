import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
//import { logout } from '../../app/store';
import logo from "../../../public/slogo.png";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const Navbar = () => {
  // const provider = new GoogleAuthProvider();
  // provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
  // const auth = getAuth();

  // function signInwithGoogle() {
  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       // This gives you a Google Access Token. You can use it to access the Google API.
  //       const credential = GoogleAuthProvider.credentialFromResult(result);
  //       const token = credential.accessToken;
  //       // The signed-in user info.
  //       const user = result.user;
  //       console.log(user);
  //     })
  //     .catch((error) => {
  //       // Handle Errors here.
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // The email of the user's account used.
  //       const email = error.customData.email;
  //       // The AuthCredential type that was used.
  //       const credential = GoogleAuthProvider.credentialFromError(error);
  //     });
  // }

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

            {/* <li className="">
              <button
                onClick={signInwithGoogle}
                className="text-2xl text-white"
              >
                Google Sign in
              </button>
            </li> */}

            <li className="">
              <Link to="/">
                <button className="text-2xl text-white">Log in</button>
              </Link>
            </li>
            <li className="">
              <Link to="/">
                <button className="text-2xl text-white">Sign up</button>
              </Link>
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
