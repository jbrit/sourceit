import React from "react";
import Image from "next/image";
import Link from "next/link";

const FormNavbar = () => {
  return (
    <nav className="py-4 mb-8">
      <div className="max-w-7xl px-3 mx-auto">
        <div className="flex items-center font-normal">
          <Link href="/">
            <a className="inline-block mr-auto">
              {/* Image was here */}
            </a>
          </Link>
          <div className="text-lg">
            <Link href="/">
              <a className="inline-block mx-6 select-none text-white">Home</a>
            </Link>
          </div>
          <Link href="/contact">
            <a className="ml-20 py-4 px-8 text-blue-400 rounded-md bg-white hover:bg-gray-100 focus:outline-none text-lg transition-all duration-500 ease-in-out">
              Contact Us
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default FormNavbar;
