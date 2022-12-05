import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchAllTours } from "./toursSlice";
import axios from "axios";

const ViewTours = (props) => {
  const { siteId, destination, name } = props;
  const nameSplit = name.split(" ");
  const shortName = nameSplit[0] + " " + nameSplit[1];

  // const [flags, setFlags] = useState(["FREE_CANCELLATION"]);
  const flags = ["FREE_CANCELLATION"];
  const [highestPrice, setHighestPrice] = useState("");
  const [startDate, setStartDate] = useState("2023-01-28");
  const [endDate, setEndDate] = useState("2023-01-29");

  const dispatch = useDispatch();

  // products/search
  //  takes "destination": "number as string"
  //Glacier Bay  --- siteId 17,    destId 5420
  // Chichen Itza - siteId 50,       destId 50526
  //Grand Canyon National Park  ---- siteId 61,      destId 815

  const locUrl =
    "https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete";
  const locOptions = {
    method: "GET",
    params: { query: shortName, lang: "en_US", units: "km" },
    headers: {
      "X-RapidAPI-Key": "86865d8352msh23fcf5340a7f200p14400fjsn93726b8b0849",
      "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
    },
  };

  const getToursData = async () => {
    console.log("SHORT NAME", shortName);
    try {
      const { data } = await axios.get(locUrl, locOptions);
      data.Typeahead_autocomplete.results[0].route.geoId;


// if sections array exists
      const obj1 = sections[1]
      const title = singleCardContent.cardTitle.string

      const primInfo = singleCardContent.primaryInfo.text

      const secInfo = singleCardContent.secondaryInfo.text

      const img = singleCardContent.cardPhoto.urlTemplate // add w and h


    } catch (err) {
      console.log("Error making API CALL", err);
    }
  };

  useEffect(() => {
    getToursData();
  }, []);

  const postSearch = (evt) => {
    evt.preventDefault();
    dispatch(
      fetchAllTours({
        siteId: siteId,
        destination: destination,
        flags: flags,
        highestPrice: Number(highestPrice),
        startDate: startDate,
        endDate: endDate,
      })
    );
    // setFlags("");
    // setUpdateEmail("");
  };

  // useEffect(()=> {
  //   dispatch(fetchAllTours())
  // }, [])
  const allTours = useSelector((state) => state.allTours.tours); // productUrl, title, images[0].variants[11], description, reviews.totalReviews,reviews.combinedAverageRating, pricing.summary.fromPrice

  return (
    <div className="text-4xl">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={postSearch}
      >
        <div className="">
          <h4 className="">Explore {name}</h4>
        </div>

        <div className="">
          <div className="">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 "
              htmlFor="highestPrice"
            >
              Highest Price{" "}
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
              type="text"
              name="highestPrice"
              value={highestPrice}
              onChange={(e) => setHighestPrice(e.target.value)}
            />
          </div>

          <div className="">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 "
              htmlFor="startDate"
            >
              Start Date
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
              name="startDate"
              type="text"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>

          <div className="">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 "
              htmlFor="endDate"
            >
              End Date
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
              type="text"
              name="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <div className="">
            <button
              className="text-black"
              style={{
                backgroundColor: "#F6BD60",
              }}
              type="submit"
            >
              Find Experiences
            </button>
          </div>
        </div>
      </form>
      <div>
        ALL TOURS POSTED BELOW
        {allTours && allTours.length ? (
          allTours.map((tour) => {
            <div key={tour.productCode}>
              <div>{tour.title}</div>
              <div>{tour.reviews.totalReviews} Reviews</div>
            </div>;
          })
        ) : (
          <div>No results match your criteria</div>
        )}
      </div>
    </div>
  );
};

export default ViewTours;
