import React from "react";
import { Box, Typography, Button, Card } from "@mui/material";
import { styled } from "@mui/system";
import Lock from "../../../assets/potentialLock.svg";
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

const JoinSec = ({ imageWidth = "100%" }) => {
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

          <a
            href="#"
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
            Explore the Xperience Pay WEB3 Marketplace
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
            href="#"
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
            Download XPP Wallet for iOS
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
            href="#"
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
            Download XPP Wallet for Android
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
            justifyContent: "center",
          }}
        >
          <Card sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
            <StyledCardMedia
              src={Lock}
              alt="Join the Xperience Pay WEB3 Marketplace Revolution"
              imageWidth={imageWidth}
            />
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default JoinSec;
