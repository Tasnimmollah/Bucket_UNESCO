import React from "react";
//import "../../../public/style.css";
// import { useSelector } from 'react-redux';
import Hero from "./Hero.js";
import Featured from "./Featured.js";

/**
 * COMPONENT
 */
const Home = (props) => {
  // const username = useSelector((state) => state.auth.me.username);

  return (
    <div>
      <Hero />
<Featured/>
    </div>
  );
};

export default Home;
