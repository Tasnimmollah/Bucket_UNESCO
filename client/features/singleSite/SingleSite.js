import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchSingleSite } from "./singleSiteSlice";
import ViewTours from "../viewTours/ViewTours";
import { addToBucket } from "../bucket/bucketSlice";

const SingleSite = (props) => {
  const { backColor, setBackColor } = props;

  useEffect(() => {
    const changeNav = () => {
      setBackColor(true);
    };
    changeNav();
  }, []);
  const dispatch = useDispatch();
  const { siteId } = useParams();
  const [displayTours, setDisplayTours] = useState(false);

  const capitalizeAll = (str) => {
    return str?.toUpperCase();
  };

  const handleAdd = (ev) => {
    ev.preventDefault();
    console.log("HANDLE ADD SITE ID", siteId);
    dispatch(addToBucket(siteId));
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
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

  return (
    <div className="px-20 pt-48 ">
      <h1 className="text-6xl py-8">{name}</h1>
      <hr />
      <div className="pb-32">
        <div className="flex justify-between my-12">
          <div className="flex flex-row justify-between">
            <img className="w-1/2 rounded-lg" src={imgUrl} />

            <div className="flex flex-col justify-evenly  w-full lg:w-1/2 bg-white pl-5 rounded-lg lg:rounded-l-none">
              <div className="pl-52">
                <button
                  onClick={(ev) => handleAdd(ev)}
                  className="text-2xl text-black font-bold border rounded-xl bg-white px-16 py-2 drop-shadow-md"
                >
                  Add To Bucket
                </button>
              </div>
              <div className="pl-10 flex flex-row justify-between ">
                <span>
                  <div className="inline-block text-lg font-semibold ">
                    {country}
                  </div>
                </span>
                <span className="">
                  <div className="inline-block text-lg font-semibold ">
                    Category: {category}
                  </div>
                </span>
              </div>

              <div className="pl-8  text-center">
                <p className="mb-4 text-lg text-black">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="flex flex-col justify-between items-center">
        <div className="py-10 ">
          <button
            className="text-4xl text-black font-bold border rounded-xl bg-white px-28 py-8 drop-shadow-md"
            onClick={buttonClicked}
          >
            {" "}
            Explore {name}
          </button>
          <hr />
          {/* <ViewTours siteId={siteId} tours={tours} /> */}
        </div>
        {displayTours === true && tours.length ? (
          <ViewTours siteId={siteId} tours={tours} />
        ) : null}
      </section>
    </div>
  );
};

export default SingleSite;
