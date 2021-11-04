import React from "react";
import FormNavbar from "./FormNavbar";
import Image from "next/image";
import Link from "next/link";
import StepCheck from "./StepCheck";

const FormPage = ({
  children,
  hasSteps,
  stepValues,
  SideExtras,
  orderNow,
  getRecommendation,
}) => {
  const checkedSteps = stepValues ?? [false, false, false];
  return (
    <div className="form-page-container">
      <FormNavbar />
      <div
        style={{ gridTemplateColumns: "4fr 9fr" }}
        className="max-w-7xl px-3 mx-auto grid"
      >
        <div style={{ background: "#FBFEFF" }} className="p-11">
          <div className="mb-4">
            <Link href="/">
              <a className="inline-block mr-auto select-none">
                <Image
                  src="/logo.png"
                  alt="SourceMyGadgets"
                  height="58"
                  width="104"
                />
              </a>
            </Link>
          </div>
          {hasSteps && (
            <>
              <div className="relative flex flex-col">
                <div className="flex items-center mb-20">
                  <span className="mr-3">
                    <StepCheck checked={checkedSteps[0]} />
                  </span>
                  <span>Personal Information</span>
                </div>
                <div
                  style={{
                    height: "85px",
                    borderColor: "#757575",
                    left: "19.5px",
                    top: "38px",
                  }}
                  className="absolute border-l border-dashed"
                ></div>
                <div style={{ zIndex: 1 }} className="flex items-center mb-20">
                  <span className="mr-3">
                    <StepCheck checked={checkedSteps[1]} />
                  </span>
                  <span>Gadget Information</span>
                </div>
                <div
                  style={{
                    height: "85px",
                    borderColor: "#757575",
                    left: "19.5px",
                    top: "156px",
                  }}
                  className="absolute border-l border-dashed"
                ></div>
                <div style={{ zIndex: 1 }} className="flex items-center mb-20">
                  <span className="mr-3">
                    <StepCheck checked={checkedSteps[2]} />
                  </span>
                  <span>Successful</span>
                </div>
              </div>
            </>
          )}
          {(orderNow || getRecommendation) && (
            <div className="text-blue-400" style={{ paddingTop: "120px" }}>
              {orderNow && (
                <>
                  <div className="font-bold">“Order Now”</div>
                  We designed this for you so that you can purchase your gadgets
                  at the best price without any stress, fears, and worries.
                </>
              )}
              {getRecommendation && (
                <>
                  <div className="font-bold">“Get Recommendation”</div>
                  Customers who are unsure of what gadgets to buy use the ‘Get
                  Recommendation’ service to receive a personalized
                  recommendation within an hour”
                </>
              )}
            </div>
          )}
          {SideExtras}
        </div>
        <div className="bg-white p-11">
          {/* Image Nav Placeholder */}
          <div style={{ height: "58px" }} className="mb-4"></div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default FormPage;
