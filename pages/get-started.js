import React from "react";
import Head from "next/head";
import Link from "next/link";
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
      <FormPage>
        <div style={{ color: "#757575" }} className="font-bold text-2xl mb-16">
          Hey, please select the option that best suits what you want
        </div>
        <div className="flex">
          <Link href="/order-now">
            <div
              className="p-7 border rounded-lg cursor-pointer mr-8"
              style={{ width: "43%", height: "300px", maxWidth: "316px" }}
            >
              <div className="font-bold text-center mb-6">Order Now</div>
              <p>
                We designed this for you so that you can purchase your gadgets
                at the best price without any stress, fears, and worries.
              </p>
            </div>
          </Link>
          <Link href="/get-recommendation">
            <div
              className="p-7 border rounded-lg cursor-pointer"
              style={{ width: "43%", height: "300px", maxWidth: "316px" }}
            >
              <div className="font-bold text-center mb-6">
                Get Recommendation
              </div>
              <p>
                Customers who are unsure of what gadgets to buy use the ‘Get
                Recommendation’ service to receive a personalized recommendation
                within an hour
              </p>
            </div>
          </Link>
        </div>
      </FormPage>
    </div>
  );
};

export default GetStarted;
