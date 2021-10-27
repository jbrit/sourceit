import React from "react";
import IconCircle from "./IconCircle";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-20 bg-white">
      <div className="max-w-7xl px-3 mx-auto flex flex-col items-center">
        <span className="inline-block mb-7">
          <Image src="/logo.png" alt="SourceMyGadgets" height="85" width="156" />
        </span>
        <div className="flex mb-7 text-lg">
          <Link href="/">
            <a className="inline-block mx-6 select-none">About</a>
          </Link>
          <Link href="/">
            <a className="inline-block mx-6 select-none">FAQs</a>
          </Link>
          <Link href="/">
            <a className="inline-block mx-6 select-none">Source It</a>
          </Link>
          <Link href="/">
            <a className="inline-block mx-6 select-none">Contact Us</a>
          </Link>
        </div>
        <div className="flex mb-9">
          <IconCircle name="instagram" href="https://instagram.com/" />
          <IconCircle name="facebook" href="https://facebook.com/" />
          <IconCircle name="twitter" href="https://twitter.com/" />
          <IconCircle name="linkedin" href="https://linkedin.com/" />
        </div>
        <div className="mb-4">
          <IconCircle name="location" />
        </div>
        <div className="text-lg max-w-xl text-center">
          Office address: (His Grace Plaza, Francis Oremeji Street. Computer
          Village, Ikeja, Lagos)
        </div>
      </div>
    </footer>
  );
};

export default Footer;
