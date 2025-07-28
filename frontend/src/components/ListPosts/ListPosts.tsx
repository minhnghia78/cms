import { Table } from "antd";
import React, { useEffect } from "react";
import axios from "../../config/axios.config";
import { categoryService } from "../../services/categoryService";

export const ListPosts = () => {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  const getListCategories = async () => {
    const res = await categoryService.getListCategories();
    console.log(res);
  };

  useEffect(() => {
    getListCategories();
  });

  return <Table dataSource={dataSource} columns={columns} />;
};
