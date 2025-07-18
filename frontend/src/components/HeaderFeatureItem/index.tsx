import React from "react";
import type { HeaderFeatureItemProps } from "./feature.type";
import { Typography } from "antd";
import styles from "./index.module.scss";

const { Link } = Typography;

const HeaderFeatureItem = ({ featureUrl, label }: HeaderFeatureItemProps) => {
  return (
    <Link 
      href={featureUrl}
      className={styles.headerFeatureLink}
    >
      {label}
    </Link>
  );
};

export default HeaderFeatureItem;
