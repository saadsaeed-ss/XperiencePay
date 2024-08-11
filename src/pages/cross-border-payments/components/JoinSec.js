import React from "react";
import { Box, Typography, Button, Card } from "@mui/material";
import { styled } from "@mui/system";
import joinSecCross from "../../../assets/joinSecCross.png";
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
          justifyContent: "space-between", // Center content horizontally
          alignItems: "center", // Center content vertically
          gap: 4, // Adds spacing between the two inner boxes
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            paddingRight: { xs: 0, md: 2 },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              mb: 2,
              fontFamily: '"Manrope", Helvetica',
              fontSize: "1.6rem",
            }}
          >
            Get on board with the Xperience Pay movement and revolutionize how
            you handle your money across borders!
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Manrope", Helvetica',
              fontSize: "16px",
              mb: 4,
            }}
          >
            Are you ready to experience the future of cross-border payments and
            crypto-based purchases?
          </Typography>
          <a
            href="./stablecoin"
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
            Learn More About XPPUSD Stablecoin
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
            width: { xs: "100%", md: "30%" },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Card sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
            <StyledCardMedia
              src={joinSecCross}
              alt="Join the Xperience Pay revolution"
              imageWidth={imageWidth}
            />
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default JoinSec;
