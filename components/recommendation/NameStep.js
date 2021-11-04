import React from "react";
import Link from "next/link";

const NameStep = ({ stepMeta }) => {
  const { nextStep } = stepMeta;
  return (
    <>
      <div className="mb-5" style={{ color: "#757575" }}>
        <div className="font-bold text-2xl">
          Let’s get started with your name
        </div>
        <div>
          Please fill in the details , it’s nothing too serious, we just want to
          know your name
        </div>
      </div>
      <div className="w-full max-w-md mb-8">
        <span style={{ color: "#757575" }} className="mb-5 block font-medium">
          First Name
        </span>
        <input
          className="form-input px-3 py-3 w-full"
          type="text"
          name="firstName"
          required
        />
      </div>
      <div className="w-full max-w-md mb-14">
        <span style={{ color: "#757575" }} className="mb-5 block font-medium">
          Last Name
        </span>
        <input
          className="form-input px-3 py-3 w-full"
          type="text"
          name="lastName"
          required
        />
      </div>
      <div className="flex justify-between max-w-md">
        <Link href="/">
          <button
            style={{ width: "181px", backgroundColor: "#F7B24B" }}
            className="py-4 rounded-md text-white hover:bg-blue-500 focus:outline-none transition-all duration-500 ease-in-out"
          >
            Return Home
          </button>
        </Link>
        <button
          onClick={nextStep}
          style={{ width: "181px" }}
          className="py-4 bg-blue-400 rounded-md text-white hover:bg-blue-500 focus:outline-none transition-all duration-500 ease-in-out"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default NameStep;
