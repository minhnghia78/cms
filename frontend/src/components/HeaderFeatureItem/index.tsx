import React from "react";
import type { HeaderFeatureItemProps } from "./feature.type";
import { Link, styled } from "@mui/material";

const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.dark,
  padding: theme.spacing(1, 1.5),
  fontSize: '0.95rem',
  fontWeight: 'normal',
  '&:hover': {
    color: theme.palette.warning.main,
    textDecoration: 'underline'
  }
}));

const HeaderFeatureItem = ({ featureUrl, label }: HeaderFeatureItemProps) => {
  return (
    <StyledLink href={featureUrl} underline="none">
      {label}
    </StyledLink>
  );
};

export default HeaderFeatureItem;
