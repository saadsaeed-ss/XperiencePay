import React from "react";
import { Box } from "@mui/material";
import StyledText from "../../../shared/components/StyledText";

const GradientText = ({ children }) => {
  return (
    <Box
      component="span"
      sx={{
        background: "linear-gradient(90deg, #FFD700, #0000FF)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {children}
    </Box>
  );
};

const HeaderText = () => {
  return (
    <Box
      sx={{
        padding: {
          xs: "60px 30px 20px", // small screen
          sm: "100px 50px 40px", // medium screen
          md: "120px 70px 50px", // large screen
        },
      }}
    >
      <StyledText
        sx={{
          fontSize: {
            xs: "28px", // small screen
            sm: "38px", // medium screen
            md: "48px", // large screen
          },
          fontWeight: "bold",
        }}
      >
        Seamlessly transact real-world assets (RWAs)
        <Box
          component="span"
          sx={{
            display: {
              xs: "none", // hide line break on small screen
              sm: "none", // hide line break on medium screen
              md: "block", // show line break on large screen
            },
          }}
        />
        <GradientText> Using Cryptocurrencies</GradientText>
      </StyledText>
    </Box>
  );
};

export default HeaderText;
