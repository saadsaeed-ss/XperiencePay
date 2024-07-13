import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/system";
import EscrowImg from "../../../assets/EscrowImg.png";
import HandshakeIcon from "../../../assets/Handshake.png";

const GradientBox = styled(Box)(({ theme }) => ({
  background: "radial-gradient(circle at 10% 10%, #3A5EFC 0%, #000000 50%)",
  borderRadius: "8px",
  padding: theme.spacing(5),
  textAlign: "left",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
}));

const BackgroundBox = styled(Box)(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(5),
  borderRadius: "8px",
  color: "#fff",
  background: "#000",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100%",
  width: "100%",
}));

const ImageBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  right: 20,
  width: "250px",
  height: "auto",
  [theme.breakpoints.down("md")]: {
    width: "150px",
    right: 20,
  },
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const EscrowSection = () => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        padding: isSmallScreen
          ? "80px 20px 30px"
          : isMediumScreen
          ? "100px 40px 40px"
          : "160px 80px 60px",
        color: "#fff",
      }}
    >
      <Grid container spacing={4} sx={{ height: "100%" }}>
        <Grid
          item
          xs={12}
          md={4}
          sx={{ mb: isSmallScreen || isMediumScreen ? 4 : 0 }}
        >
          <GradientBox
            sx={{
              padding: isSmallScreen
                ? theme.spacing(3)
                : isMediumScreen
                ? theme.spacing(4)
                : theme.spacing(5),
              height: isMediumScreen ? "100%" : "auto", // Ensure equal height on medium screens
            }}
          >
            <Box
              component="img"
              src={HandshakeIcon}
              alt="Handshake Icon"
              sx={{
                width: isSmallScreen ? 40 : isMediumScreen ? 50 : 60,
                height: isSmallScreen ? 40 : isMediumScreen ? 50 : 60,
                marginBottom: isSmallScreen ? 2 : 20,
              }}
            />
            <Typography
              fontSize={{ xs: "36px", md: "80px" }}
              sx={{ fontWeight: "semi-bold" }}
            >
              55+
            </Typography>
            <Typography variant="body1">Trusted Partners</Typography>
          </GradientBox>
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          sx={{ display: "flex", mb: isSmallScreen || isMediumScreen ? 4 : 0 }}
        >
          <BackgroundBox
            sx={{
              padding: isSmallScreen
                ? theme.spacing(3)
                : isMediumScreen
                ? theme.spacing(4)
                : theme.spacing(5),
              height: isMediumScreen ? "100%" : "auto", // Ensure equal height on medium screens
              mt: isSmallScreen || isMediumScreen ? 4 : 0, // Add space between sections on large screens
            }}
          >
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "left",
                mt: -2, // Adjust the margin-top to place the heading a bit higher
              }}
            >
              <Typography
                component="span"
                fontSize={{ xs: "24px", md: "48px" }} // Make the heading smaller
                sx={{ fontWeight: "bold", mb: 2 }}
              >
                Our escrow account enables you to buy with confidence.
              </Typography>
              <Button
                variant="text"
                size="small"
                sx={{
                  textTransform: "none",
                  alignSelf: "flex-start",
                  color: "#FDC500",
                }}
              >
                We keep your fund safe
              </Button>
            </Box>
            <ImageBox>
              <Box
                component="img"
                src={EscrowImg}
                alt="Escrow"
                sx={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </ImageBox>
          </BackgroundBox>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EscrowSection;
