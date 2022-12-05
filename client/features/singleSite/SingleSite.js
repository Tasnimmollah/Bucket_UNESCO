import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
// import {
//   addItemToCart,
//   incrementItemInCart,
//   fetchCart,
// } from "../cart/cartSlice";
import { fetchSingleSite } from "./singleSiteSlice";
import ViewTours from "../viewTours/ViewTours";
// import { fetchAllTours } from "../viewTours/toursSlice";
import { fetchBucket } from "../bucket/bucketSlice";

const SingleSite = () => {
  const dispatch = useDispatch();
  const { siteId } = useParams();
  const [displayTours, setDisplayTours] = useState(false);
  useEffect(() => {
    dispatch(fetchBucket());
  }, []);

  const bucketArr = useSelector((state) => state.bucket.bucket);

  const capitalizeAll = (str) => {
    return str?.toUpperCase();
  };

  const addToBucket = (ev, site) => {
    // let init = false;
    for (let i = 0; i < bucketArr.length; i++) {
      if (bucketArr[i].id == site.id) {
        alert("This site is already in your bucket!");

        // init = true;
      } else {
        dispatch(incrementItemInCart({ productId, quantityInCart }));
      }
    }
    // !init ? dispatch(addItemToBucket({ siteId })) : null;
    // dispatch(fetchBucket());
  };

  // () => {
  //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  //   dispatch(fetchSingleSite(siteId));
  // },
  //   [dispatch, quantityInCart];
  useEffect(() => {
    dispatch(fetchSingleSite(siteId));
  }, []);

  const buttonClicked = async () => {
    setDisplayTours((current) => !current);
  };

  const site = useSelector((state) => state.singleSite.aSite);
  const {
    name,
    category,
    country,
    imgUrl,
    description,
    latitude,
    longitude,
    destination,
    tours,
  } = site;
  console.log("COMPONENT", site);
  return (
    <div className="pt-40">
      <div>
        <div>
          <section>
            <h1
              style={{
                textAlign: `center`,
                backgroundColor: `#F6BD60`,
              }}
            >
              {capitalizeAll(name)}
            </h1>
          </section>
          <div className="">
            <div className="">
              <div className="">
                <img
                  className=""
                  src={imgUrl}
                  style={{
                    height: `32rem`,
                  }}
                />
                <div>
                  <button
                    className="text-black"
                    onClick={(ev) => {
                      addToBucket(ev, site);
                    }}
                  >
                    ADD TO BUCKET
                  </button>
                </div>
              </div>
              <div className="">
                <div className="">
                  <h4 style={{ marginTop: `10%` }}>{description}</h4>
                  <h3
                    style={{
                      marginTop: `3%`,
                      fontWeight: "bolder",
                      alignItems: "center",
                    }}
                  >
                    Category: {category}
                  </h3>
                  <h4
                    style={{
                      marginTop: `2%`,
                      fontWeight: "bold",
                    }}
                  >
                    Country: {country}
                  </h4>

                  <section>
                    <div className="text-black p-16">
                      <button className="text-black" onClick={buttonClicked}>
                        {" "}
                        Explore {name}
                      </button>
                      {/* <ViewTours siteId={siteId} tours={tours} /> */}
                      {displayTours === true && tours.length ? (
                        <ViewTours siteId={siteId} tours={tours} />
                      ) : null}
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleSite;
