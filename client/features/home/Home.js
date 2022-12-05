import React, { useEffect } from "react";
//import "../../../public/style.css";
// import { useSelector } from 'react-redux';
import Hero from "./Hero.js";
import Featured from "./Featured.js";

/**
 * COMPONENT
 */
const Home = (props) => {
  const { backColor, setBackColor } = props;
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

  // const username = useSelector((state) => state.auth.me.username);

  return (
    <div>
      <Hero backColor={backColor} setBackColor={setBackColor} />
      <Featured />
    </div>
  );
};

export default Home;
