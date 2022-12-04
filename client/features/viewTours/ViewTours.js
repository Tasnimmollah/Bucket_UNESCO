import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchAllTours } from "./toursSlice";

const ViewTours = (props) => {
  const { siteId, destination } = props;
  //

//Glacier Bay  --- siteId 17,    destId 5420
// Chichen Itza - siteId 48,       destId 50526
//Grand Canyon National Park  ---- siteId 62,      destId 815

useEffect(()=> {
  dispatch(fetchAllTours())
}, [])

const allTours = useSelector((state)=> state.allTours.tours)
// productUrl, title, images[0].variants[11], description, reviews.totalReviews,reviews.combinedAverageRating, pricing.summay.fromPrice

  return <div className="text-4xl">Here are the tours</div>;
};

export default ViewTours;


// products/search
//  takes "destination": "number as string"
