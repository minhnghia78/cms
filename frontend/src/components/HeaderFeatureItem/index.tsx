import React from "react";
import type { HeaderFeatureItemProps } from "./feature.type";

const HeaderFeatureItem = ({ featureUrl, label }: HeaderFeatureItemProps) => {
  return (
    <a
      href={featureUrl}
      className="text-blue-950 hover:text-orange-500 hover:underline px-3 py-2 text-md font-normal"
    >
      {label}
    </a>
  );
};

export default HeaderFeatureItem;
