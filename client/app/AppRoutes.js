import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
// import AuthForm from '../features/auth/AuthForm';
import Home from "../features/home/Home";
import AllSites from "../features/allSites/AllSites";
//import { me } from './store';

/**
 * COMPONENT
 */

const AppRoutes = () => {
  // const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(me());
  // }, []);

  return (
    <div>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sites" element={<AllSites />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;