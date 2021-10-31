import React from "react";
import Image from "next/image";

const Newsletter = () => {
  return (
    <section className="py-20 bg-blue-400 text-white newsletter">
      <h2 className="text-center text-4xl font-bold mb-7">
        Sign Up to Our Newsletter
      </h2>
      <div className="flex justify-center mb-7">
        <span className="newsletter-circle"></span>
        <span
          className="newsletter-circle"
          style={{ zIndex: 1, marginLeft: "-13px" }}
        ></span>
        <span
          className="newsletter-circle"
          style={{ zIndex: 2, marginLeft: "-13px" }}
        ></span>
        <span
          className="newsletter-circle"
          style={{ zIndex: 3, marginLeft: "-13px" }}
        ></span>
        <span
          className="newsletter-circle"
          style={{ zIndex: 4, marginLeft: "-13px" }}
        ></span>
        <span
          className="newsletter-circle items-center justify-center"
          style={{ zIndex: 5, marginLeft: "-13px" }}
        >
          <span>50k</span>
        </span>
      </div>
      <div className="text-center font-semibold text-xl max-w-md mx-auto mb-16">
        Receive latest news, updates and many other news every week.
      </div>
      <form className="max-w-md mx-auto relative">
        <input
          className="inline-block w-full bg-white rounded-md outline-none focus:bg-gray-100 text-black"
          style={{ padding: "20px 87px 20px 38px" }}
          placeholder="Enter email address"
          type="email"
          required
        />
        <button
          className="inline-flex items-center justify-center absolute"
          style={{
            background: "#F7B24B",
            borderRadius: "5px",
            width: "59px",
            height: "43px",
            right: "14px",
            top: "20px",
            top: "50%",
            transform: "translateY(-50%)",
          }}
          type="submit"
        >
          <Image src="/send-arrow.svg" height={27.6} width={27.6} />{" "}
        </button>
      </form>
    </section>
  );
};

export default Newsletter;
