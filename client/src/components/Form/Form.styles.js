import React from "react";
import { styled } from "@mui/system";
import { Stack, TextField, Button } from "@mui/material";

export const FromContainer = styled(Stack)({
  flexDirection: "row",
  gap: "10px",
  maxWidth: "500px",
});

export const Input = styled((props) => (
  <TextField label="Enter YouTube video URL" size="small" {...props} />
))({
  flex: "1 1 auto",
});

export const AddButton = styled((props) => (
  <Button variant="contained" {...props} />
))({
  maxWidth: "100px",
  flex: "1 1 auto",
});
