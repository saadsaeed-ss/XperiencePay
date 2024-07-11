import React from "react";
import { Grid, Typography, Button, Card, Box } from "@mui/material";
import { styled } from "@mui/system";
import XppSecImg from "../../../assets/xppgrad.svg";

const StyledCardMedia = styled("img")(({ theme, imageWidth }) => ({
  width: imageWidth,
  display: "block",
  margin: "0 auto",
  [theme.breakpoints.down("sm")]: {
    width: "100%", // Increase width on small screens
    marginTop: "50px",
  },
}));

const XppSec = ({ imageWidth = "80%" }) => {
  return (
    <Box
      sx={{
        padding: "5%",
        borderBottom: "1px solid gray",
      }}
    >
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mb: 2,
              fontFamily: '"Manrope", Helvetica',
              fontSize: "1.6rem",
            }}
          >
            Experience the future of asset transactions with Xperience Pay (XPP)
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 2,
              fontFamily: '"Manrope", Helvetica',
              fontSize: "16px",
            }}
          >
            With Xperience Pay, buying RWAs is a secure, efficient, and
            empowering experience.
            <br /> Sign up today and join our global community of buyers and
            sellers revolutionizing the way we transact real-world assets.
          </Typography>

          <Button
            variant="contained"
            color="primary"
            size="medium"
            sx={{
              fontWeight: 700,
              textTransform: "none",
              fontFamily: '"Manrope", Helvetica',
              backgroundColor: "#FDC500",
              color: "#0F1114",
              marginTop: "20px",
              "&:hover": {
                backgroundColor: "#e6b300",
              },
            }}
          >
            XPP Marketplace
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
            <StyledCardMedia
              src={XppSecImg}
              alt="Experience the future of asset transactions 
with Xperience Pay (XPP)"
              imageWidth={imageWidth}
            />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default XppSec;
