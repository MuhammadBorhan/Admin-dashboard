import React from "react";
import AccountHeader from "../components/AccountHeader";

const AccountInfo = () => {
  return (
    <div className="p-4" style={{ backgroundColor: "#E5E7EB" }}>
      <div className="py-8">
        <AccountHeader />
      </div>

      <div className="" style={{ backgroundColor: "gray" }}>
        <div className=" p-2 lg:p-8">
          <form
            action=""
            className="grid grid-cols-1 md:grid-cols-2 gap-2 p-4 border-2"
          >
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-48 text-white">
                Name
              </label>
              <input type="text" name="" id="" className="mb-2 h-8 w-full" />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-48 text-white">
                Date
              </label>
              <input type="date" name="" id="" className="mb-2 h-8 w-full" />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-48 text-white">
                Father's Name
              </label>
              <input type="text" name="" id="" className="mb-2 h-8 w-full" />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-48 text-white">
                G Name
              </label>
              <input type="text" name="" id="" className="mb-2 h-8 w-full" />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-48 text-white">
                Mother's Name
              </label>
              <input type="text" name="" id="" className="mb-2 h-8 w-full" />
            </div>

            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-48 text-white">
                Spouse Name
              </label>
              <input type="text" name="" id="" className="mb-2 h-8 w-full" />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-48 text-white">
                Date of Birth
              </label>
              <input type="date" name="" id="" className="mb-2 h-8 w-full" />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-48 text-white">
                Occupation
              </label>
              <input type="text" name="" id="" className="mb-2 h-8 w-full" />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-48 text-white">
                Nationality
              </label>
              <input type="text" name="" id="" className="mb-2 h-8 w-full" />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-48 text-white">
                National ID
              </label>
              <input type="text" name="" id="" className="mb-2 h-8 w-full" />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-48 text-white">
                Sex
              </label>
              {/* <input type="text" name="" id="" className="mb-2 h-8 w-full" /> */}
              <select
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-lg leading-tight focus:outline-none focus:shadow-outline"
                id="gender"
                name="gender"
              >
                <option value="">Please select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-48 text-white">
                Mobile No.
              </label>
              <input type="phone" name="" id="" className="mb-2 h-8 w-full" />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-48 text-white">
                Telephone
              </label>
              <input type="text" name="" id="" className="mb-2 h-8 w-full" />
            </div>
            <div className="flex items-center justify-center">
              <label htmlFor="" className="mx-2 font-bold w-48 text-white">
                Email
              </label>
              <input type="email" name="" id="" className="mb-2 h-8 w-full" />
            </div>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center p-2 pb-8">
          <div className="flex flex-col mb-6 lg:mb-0 justify-center items-center">
            <p className="font-bold text-center mb-2 text-white">
              Present Address
            </p>
            <textarea
              className="block lg:hidden"
              name=""
              id=""
              cols="30"
              rows="4"
            ></textarea>
            <textarea
              className="hidden lg:block"
              name=""
              id=""
              cols="60"
              rows="4"
            ></textarea>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="font-bold text-center mb-2 text-white">
              Permanent Address
            </p>
            <textarea
              className="block lg:hidden"
              name=""
              id=""
              cols="30"
              rows="4"
            ></textarea>
            <textarea
              className="hidden lg:block"
              name=""
              id=""
              cols="60"
              rows="4"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
