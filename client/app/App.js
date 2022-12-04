import React from "react";
import "../../public/style.css";

import Navbar from "../features/navbar/Navbar";
import AppRoutes from "./AppRoutes";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <div className="text-4xl"> HELLO </div> */}

      <AppRoutes />
    </div>
  );
};

export default App;
