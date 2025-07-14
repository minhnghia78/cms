import React from "react";
import HeaderFeatureItem from "../HeaderFeatureItem";
import { HeaderFeaturesProps } from "./features.type";
import { Stack, Box, styled } from "@mui/material";

const FeatureContainer = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.grey[200],
  borderBottom: `1px solid ${theme.palette.grey[400]}`
}));

const InnerContainer = styled(Stack)(({ theme }) => ({
  maxWidth: theme.breakpoints.values.xl,
  margin: '0 auto',
  padding: theme.spacing(0, 2),
  paddingTop: theme.spacing(0.75),
  paddingBottom: theme.spacing(0.75),
  [theme.breakpoints.up('sm')]: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  [theme.breakpoints.up('lg')]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  }
}));

const HeaderFeatures = ({ items }: HeaderFeaturesProps) => {
  return (
    <FeatureContainer direction="row">
      <InnerContainer direction="row" spacing={1}>
        {items.map((item) => (
          <HeaderFeatureItem
            key={item.key}
            featureUrl={item.featureUrl}
            label={item.label}
          />
        ))}
      </InnerContainer>
    </FeatureContainer>
  );
};

export default HeaderFeatures;
