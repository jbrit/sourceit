import React from "react";
import Head from "next/head";
import FormPage from "../components/FormPage";

const GetStarted = () => {
  return (
    <div>
      <Head>
        <title>Get Started | SourceMyGadgets</title>
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
      <FormPage></FormPage>
    </div>
  );
};

export default GetStarted;
