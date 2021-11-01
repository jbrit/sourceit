import React from "react";
import FormNavbar from "./FormNavbar";
import Image from "next/image";
import Link from "next/link";

const FormPage = ({ children, SideExtras }) => {
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
