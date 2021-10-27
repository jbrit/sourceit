import React from "react";
import Image from "next/image";
import Link from "next/link";

const IconCircle = ({ children, name, href }) => {
  const PlainIcon = (
    <span
      className="inline-flex items-center justify-center rounded-full mx-3 select-none"
      style={{ background: "#F4F7FC", height: "2rem", width: "2rem" }}
    >
      {children}
      {name && <Image src={`/icons/${name}.svg`} height="16" width="16" />}
    </span>
  );

  return href ? <Link href={href}>
      {PlainIcon}
      </Link> : <>{PlainIcon}</>;
};

export default IconCircle;
