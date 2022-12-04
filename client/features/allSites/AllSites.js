import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllSites } from "./allSitesSlice";
import { Link } from "react-router-dom";

//import { useLocation } from "react-router-dom";
// import ReactPaginate from "react-paginate";

const AllSites = () => {
  //let [siteList, setSiteList] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllSites());
  }, []);
  const allSites = useSelector((state) => state.allSites.sites);

  return (
    <div className="pt-40">
      <section>
        <div>
          <section>
            <h1>ALL SITES</h1>
          </section>

          <section>
            <div>
              <div>
                <div>
                  <div>
                    <button>Search by: Country</button>
                    <div>
                      <a href="#"> Canada</a>
                      <a href="#">Mexico</a>
                      <a href="#">United States</a>
                    </div>
                  </div>
                  <div>
                    <button>Search by: Price</button>
                    <div>
                      <a href="#">All</a>
                      <a href="#">Under $25</a>
                      <a
                        // className="dropdown-item"
                        href="#"
                        // onClick={(ev) => filterPriceButton(ev)}
                      >
                        Over $25
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                {allSites
                  ? allSites.map((site) => (
                      <div key={site.id}>
                        <div>
                          <div>
                            <Link
                              to={`/sites/${site.id}`}
                              state={{ siteId: site.id }}
                              style={{ textDecoration: `none` }}
                            >
                              <div>
                                <img src={site.imgUrl} />
                              </div>
                              <h5
                                style={{
                                  color: `gray`,
                                  fontSize: `135%`,
                                }}
                              >
                                {site.name}
                              </h5>
                            </Link>
                            <div
                              style={{ fontSize: `100%`, marginTop: `-15px` }}
                            >
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  : null}
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default AllSites;
