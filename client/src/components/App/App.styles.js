import { styled } from "@mui/system";
import { Stack } from "@mui/material";

export const MainLayout = styled(Stack)({
  flexDirection: "row",
  justifyContent: "center",
  gap: "30px",
  margin: "50px",
});

export const PlayListContainer = styled(Stack)({
  gap: "10px",
  height: "390px",
});
