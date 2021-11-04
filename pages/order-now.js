import React from "react";
import Head from "next/head";
import FormPage from "../components/FormPage";
import NameStep from "../components/recommendation/NameStep";
import { useStep } from "../helpers/hooks";
import ContactStep from "../components/recommendation/ContactStep";
import SuccessStep from "../components/recommendation/SuccessStep";

const OrderNow = () => {
  const { step, previousStep, nextStep } = useStep(0);
  const _renderSteps = (step) => {
    const stepMeta = { step, previousStep, nextStep };
    switch (step) {
      case 0:
        return <NameStep stepMeta={stepMeta} />;
      case 1:
        return <ContactStep stepMeta={stepMeta} />;
      case 2:
        return <SuccessStep />;
      default:
        return <></>;
    }
  };
  return (
    <div>
      <Head>
        <title>Order Now | SourceMyGadgets</title>
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
      <FormPage stepValues={[step>=1, step>=2, step==2]} hasSteps orderNow>{_renderSteps(step)}</FormPage>
    </div>
  );
};

export default OrderNow;
