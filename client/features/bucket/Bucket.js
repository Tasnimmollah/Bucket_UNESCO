import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBucket } from "./bucketSlice";

const Bucket = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBucket());
  }, []);

  const bucketArr = useSelector((state) => state.bucket.bucket);

  return (
    <div>
      <div className="bg-blue w-full h-screen font-sans">
        <div className="flex p-2 bg-blue-dark items-center">
          <div className="hidden md:flex justify-start">
            <input type="text" className="bg-gray rounded p-2" />
          </div>
          <div className="mx-0 md:mx-auto">
            <h1 className="text-word text-xl flex items-center  ">
              <svg
                className="fill-current h-8 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
              >
                <path d="M41 4H9C6.24 4 4 6.24 4 9v32c0 2.76 2.24 5 5 5h32c2.76 0 5-2.24 5-5V9c0-2.76-2.24-5-5-5zM21 36c0 1.1-.9 2-2 2h-7c-1.1 0-2-.9-2-2V12c0-1.1.9-2 2-2h7c1.1 0 2 .9 2 2v24zm19-12c0 1.1-.9 2-2 2h-7c-1.1 0-2-.9-2-2V12c0-1.1.9-2 2-2h7c1.1 0 2 .9 2 2v12z" />
              </svg>
            </h1>
          </div>
          <div className="flex items-center ml-auto">
            <button className="bg-blue-light rounded h-8 w-8 font-bold text-black text-sm mr-2">
              +
            </button>
            <button className="bg-blue-light rounded h-8 w-8 font-bold text-black text-sm mr-2">
              i
            </button>
            <button className="bg-red rounded h-8 w-8 font-bold text-black text-sm mr-2">
              <svg
                className="h-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 2c-.8 0-1.5.7-1.5 1.5v.688C7.344 4.87 5 7.62 5 11v4.5l-2 2.313V19h18v-1.188L19 15.5V11c0-3.379-2.344-6.129-5.5-6.813V3.5c0-.8-.7-1.5-1.5-1.5zm-2 18c0 1.102.898 2 2 2 1.102 0 2-.898 2-2z" />
              </svg>
            </button>
            <img
              src="https://i.imgur.com/OZaT7jl.png"
              className="rounded-full"
            />
          </div>
        </div>
        <div className="flex m-4 justify-between">
          <div className="flex">
            <h3 className="text-black mr-4">Bucket</h3>
          </div>
        </div>
        <div className="flex px-4 pb-8 items-start overflow-x-scroll">
          <div className="rounded bg-grey-light  flex-no-shrink w-64 p-2 mr-3">
            <div className="flex justify-between py-1">
              <h3 className="text-sm">Soon</h3>
              <svg
                className="h-4 fill-current text-grey-dark cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z" />
              </svg>
            </div>
            <div className="text-sm mt-2">
              <div className="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
                Do a mobile first layout
              </div>

              <div className="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
                Check the meta tags
              </div>

              <div className="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
                Check the responsive layout on all devices
                <div className="text-grey-darker mt-2 ml-2 flex justify-between items-start">
                  <span className="text-xs flex items-center">
                    <svg
                      className="h-4 fill-current mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 50 50"
                    >
                      <path d="M11 4c-3.855 0-7 3.145-7 7v28c0 3.855 3.145 7 7 7h28c3.855 0 7-3.145 7-7V11c0-3.855-3.145-7-7-7zm0 2h28c2.773 0 5 2.227 5 5v28c0 2.773-2.227 5-5 5H11c-2.773 0-5-2.227-5-5V11c0-2.773 2.227-5 5-5zm25.234 9.832l-13.32 15.723-8.133-7.586-1.363 1.465 9.664 9.015 14.684-17.324z" />
                    </svg>
                    3/5
                  </span>
                  <img
                    src="https://i.imgur.com/OZaT7jl.png"
                    className="rounded-full"
                  />
                </div>
              </div>
              <p className="mt-3 text-grey-dark">Add a card...</p>
            </div>
          </div>
          <div className="rounded bg-grey-light flex-no-shrink w-64 p-2 mr-3">
            <div className="flex justify-between py-1">
              <h3 className="text-sm">Checked Off</h3>
              <svg
                className="h-4 fill-current text-grey-dark cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z" />
              </svg>
            </div>
            <div className="text-sm mt-2">
              <div className="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
                Delete all references from the wiki
              </div>

              <div className="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
                Remove analytics code
              </div>

              <div className="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
                Whatever
              </div>

              <div className="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
                <p>Think more tasks for this example</p>
                <div className="bg-red rounded p-1 mt-2 inline-flex text-black text-xs">
                  <svg
                    className="h-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2c-.8 0-1.5.7-1.5 1.5v.688C7.344 4.87 5 7.62 5 11v4.5l-2 2.313V19h18v-1.188L19 15.5V11c0-3.379-2.344-6.129-5.5-6.813V3.5c0-.8-.7-1.5-1.5-1.5zm-2 18c0 1.102.898 2 2 2 1.102 0 2-.898 2-2z" />
                  </svg>
                  2
                </div>
              </div>
              <p className="mt-3 text-grey-dark">Add a card...</p>
            </div>
          </div>
        </div>
      </div>
      {/*
      {bucketArr && bucketArr.length ? (
        <div>Bucket</div>
      ) : bucketArr && bucketArr.length === 0 ? (
        <div>Start building your list!</div>
      ) : null} */}
    </div>
  );
};

export default Bucket;