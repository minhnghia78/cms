import React from "react";
import HeaderFeatureItem from "../HeaderFeatureItem";
import { HeaderFeaturesProps } from "./features.type";

const HeaderFeatures = ({ items }: HeaderFeaturesProps) => {
  return (
    <div className=" bg-gray-200 border-b border-b-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5">
        {items.map((i) => (
          <HeaderFeatureItem
            key={i.key}
            featureUrl={i.featureUrl}
            label={i.label}
          />
        ))}
      </div>
    </div>
  );
};

export default HeaderFeatures;
