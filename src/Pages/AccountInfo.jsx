import React from "react";

const AccountInfo = () => {
  return (
    <div style={{ backgroundColor: "#8c7373" }}>
      <div className="p-8">
        {" "}
        <form className="flex flex-col md:flex-row md:justify-between md:px-12 ">
          <div className="mb-4 flex flex-col md:flex-row gap-2 items-center ">
            <label
              htmlFor="membershipNo"
              className="text-center text-white mb-2 w-48 font-bold"
            >
              Account No
            </label>
            <input
              type="text"
              name="accountNo"
              className="w-full border border-gray-400 p-2"
            />
          </div>
          <div className="mb-4 flex flex-col md:flex-row gap-2 items-center ">
            <label
              htmlFor="membershipNo"
              className="text-center text-white mb-2 w-48 font-bold"
            >
              Membership No
            </label>
            <input
              type="text"
              name="membershipNo"
              className="w-full border border-gray-400 p-2"
            />
          </div>
        </form>
      </div>

      <div style={{ backgroundColor: "#867979" }}>
        <div className=" p-8">
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

        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center p-2">
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
