import React from "react";
import { Box, Typography, Button, Card } from "@mui/material";
import { styled } from "@mui/system";
import Globe from "../../../assets/Bigglobe.svg";
import arrowForward from "../../../assets/arrow_forward.svg";

const StyledCardMedia = styled("img")(({ theme, imageWidth }) => ({
  width: imageWidth,
  display: "block",
  margin: "0 auto",
  [theme.breakpoints.down("sm")]: {
    width: "100%", // Increase width on small screens
    marginTop: "50px",
  },
}));

const XppSec = ({ imageWidth = "100%" }) => {
  return (
    <Box
      sx={{
        padding: "5% 10%",
        marginBottom: "50px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center", // Center content horizontally
          alignItems: "center", // Center content vertically
          gap: 4, // Adds spacing between the two inner boxes
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "75%" },
            paddingRight: { xs: 0, md: 2 },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mb: 2,
              fontFamily: '"Manrope", Helvetica',
              fontSize: "1.6rem",
            }}
          >
            Join the Xperience Pay WEB3 Marketplace Revolution
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 2,
              fontFamily: '"Manrope", Helvetica',
              fontSize: "16px",
            }}
          >
            Explore a new chapter in the world of RWAs. Open a world of
            possibilities and discover the potential of real-world assets.
          </Typography>

          <a
            href="./about-us"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              fontWeight: 700,
              fontFamily: '"Manrope", Helvetica',
              color: "#FDC500",
              textDecoration: "none",
              marginTop: "30px",
            }}
          >
            Start Exploring
            <img
              src={arrowForward}
              style={{
                width: "16px",
                height: "16px",
                marginLeft: "15px", // Adjust spacing as needed
              }}
              alt="Arrow Icon"
            />
          </a>
          <a
            href="mailto:info@xperiencepay.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              fontWeight: 700,
              fontFamily: '"Manrope", Helvetica',
              color: "#FDC500",
              textDecoration: "none",
              marginTop: "20px",
            }}
          >
            Contact our support team
            <img
              src={arrowForward}
              style={{
                width: "16px",
                height: "16px",
                marginLeft: "15px", // Adjust spacing as needed
              }}
              alt="Arrow Icon"
            />
          </a>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            display: "flex",
            justifyContent: "end",
          }}
        >
          <Card sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
            <StyledCardMedia
              src={Globe}
              alt="Join the Xperience Pay WEB3 Marketplace Revolution"
              imageWidth={imageWidth}
            />
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default XppSec;
