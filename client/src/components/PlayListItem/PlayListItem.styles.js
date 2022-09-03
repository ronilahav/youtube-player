import React from "react";
import { styled } from "@mui/system";
import { Stack, Typography } from "@mui/material";

export const ItemContainer = styled(Stack)({
  flexDirection: "row",
  justifyContent: "space-between",
});

export const Title = styled((props) => (
  <Typography component="span" {...props} />
))({});

export const Length = styled((props) => (
  <Typography component="span" {...props} />
))({});
