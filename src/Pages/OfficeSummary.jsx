import React from "react";
import { Link } from "react-router-dom";
import AccountHeader from "../components/AccountHeader";

const OfficeSummary = () => {
  return (
    <div className="p-4 lg:h-screen" style={{ backgroundColor: "#E5E7EB" }}>
      <div className="py-8">
        <AccountHeader />
      </div>
      <div className="">
        <div className="mt-4 border-2 p-4 2 bg-gray-300">
          <form action="" className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-48">
                Branch Code
              </label>
              <input type="text" name="" id="" className="mb-2 h-8 w-full" />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-48">
                Distict Code
              </label>
              <input type="text" name="" id="" className="mb-2 h-8 w-full" />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-48">
                District Code
              </label>
              <input type="text" name="" id="" className="mb-2 h-8 w-full" />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-48">
                Entry
              </label>
              <input type="text" name="" id="" className="mb-2 h-8 w-full" />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-48">
                Branch Name
              </label>
              <input type="text" name="" id="" className="mb-2 h-8 w-full" />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-48 ">
                Head Office Code
              </label>
              <input type="text" name="" id="" className="mb-2 h-8 w-full" />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-48">
                Head Office Name
              </label>
              <input type="text" name="" id="" className="mb-2 h-8 w-full" />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-48">
                Account Status
              </label>
              <input type="text" name="" id="" className="mb-2 h-8 w-full" />
            </div>
          </form>
        </div>

        <div className="bg-indigo-300 p-10 mt-12">
          <div className="flex flex-col md:flex-row justify-center cursor-pointer gap-1">
            <p
              className={`bg-white text-black font-bold w-48 text-center py-2 px-6 text-xl  `}
            >
              <Link to="/account"> Save / Edit</Link>
            </p>
            <p
              className={`bg-white text-black font-bold w-48 text-center py-2 px-6 text-xl  `}
            >
              <Link to="/savings">First MR Entry</Link>
            </p>
            <p
              className={`bg-white text-black font-bold w-48 text-center py-2 px-6 text-xl   `}
            >
              <Link to="/nominee">Clear</Link>
            </p>
            <p
              className={`bg-white text-black font-bold w-48 text-center py-2 px-6 text-xl `}
            >
              <Link to="/summary">Exit</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeSummary;
