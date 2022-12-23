import React, { useState } from "react";
import "../../public/style.css";

import Navbar from "../features/navbar/Navbar";
import AppRoutes from "./AppRoutes";
import Footer from "../features/navbar/Footer";

const App = () => {
  const [backColor, setBackColor] = useState(true);
  const [fixNav, setFixNav] = useState(true);
  const [uLog, setULog] = useState(false);

  return (
    <div>
      <Navbar
        backColor={backColor}
        setBackColor={setBackColor}
        fixNav={fixNav}
        setFixNav={setFixNav}
        uLog={uLog}
        setULog={setULog}
      />
      {/* <div className="text-4xl"> HELLO </div> */}

      <AppRoutes
        backColor={backColor}
        setBackColor={setBackColor}
        fixNav={fixNav}
        setFixNav={setFixNav}
        uLog={uLog}
        setULog={setULog}
      />
      <Footer />
    </div>
  );
};

export default App;
