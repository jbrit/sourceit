import React from "react";
import Link from "next/link";
import Image from "next/image";

const SuccessStep = () => {
  return (
    <div
      style={{ height: "600px", color: "#757575" }}
      className="flex flex-col justify-center text-center"
    >
      <flex className="items-center justify-center mb-5">
        <Image src="/green-tick.svg" height={160} width={160} />
      </flex>
      <div className="font-bold text-2xl mb-5">
        Thank You for Using Our Service
      </div>
      <div className="mb-5 text-2xl">
        Kindly expect a response from us within an hour
      </div>
      <div>
        <Link href="/get-started">
          <button className="py-4 px-10 bg-blue-400 rounded-md text-white hover:bg-blue-500 focus:outline-none transition-all duration-500 ease-in-out">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SuccessStep;
