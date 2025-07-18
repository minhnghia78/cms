import React from "react";
import HeaderFeatureItem from "../HeaderFeatureItem";
import { HeaderFeaturesProps } from "./features.type";
import { Space, Layout, Flex } from "antd";

const { Header } = Layout;

const HeaderFeatures = ({ items }: HeaderFeaturesProps) => {
  return (
    <Flex
      vertical
      style={{
        backgroundColor: '#e5e7eb',
        borderBottom: '1px solid #d1d5db',
        padding: '6px 0'
      }}
    >
      <Flex
        justify="flex-start"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%'
        }}
      >
        <Space size="small" wrap>
          {items.map((item) => (
            <HeaderFeatureItem
              key={item.key}
              featureUrl={item.featureUrl}
              label={item.label}
            />
          ))}
        </Space>
      </Flex>
    </Flex>
  );
};

export default HeaderFeatures;
