import React from "react";
import { styled } from "@mui/system";
import { Stack, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export const ItemContainer = styled(Stack)({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  border: "1px solid",
  padding: "5px",
  minHeight: "40px",
  minWidth: "250px",
  maxWidth: "400px",
});

export const DetailsContainer = styled(Stack)({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "10px",
});

export const Title = styled((props) => (
  <Typography component="span" {...props} />
))({
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
});

export const Length = styled((props) => (
  <Typography component="span" {...props} />
))({});

export const RemoveButton = styled((props) => (
  <IconButton {...props}>
    <DeleteIcon />
  </IconButton>
))({});
