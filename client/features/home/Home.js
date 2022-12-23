import React, { useEffect } from "react";
//import "../../../public/style.css";
// import { useSelector } from 'react-redux';
import Hero from "./Hero.js";
import Featured from "./Featured.js";
import Login from "../navbar/Login.js";

/**
 * COMPONENT
 */
const Home = (props) => {
  const { backColor, setBackColor, fixNav, setFixNav, uLog, setULog } = props;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    // const changeColor = () => {
    //   if (window.scrollY >= 90) {
    //     setBackColor(true);
    //   } else if (window.location.href === "/" && window.scrollY < 90) {
    //     setBackColor(false);
    //   }
    // };
    // window.addEventListener("scroll", changeColor);
  }, []);


  return (
    <div>
      <Hero backColor={backColor} setBackColor={setBackColor} />
      <Featured
        backColor={backColor}
        setBackColor={setBackColor}
        fixNav={fixNav}
        setFixNav={setFixNav}
      />
      <Login
        backColor={backColor}
        setBackColor={setBackColor}
        fixNav={fixNav}
        setFixNav={setFixNav}
        uLog={uLog}
        setULog={setULog}
      />
    </div>
  );
};

export default Home;
