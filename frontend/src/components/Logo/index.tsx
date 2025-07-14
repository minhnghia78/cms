import React from "react";
import type { LogoProps } from "./logo.type";
import { Stack, styled } from "@mui/material";

const LogoContainer = styled(Stack)(({ theme }) => ({
  display: 'flex',
  height: '50%',
  padding: theme.spacing(0.75)
}));

const Logo = ({ imgUrl }: LogoProps) => {
  return (
    <LogoContainer direction="row">
      <img src={imgUrl} alt="Logo" />
    </LogoContainer>
  );
};

export default Logo;
