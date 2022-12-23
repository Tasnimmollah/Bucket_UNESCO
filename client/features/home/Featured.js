import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Featured = (props) => {
  const { backColor, setBackColor, fixNav, setFixNav } = props;

  useEffect(() => {
    const changeNav = () => {
      setFixNav(false);
    };
    changeNav();
  }, []);

  return (
    <div className="px-20 pt-32 bg-slate-300" id="featured">
      <div className="py-6 flex justify-between items-center">
        <h1 className="text-8xl">Featured</h1>
        <Link to="/sites">
          <button className="text-2xl text-black font-bold border rounded-xl bg-white px-20 py-2 drop-shadow-md">
            View All Sites
          </button>
        </Link>
      </div>

      <div className=" py-4 pb-32">
        <div className="place-content-stretch grid grid-cols-1 gap-12 mt-8 md:mt-16 md:grid-cols-3">
          <div className=" border bg-white rounded-lg drop-shadow-lg">
            <Link to={`/sites/1`} state={{ siteId: 1 }}>
              <div className="lg:flex flex-col justify-between overflow:hidden hover:underline">
                <img
                  className="object-cover w-full h-70 rounded-lg lg:w-full h-70"
                  src="https://adventures.com/media/4793/canadian-rockies-mountains-nature-forest-lake-peaks-landscape-1.jpg?anchor=center&mode=crop&width=970&height=645&rnd=132622769740000000&quality=80&format=jpg"
                />

                <div className="flex flex-col justify-between py-6 lg:mx-6">
                  <div className="text-xl font-semibold text-black ">
                    Canadian Rocky Mountain Parks
                  </div>
                  <span className="flex flex-row justify-between">
                    <span className="text-md text-black font-medium ">
                      Canada
                    </span>

                    <span className="text-sm text-gray">Natural</span>
                  </span>
                </div>
              </div>
            </Link>
          </div>

          <div className=" border bg-white rounded-lg drop-shadow-lg">
            <Link to={`/sites/61`} state={{ siteId: 61 }}>
              <div className="lg:flex flex-col justify-between overflow:hidden hover:underline">
                <img
                  className="object-cover w-full h-70 rounded-lg lg:w-full h-70"
                  src="https://media.cntraveler.com/photos/5ebeef63f52f4c0911cac483/master/pass/GrandCanyonNationalPark-2020-GettyImages-858637934.jpg"
                />

                <div className="flex flex-col justify-between py-6 lg:mx-6">
                  <div className="text-xl font-semibold text-black ">
                    Grand Canyon National Park
                  </div>
                  <span className="flex flex-row justify-between">
                    <span className="text-md text-black font-medium ">
                      United States of America
                    </span>

                    <span className="text-sm text-gray">Natural</span>
                  </span>
                </div>
              </div>
            </Link>
          </div>

          <div className=" border bg-white rounded-lg drop-shadow-lg">
            <Link to={`/sites/48`} state={{ siteId: 48 }}>
              <div className="lg:flex flex-col justify-between overflow:hidden hover:underline">
                <img
                  className="object-cover w-full h-70 rounded-lg lg:w-full h-70"
                  src="https://destinoriviera.com/wp-content/uploads/2020/04/marv-watson-UfK0P6WygEE-unsplash-scaled.jpg"
                />

                <div className="flex flex-col justify-between py-6 lg:mx-6">
                  <div className="text-xl font-semibold text-black ">
                    Chichen-Itza Pre-Hispanic City
                  </div>
                  <span className="flex flex-row justify-between">
                    <span className="text-md text-black font-medium ">
                      Mexico
                    </span>

                    <span className="text-sm text-gray">Natural</span>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
