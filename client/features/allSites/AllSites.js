import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllSites } from "./allSitesSlice";
import { Link } from "react-router-dom";

//import { useLocation } from "react-router-dom";
// import ReactPaginate from "react-paginate";

const AllSites = (props) => {
  const { backColor, setBackColor } = props;

  useEffect(() => {
    const changeNav = () => {
      setBackColor(true);
    };
    changeNav();
  }, []);

  //let [siteList, setSiteList] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(fetchAllSites());
  }, []);
  const allSites = useSelector((state) => state.allSites.sites);

  const [filtering, setFiltering] = useState("none");

  const filterMethods = {
    none: { method: (elem) => elem },
    Canada: {
      method: (elem) => elem.country === "Canada",
    },
    Mexico: {
      method: (elem) => elem.country === "Mexico",
    },
    UnitedStates: {
      method: (elem) => elem.country === "United States of America",
    },
    Natural: {
      method: (elem) => elem.category === "Natural",
    },
    Cultural: {
      method: (elem) => elem.category === "Cultural",
    },
    Mixed: {
      method: (elem) => elem.category === "Mixed",
    },
  };

  return (
    <div className="px-20 pt-40">
      <section>
        <div>
          <section>
            <div>
              <div>
                <div>
                  <div className="flex flex-row justify-between items-center py-6">
                    <h1 className="text-8xl">Sites</h1>
                    <div>
                      <span className="pl-6 text-xl">
                        Filter by country{"        "}
                        <select
                          className="border border-gray-500 rounded-lg text-center w-40"
                          defaultValue={"DEFAULT"}
                          onChange={(e) => setFiltering(e.target.value)}
                        >
                          <option
                            className="text-white"
                            value="DEFAULT"
                            disabled
                          >
                            none
                          </option>
                          <option value="Canada">Canada</option>
                          <option value="Mexico">Mexico</option>
                          <option value="UnitedStates">United States</option>
                        </select>
                      </span>
                      <span className="pl-6 text-xl">
                        Filter by category{"        "}
                        <select
                          className="text-center border border-gray-500 rounded-lg w-40"
                          defaultValue={"DEFAULT"}
                          onChange={(e) => setFiltering(e.target.value)}
                        >
                          <option
                            className="text-white"
                            value="DEFAULT"
                            disabled
                          >
                            none
                          </option>
                          <option value="Natural">Natural</option>
                          <option value="Cultural">Cultural</option>
                          <option value="Mixed">Mixed</option>
                        </select>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className=" py-4 pb-32">
                <div className="grid grid-cols-1 gap-12 mt-8 md:mt-16 md:grid-cols-3 ">
                  {allSites
                    ? [...allSites]
                        .filter(filterMethods[filtering].method)
                        .map((site) => (
                          <div
                            className=" border border-gray-200 rounded-lg drop-shadow-lg"
                            key={site.id}
                          >
                            <Link
                              to={`/sites/${site.id}`}
                              state={{ siteId: site.id }}
                            >
                              <div className="lg:flex flex-col justify-between overflow-hidden hover:underline">
                                <img
                                  className="object-cover w-full h-64 rounded-lg lg:w-full h-66"
                                  src={site.imgUrl}
                                />

                                <div className="flex flex-col justify-between py-6 lg:mx-6">
                                  <div className="text-xl font-semibold text-black ">
                                    {site.name}
                                  </div>
                                  <span className="flex flex-row justify-between">
                                    <span className="text-md text-black font-medium ">
                                      {site.country}
                                    </span>

                                    <span className="text-sm text-gray">
                                      {site.category}
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </Link>
                          </div>
                        ))
                    : null}
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default AllSites;
