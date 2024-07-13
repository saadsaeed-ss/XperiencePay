import React from "react";
import { Box, Container, Typography } from "@mui/material";
import StyledText from "../../../shared/components/StyledText";

const GradientText = ({ children }) => {
  return (
    <Box
      component="span"
      fontSize={{ xs: "28px", md: "48px" }}
      fontWeight={900}
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
    <Container maxWidth="100%" sx={{ px: { xs: "5%", md: "5%" }, py: "7%" }}>
      {" "}
      <Typography
        gutterBottom
        variant="h3"
        sx={{
          fontFamily: '"Manrope", Helvetica',
          fontSize: {
            xs: "28px", // small screen
            sm: "38px", // medium screen
            md: "48px", // large screen
          },
          fontWeight: "bold",
        }}
      >
        Seamlessly transact real-world assets (RWAs)
      </Typography>
      <GradientText> Using Cryptocurrencies</GradientText>
    </Container>
  );
};

export default HeaderText;
