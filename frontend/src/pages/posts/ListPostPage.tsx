import { Col, Flex, Row } from "antd";
import React from "react";
import { SearchCard } from "../../components/ListPosts/SearchCard";
import { ListPosts } from "../../components/ListPosts/ListPosts";

export const ListPostPage = () => {
  return (
    <>
      <Flex gap={50} vertical style={{ width: "100%" }}>
        <SearchCard />
        <ListPosts />
      </Flex>
    </>
  );
};
