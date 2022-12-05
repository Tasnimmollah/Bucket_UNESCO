import React, { useState } from "react";
import "../../public/style.css";

import Navbar from "../features/navbar/Navbar";
import AppRoutes from "./AppRoutes";
import Footer from "../features/navbar/Footer";

const App = () => {
  const [backColor, setBackColor] = useState(true);
  return (
    <div>
      <Navbar backColor={backColor} setBackColor={setBackColor} />
      {/* <div className="text-4xl"> HELLO </div> */}

      <AppRoutes backColor={backColor} setBackColor={setBackColor} />
      <Footer />
    </div>
  );
};

export default App;
