import React from "react";

const AccountHeader = () => {
  return (
    <form className="flex flex-col md:flex-row md:justify-between md:px-12 ">
      <div className="mb-4 flex flex-col md:flex-row gap-2 items-center ">
        <label
          htmlFor="membershipNo"
          className="text-center text-gray-600 mb-2 w-48 font-bold"
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
          className="text-center text-gray-600 mb-2 w-48 font-bold"
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
  );
};

export default AccountHeader;
