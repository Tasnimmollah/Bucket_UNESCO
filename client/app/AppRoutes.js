import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
// import AuthForm from '../features/auth/AuthForm';
import Home from "../features/home/Home";
import AllSites from "../features/allSites/AllSites";
import SingleSite from "../features/singleSite/SingleSite";
import Bucket from "../features/bucket/Bucket";
//import { me } from './store';

/**
 * COMPONENT
 */

const AppRoutes = (props) => {
  const { backColor, setBackColor } = props;
  // const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(me());
  // }, []);

  return (
    <div>
      <Routes>
        <Route
          path="/*"
          element={<Home backColor={backColor} setBackColor={setBackColor} />}
        />
        <Route
          path="/home"
          element={<Home backColor={backColor} setBackColor={setBackColor} />}
        />
        <Route path="/sites" element={<AllSites backColor={backColor} setBackColor={setBackColor} />} />
        <Route path="/sites/:siteId" element={<SingleSite backColor={backColor} setBackColor={setBackColor} />} />
        <Route
          path="/bucket"
          element={<Bucket backColor={backColor} setBackColor={setBackColor} />}
        />
      </Routes>
    </div>
  );
};

export default AppRoutes;
