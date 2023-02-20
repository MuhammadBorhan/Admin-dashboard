import React from "react";
import AccountHeader from "../components/AccountHeader";

const NomineeInfo = () => {
  return (
    <div className="p-4 lg:h-screen" style={{ backgroundColor: "#E5E7EB" }}>
      <div className="py-8">
        <AccountHeader />
      </div>

      <div className="bg-emerald-400 p-4 mb-12 mt-8 grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-8 border-2">
          <h1 className="text-center text-xl py-6 border-b-2 font-bold">
            Nominee Information
          </h1>
          <div className="flex flex-col md:flex-row gap-4">
            <div className=" px-2">
              <p className="font-bold text-center mb-2">Name</p>
              <form action="">
                <div className="flex items-center">
                  <label htmlFor="" className="mx-2 font-bold">
                    1
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="mb-2 h-8 w-full"
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="" className="mx-2 font-bold">
                    2
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="mb-2 h-8 w-full"
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="" className="mx-2 font-bold">
                    3
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="mb-2 h-8 w-full"
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="" className="mx-2 font-bold">
                    4
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="mb-2 h-8 w-full"
                  />
                </div>
              </form>
            </div>

            <div className="flex gap-2 px-2">
              <div className="w-[400px] ">
                <p className="font-bold text-center mb-2">Relation</p>
                <form action="">
                  <div className="">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="mb-2 h-8 w-full"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="mb-2 h-8 w-full"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="mb-2 h-8 w-full"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="mb-2 h-8 w-full"
                    />
                  </div>
                </form>
              </div>
              <div className="w-40 mr-2">
                <p className="font-bold text-center mb-2">Age</p>
                <form action="">
                  <div className="">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="mb-2 h-8 w-full"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="mb-2 h-8 w-full"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="mb-2 h-8 w-full"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="mb-2 h-8 w-full"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4 border-2 p-4">
          <div>
            <h1 className="font-bold text-center mb-4">
              Guardian Information-1
            </h1>
            <form action="">
              <div className="flex items-center justify-center">
                <label htmlFor="" className="mx-2 font-bold w-20">
                  Name
                </label>
                <input type="text" name="" id="" className="mb-2 h-8 w-full" />
              </div>
              <div className="flex items-center justify-center">
                <label htmlFor="" className="mx-2 font-bold w-20">
                  Relation
                </label>
                <input type="text" name="" id="" className="mb-2 h-8 w-full" />
              </div>
              <div className="flex items-center justify-center">
                <label htmlFor="" className="mx-2 font-bold w-20">
                  Age
                </label>
                <input type="text" name="" id="" className="mb-2 h-8 w-full" />
              </div>
            </form>
          </div>
          <div>
            <h1 className="font-bold text-center my-4">
              Guardian Information-2
            </h1>
            <form action="">
              <div className="flex items-center justify-center">
                <label htmlFor="" className="mx-2 font-bold w-20">
                  Name
                </label>
                <input type="text" name="" id="" className="mb-2 h-8 w-full" />
              </div>
              <div className="flex items-center justify-center">
                <label htmlFor="" className="mx-2 font-bold w-20">
                  Relation
                </label>
                <input type="text" name="" id="" className="mb-2 h-8 w-full" />
              </div>
              <div className="flex items-center justify-center">
                <label htmlFor="" className="mx-2 font-bold w-20">
                  Age
                </label>
                <input type="text" name="" id="" className="mb-2 h-8 w-full" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NomineeInfo;
