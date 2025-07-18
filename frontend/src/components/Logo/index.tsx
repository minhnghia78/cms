import React from "react";
import type { LogoProps } from "./logo.type";
import { Space } from "antd";

const Logo = ({ imgUrl }: LogoProps) => {
  return (
    <Space 
      style={{
        display: 'flex',
        height: '40px',
        padding: '6px'
      }}
    >
      <img 
        src={imgUrl} 
        alt="Logo" 
        style={{
          height: '100%',
          width: 'auto'
        }}
      />
    </Space>
  );
};

export default Logo;
