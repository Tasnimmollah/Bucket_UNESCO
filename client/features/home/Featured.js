import React from "react";
import { Link } from "react-router-dom";

const Featured = () => {
  return (
    <div className="px-20 " id="featured">
      <div className="flex justify-between items-center">
        <h1>Featured</h1>
        <Link to="/sites">
          <button className="text-xl text-black font-bold border rounded-xl bg-white px-4 py-2 drop-shadow-lg">
            View All Sites
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Featured;
