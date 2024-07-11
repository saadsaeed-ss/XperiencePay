import React from "react";
import { styled } from "@mui/system";

const StyledText = styled("p")(
  ({ fontSize = "14px", fontColor = "white" }) => ({
    fontSize: fontSize,
    color: fontColor,
  })
);

export default StyledText;
