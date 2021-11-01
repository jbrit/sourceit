import React from "react";
import Head from "next/head";
import FormPage from "../components/FormPage";
import { useStep } from "../helpers/hooks";

const GetRecommendation = () => {
  const { step, previousStep, nextStep } = useStep(0);
  const _renderSteps = (step) => {
    const stepMeta = { step, previousStep, nextStep };
    switch (step) {
      default:
        return <React.Fragment {...stepMeta}></React.Fragment>;
    }
  };
  return (
    <div>
      <Head>
        <title>Get Recommendation | SourceMyGadgets</title>
        <meta name="description" content="SourceMyGadgets Website" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FormPage>
        {_renderSteps(step)}
        <div className="mb-5" style={{ color: "#757575" }}>
          <div className="font-bold text-2xl">
            Let’s get started with your name
          </div>
          <div>
            Please fill in the details , it’s nothing too serious, we just want
            to know your name
          </div>
        </div>
        <div className="w-full max-w-md mb-8">
          <span style={{ color: "#757575" }} className="mb-5 block">
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
          <span style={{ color: "#757575" }} className="mb-5 block">
            Last Name
          </span>
          <input
            className="form-input px-3 py-3 w-full"
            type="text"
            name="lastName"
            required
          />
        </div>
      </FormPage>
    </div>
  );
};

export default GetRecommendation;
