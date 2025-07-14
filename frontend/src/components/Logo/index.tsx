import React from "react";
import type { LogoProps } from "./logo.type";

const Logo = ({ imgUrl }: LogoProps) => {
  return (
    <div className="flex h-1/2 p-1.5">
      <img src={imgUrl} />
    </div>
  );
};

export default Logo;
