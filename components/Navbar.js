import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white py-4">
      <div className="max-w-7xl px-3 mx-auto">
        <div className="flex items-center font-normal">
          <Link href="/">
            <a className="inline-block mr-auto">
              <Image
                src="/logo.png"
                alt="SourceMyGadgets"
                height="85"
                width="156"
              />
            </a>
          </Link>
          <div className="text-lg">
            <Link href="/">
              <a className="inline-block mx-6 select-none">Home</a>
            </Link>
            <Link href="/">
              <a className="inline-block mx-6 select-none">About</a>
            </Link>
            <Link href="/contact">
              <a className="inline-block mx-6 select-none">Contact Us</a>
            </Link>
          </div>
          <Link href="/get-started">
            <button className="ml-20 py-4 px-8 bg-blue-400 rounded-md text-white hover:bg-blue-500 focus:outline-none text-lg transition-all duration-500 ease-in-out">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
