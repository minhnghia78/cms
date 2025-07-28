import { Col, Input, Row } from "antd";
import React from "react";

export const SearchCard = () => {
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <Input placeholder="Enter Name" />
        </Col>
        <Col span={6}>
          <Input placeholder="Enter Name" />
        </Col>
        <Col span={6}>
          <Input placeholder="Enter Name" />
        </Col>
        <Col span={6}>
          <Input placeholder="Enter Name" />
        </Col>
        <Col span={6}>
          <Input placeholder="Enter Name" />
        </Col>
        <Col span={6}>
          <Input placeholder="Enter Name" />
        </Col>
        <Col span={6}>
          <Input placeholder="Enter Name" />
        </Col>
        <Col span={6}>
          <Input placeholder="Enter Name" />
        </Col>
      </Row>
    </>
  );
};
