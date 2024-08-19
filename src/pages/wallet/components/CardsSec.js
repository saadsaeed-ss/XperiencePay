import React from "react";
import { Container, Box, Typography, Divider } from "@mui/material";
import { styled } from "@mui/system";

const GradientTitle = styled(Typography)({
  background: "linear-gradient(to right, #FDC500, #3A5EFC)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontWeight: "bold",
  fontSize: "36px",
});

const CardSec = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          width: "100%",
          padding: "1% 10%",
          color: "#fff",
          fontFamily: '"Manrope", Helvetica',
          marginTop: "100px",
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontSize: "30px",
            fontWeight: "700",
            fontFamily: '"Manrope", Helvetica',
            color: "#FDC500",
            marginBottom: "20px",
            textAlign: "center",
            marginBottom: "100px",
          }}
        >
          Benefits of XPP Wallet
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "40%" },
              padding: "40px",
              marginBottom: "30px",
              backgroundColor: "#1c1c1e",
              color: "#fff",
              backgroundClip: "padding-box",
              position: "relative",
              fontFamily: '"Manrope", Helvetica',
            }}
          >
            <GradientTitle variant="h3">
              Xperience Pay WEB3 Marketplace
            </GradientTitle>
            <Typography
              sx={{
                fontFamily: '"Manrope", Helvetica',
                fontSize: "16px",
                marginTop: "20px",
              }}
            >
              Use XPP Wallet to buy your real-world assets through XPPUSD or
              other cryptocurrencies. Experience rapid & easy transactions like
              never before with hassle-free fund transfers.
            </Typography>
          </Box>

          <Box
            sx={{
              width: { xs: "100%", md: "40%" },
              padding: "40px",
              marginBottom: "30px",
              backgroundColor: "#1c1c1e",
              color: "#fff",
              backgroundClip: "padding-box",
              position: "relative",
              fontFamily: '"Manrope", Helvetica',
            }}
          >
            <GradientTitle variant="h3">
              XPP Borderless Visa Business Card (XBVBC)
            </GradientTitle>
            <Typography
              sx={{
                fontFamily: '"Manrope", Helvetica',
                fontSize: "16px",
                marginTop: "20px",
              }}
            >
              Top up your XBVBC with XPPUSD from your XPP Wallet and turn your
              virtual currencies into actual spendable currency for everyday
              purchases. Take advantage of the flexibility of digital assets
              with global spending options.
            </Typography>
          </Box>
        </Box>
      </Container>

      <Divider
        sx={{
          width: "100%",
          height: "100%",
          background: "#ffffff33",
          marginTop: "3%",
          marginBottom: "10px",
        }}
      />
    </Box>
  );
};

export default CardSec;
