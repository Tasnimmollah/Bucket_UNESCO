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

const SingleSite = () => {
  const dispatch = useDispatch();
  const { siteId } = useParams();

  // const bucket = useSelector((state) => state.bucket.bucket);

  const capitalizeAll = (str) => {
    return str?.toUpperCase();
  };

  // const addToBucket = (ev, siteId) => {
  //   let init = false;
  //   for (let i = 0; i < bucket.length; i++) {
  //     if (bucket[i].siteId == siteId) {
  //       console.log("site IDs", bucket[i].siteId, siteId);
  //       const quantityInCart = cart[i].quantityInCart;
  //       dispatch(incrementItemInCart({ productId, quantityInCart }));
  //       init = true;
  //     }
  //   }
  //   !init ? dispatch(addItemToBucket({ siteId })) : null;
  //   dispatch(fetchBucket());
  // };

  // () => {
  //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  //   dispatch(fetchSingleSite(siteId));
  // },
  //   [dispatch, quantityInCart];
  useEffect(() => {
    dispatch(fetchSingleSite(siteId));
  }, []);

  const site = useSelector((state) => state.singleSite.aSite);
  const { name, category, country, imgUrl, description, latitude, longitude, destination } =
    site;

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
                      <ViewTours name={name} siteId={siteId} destination={destination}/>
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
