import React from "react";
import { Container, Box, Typography } from "@mui/material";
import VisionSecBG from "../../../assets/visionSecBG.png";

const VisionSection = () => {
  return (
    <Container
      sx={{
        padding: "7% 5%",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          position: "relative",
          padding: { xs: "10% 5%", md: "7% 5%" }, // Responsive padding
          backgroundImage: `url(${VisionSecBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",

          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: "12px",
            padding: "1px", // adjust this value to change the thickness of the border
            background: "linear-gradient(to right, #fdd835, #3A5EFC)",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "destination-out",
            maskComposite: "exclude",
          },
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{
            marginBottom: "4%",
            fontSize: "20px",
            fontWeight: "600",
            fontFamily: '"Manrope", Helvetica',
            color: "#FDC500",
          }}
        >
          OUR VISION
        </Typography>
        <Typography
          sx={{
            fontFamily: '"Manrope", Helvetica',
            fontSize: "18px",
          }}
        >
          Our vision is to create a borderless financial ecosystem where anyone,
          anywhere in the world, can access and benefit from a wide range of
          real-world assets using cryptocurrencies. We envision providing
          innovative solutions that enable frictionless transactions, promote
          financial inclusion, and drive economic empowerment. We aim to bridge
          the gap between the traditional finance world and the dynamism of the
          crypto market.
        </Typography>
      </Box>
    </Container>
  );
};

export default VisionSection;
