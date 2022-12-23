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

  return (
    <div className="px-20 pt-14 pb-32">
      <div>
        {tours && tours.length ? (
          tours.map((tour) => (
            <div className="pb-10 max-w-3xl" key={tour.id}>
              <div className="rounded overflow-hidden shadow-lg">
                <img className="w-full" src={tour.imgUrl} />

                <div className="px-6 py-4">
                  <div className="mb-2 flex flex-row justify-between items-end">
                    <span className="font-bold text-xl ">{tour.title}</span>
                    <span>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={tour.bookingUrl}
                      >
                        <button className="text-lg text-white font-bold border rounded-xl bg-green-900 px-20 py-2 drop-shadow-md">
                          Book Now
                        </button>
                      </a>
                    </span>
                  </div>

                  <p className="text-gray-700 text-base">{tour.description}</p>
                </div>

                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {tour.reviewAvg} Stars
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {tour.reviewCount} Reviews
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {tour.duration}
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    From ${tour.priceFrom}
                  </span>
                </div>
              </div>
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
