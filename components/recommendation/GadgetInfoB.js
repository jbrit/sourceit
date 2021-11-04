import React from "react";
import SelectInput from "../SelectInput";

const GadgetInfoB = ({ stepMeta }) => {
  const { previousStep } = stepMeta;
  return (
    <>
      <div className="mb-5" style={{ color: "#757575" }}>
        <div className="font-bold text-2xl">Gadget Information</div>
        <div>
          Please fill in the details, it’s nothing too serious, we just want to
          know your name
        </div>
      </div>
      <div className="w-full max-w-md mb-8">
        <span style={{ color: "#757575" }} className="mb-5 block">
          What is your preference?
        </span>
        <SelectInput />
      </div>
      <div className="w-full max-w-md mb-14">
        <span style={{ color: "#757575" }} className="mb-5 block">
          What is your budget?
        </span>
        <SelectInput />
      </div>
      <div className="w-full max-w-md mb-14">
        <span style={{ color: "#757575" }} className="mb-5 block">
          What are the top priority features that you want the gadget to have?
        </span>
        <input
          className="form-input px-3 py-3 w-full"
          type="text"
          name="priorityFeatures"
          placeholder="Please type as many thing you want the gadget to do"
          required
        />
      </div>
      <div className="w-full max-w-md mb-14">
        <span style={{ color: "#757575" }} className="mb-5 block">
          How would you like to reach us?
        </span>
        <input
          className="form-input px-3 py-3 w-full"
          type="text"
          name="reachUs?"
          placeholder="Please type as many thing you want the gadget to do"
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
          onClick={() => {}}
          style={{ width: "181px" }}
          className="ml-8 py-4 bg-blue-400 rounded-md text-white hover:bg-blue-500 focus:outline-none transition-all duration-500 ease-in-out"
        >
          Get Recommendation
        </button>
      </div>
    </>
  );
};

export default GadgetInfoB;
