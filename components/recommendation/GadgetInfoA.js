import React from "react";
import SelectInput from "../SelectInput";

const GadgetInfoA = ({ stepMeta }) => {
  const { previousStep, nextStep } = stepMeta;

  const gadgetExamples = [
      {name: "Phone"},
      {name: "Laptop"},
      {name: "Other"},
  ]

  const brandExamples = [
      {name: "Apple"},
      {name: "Tecno"},
      {name: "Samsung"},
      {name: "Other"},
  ]
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
          What are you looking for?
        </span>
        <SelectInput  items={gadgetExamples}/>
      </div>
      <div className="w-full max-w-md mb-14">
        <span style={{ color: "#757575" }} className="mb-5 block">
          What brand do you prefer?
        </span>
        <SelectInput items={brandExamples} />
      </div>
      <div className="w-full max-w-md mb-14">
        <span style={{ color: "#757575" }} className="mb-5 block">
          What do you need the gadget for?
        </span>
        <input
          className="form-input px-3 py-3 w-full"
          type="text"
          name="gadgetFor"
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

export default GadgetInfoA;
