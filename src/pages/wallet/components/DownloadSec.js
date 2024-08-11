import React from "react";
import { Box, Typography, Button, Card } from "@mui/material";
import { styled } from "@mui/system";
import Dimg from "../../../assets/DownloadSecImg.png";
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

const DownloadSec = ({ imageWidth = "100%" }) => {
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
            variant="h6"
            sx={{
              fontWeight: "bold",
              mb: 2,
              fontFamily: '"Manrope", Helvetica',
              fontSize: "1.6rem",
            }}
          >
            Download the XPP Wallet App!
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Manrope", Helvetica',
              fontSize: "16px",
              mb: 4,
            }}
          >
            Own your crypto holdings, manage your RWA investments, and
            experience the future of finance with a click with Xperience Pay
            Wallet! Download the app and discover a world of possibilities.
          </Typography>
          <a
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
            Wallet Cooming Soon!!
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
              src={Dimg}
              alt="Download the XPP Wallet App Today!"
              imageWidth={imageWidth}
            />
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default DownloadSec;
