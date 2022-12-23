import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBucket, addToBucket, moveList } from "./bucketSlice";
import { fetchAllSites } from "../allSites/allSitesSlice";
import { useNavigate } from "react-router-dom";

const Bucket = (props) => {
  const { backColor, setBackColor } = props;
  useEffect(() => {
    const changeNav = () => {
      setBackColor(true);
    };
    changeNav();
  }, []);

  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(fetchAllSites());
    dispatch(fetchBucket());
  }, [dispatch]);

  const bucketArr = useSelector((state) => state.bucket.bucket);
  const allSites = useSelector((state) => state.allSites.sites);

  const [addSiteId, setAddSiteId] = useState("");
  const navigate = useNavigate();

  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  const handleAdd = (ev) => {
    ev.preventDefault();
    console.log("HANDLE ADD SITE ID", addSiteId);
    dispatch(addToBucket(addSiteId));

    setAddSiteId("");
    navigate("/bucket");
  };

  const handleCheck = (ev, siteId) => {
    ev.preventDefault();
    console.log("HANDLE CHECK", siteId);
    dispatch(moveList(siteId));

    navigate("/bucket");
  };

  console.log("BUCKET COMPONENT", allSites.length);
  console.log("BUCKET LIST", bucketArr);

  return (
    <div className="px-20 pt-40">
      <div className="">
        <h1 className="text-6xl py-8 text-center">Create Your Bucket List</h1>
        <hr />
        <div className="pb-32">
          <div className="flex flex-row justify-evenly pt-16">
            <div className="flex  justify-center rounded-xl shadow w-5/12 bg-[#244535] ">
              <div className="py-8 mx-6 w-4/5">
                <div className="text-2xl text-white font-bold text-center mb-4 pb-5">
                  List Of Sites
                </div>

                <form
                  className="flex flex-row justify-between mt-4 pb-6"
                  onSubmit={handleAdd}
                >
                  <div className="w-full mr-4">
                    <label htmlFor="siteId">
                      <select
                        name="siteId"
                        className="w-full  shadow appearance-none border rounded-xl  py-2 px-3 "
                        // style={{ width: "100px" }}
                        value={addSiteId}
                        onChange={(ev) => {
                          setAddSiteId(ev.target.value);
                        }}
                      >
                        <option> </option>
                        {[...allSites]
                          .sort((a, b) => a.name.localeCompare(b.name))
                          .map((site) => {
                            return (
                              <option value={site.id} key={site.id}>
                                {site.name}
                              </option>
                            );
                          })}
                      </select>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="font-bold border rounded-xl bg-white px-8 py-2 drop-shadow-md text-lg text-black"
                  >
                    Add
                  </button>
                </form>

                {bucketArr && bucketArr.length
                  ? bucketArr
                      .filter((item) => item.status === "Soon")
                      .map((item) => (
                        <div className="pb-6" key={item.siteId}>
                          <div className="overflow-hidden shadow-lg rounded-lg bg-white">
                            <img
                              className="object-cover w-full h-32 rounded-lg "
                              src={item.site?.imgUrl}
                            />
                            <div className="px-1 py-2 flex flex-row justify-between">
                              <span className="mb-2 font-bold text-base text-word">
                                {item.site.name}
                              </span>

                              <button
                                onClick={(ev) => handleCheck(ev, item.siteId)}
                                className="pl-2 font-bold border rounded-xl bg-green-900 px-5  drop-shadow-md text-sm text-center text-white"
                              >
                                Check off
                              </button>
                            </div>
                          </div>
                        </div>
                      ))
                  : null}
              </div>
            </div>

            <div className="flex items-center justify-center rounded-xl shadow w-5/12 bg-[#244535] ">
              <div className="py-8 mx-6 w-4/5">
                <div className="text-2xl text-white font-bold text-center mb-4 pb-5">
                  Checked Off
                </div>
                <div className="">
                  {bucketArr && bucketArr.length
                    ? [...bucketArr].sort().map((item) => (
                        <div className="pb-6" key={item.siteId}>
                          <div className="overflow-hidden shadow-lg rounded-lg bg-slate-300">
                            <img
                              className="object-cover w-full h-32 rounded-lg"
                              src={item.site?.imgUrl}
                            />

                            <div className="px-1 py-4">
                              <span className="mb-2 font-bold text-base text-gray">
                                {item.site?.name}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))
                    : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bucket;
