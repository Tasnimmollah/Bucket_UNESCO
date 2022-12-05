import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchAllTours } from "./toursSlice";

//Glacier Bay  --- siteId 17,    destId 5420
// Chichen Itza - siteId 50,       destId 50526
//Grand Canyon National Park  ---- siteId 61,      destId 815

const ViewTours = (props) => {
  const { siteId, tours } = props;

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchAllTours(siteId));
  // }, []);

  // const allTours = useSelector((state) => state.allTours.tours);
  console.log("VIEWTOURS COMP", tours);
  return (
    <div className="px-20 text-4xl">
      <div>
        ALL TOURS POSTED BELOW
        {tours && tours.length ? (
          tours.map((tour) => (
            <div className="text-black" key={tour.id}>
              <a target="_blank" rel="noreferrer" href={tour.bookingUrl}>
                <button className="text-black"> Book Now </button>
              </a>
              <div>{tour.title}</div>
              <div>{tour.description}</div>
              <div>{tour.reviewCount} Reviews</div>
              <div>{tour.reviewAvg} Stars</div>
              <div>{tour.duration}</div>
              <div>From ${tour.priceFrom}</div>
              <img
                className=""
                src={tour.imgUrl}
                style={{
                  height: `32rem`,
                }}
              />
            </div>
          ))
        ) : (
          <div>No results match your criteria</div>
        )}
      </div>
    </div>
  );
};

export default ViewTours;
