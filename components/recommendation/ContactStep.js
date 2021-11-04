import React from "react";

const ContactStep = ({ stepMeta }) => {
  const { previousStep, nextStep } = stepMeta;
  return (
    <>
      <div className="mb-5" style={{ color: "#757575" }}>
        <div className="font-bold text-2xl">
        Please enter your email and phone number
        </div>
        <div>
        Please fill in the details  correctly
        </div>
      </div>
      <div className="w-full max-w-md mb-8">
        <span style={{ color: "#757575" }} className="mb-5 block font-medium">
          Email
        </span>
        <input
          className="form-input px-3 py-3 w-full"
          type="email"
          name="email"
          placeholder="Enter your email, e.g sourcemygadgets@gmail.com"
          required
        />
      </div>
      <div className="w-full max-w-md mb-14">
        <span style={{ color: "#757575" }} className="mb-5 block font-medium">
          Phone Number
        </span>
        <input
          className="form-input px-3 py-3 w-full"
          type="tel"
          name="phoneNumber"
          placeholder="080."
          required
        />
      </div>
      <div className="flex justify-end max-w-md">
        <button
          onClick={previousStep}
          style={{ width: "181px" }}
          className="py-4 rounded-md border border-blue-400 text-blue-400 hover:text-white hover:border-blue-300 hover:bg-blue-300 focus:outline-none transition-all duration-500 ease-in-out"
        >
          Go Back
        </button>

        <button
          onClick={nextStep}
          style={{ width: "181px" }}
          className="ml-8 py-4 bg-blue-400 rounded-md text-white hover:bg-blue-500 focus:outline-none transition-all duration-500 ease-in-out"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default ContactStep;
