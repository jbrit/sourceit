import React from "react";
import Head from "next/head";
import FormPage from "../components/FormPage";
import { useStep } from "../helpers/hooks";
import NameStep from "../components/recommendation/NameStep";
import ContactStep from "../components/recommendation/ContactStep";
import GadgetInfoA from "../components/recommendation/GadgetInfoA";
import GadgetInfoB from "../components/recommendation/GadgetInfoB";

const GetRecommendation = () => {
  const { step, previousStep, nextStep } = useStep(0);
  const _renderSteps = (step) => {
    const stepMeta = { step, previousStep, nextStep };
    switch (step) {
      case 0:
        return <NameStep stepMeta={stepMeta} />;
      case 1:
        return <ContactStep stepMeta={stepMeta} />;
      case 2:
        return <GadgetInfoA stepMeta={stepMeta} />;
      case 3:
        return <GadgetInfoB stepMeta={stepMeta} />;
      default:
        return <></>;
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
      <FormPage>{_renderSteps(step)}</FormPage>
    </div>
  );
};

export default GetRecommendation;
