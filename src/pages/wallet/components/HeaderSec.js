import React from "react";
import { Box, Container, Typography, Divider } from "@mui/material";
import Image from "../../../assets/walletHeaderImg.svg";

const Header = () => {
  return (
    <Box
      sx={{
        mt: 5,
        padding: "32px 0 0 0",
      }}
    >
      <Container
        sx={{
          px: { xs: "5%", md: "5%" },
          minWidth: "100%",
          py: 4,
        }}
      >
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Box
            flex={1}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
              mb: { xs: 4, md: 0 },
              gap: { xs: "20px", md: "40px" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: "8px", md: "16px" },
                alignItems: { xs: "center", md: "flex-start" },
              }}
            >
              <Typography
                gutterBottom
                sx={{
                  fontSize: { xs: "48px", md: "64px" },
                  fontWeight: "bold",
                  fontFamily: '"Manrope", Helvetica',
                  color: "white",
                  lineHeight: 1.1,
                }}
              >
                XPP Wallet
              </Typography>
              <Typography
                gutterBottom
                sx={{
                  fontSize: { sx: "14px", md: "18px" },
                  lineHeight: "170%",
                  fontFamily: '"Manrope", Helvetica',
                  maxWidth: { xs: "100%", md: "100%" },
                }}
              >
                The Xperience Pay Wallet (XPP Wallet) is your essential
                companion for navigating the exciting world of cryptocurrency
                and real-world assets (RWA) within the Xperience Pay ecosystem.
                Xperience Pay Wallet is designed with simplicity, security, and
                convenience in mind. This user-friendly mobile app acts as your
                secure gateway to holding and managing your XPPUSD stablecoin.
                It seamlessly integrates with the Xperience Pay WEB3
                Marketplace, allowing you to effortlessly convert your crypto
                holdings into XPPUSD for smooth transactions.
              </Typography>
              <Typography
                sx={{
                  fontSize: { sx: "14px", md: "18px" },
                  color: "#FDC500",
                  lineHeight: "170%",
                  fontFamily: '"Manrope", Helvetica',
                  maxWidth: { xs: "100%", md: "100%" },
                }}
              >
                The XPP Wallet empowers you to take control of your crypto
                holdings and interact with decentralized applications (DApps)
                seamlessly. The XPP Wallet ensures a smooth and efficient
                experience, making it the go-to solution for users looking to
                navigate the world of decentralized finance with confidence.
              </Typography>
            </Box>
          </Box>

          <Box
            flex={1}
            display="flex"
            justifyContent={{ xs: "center", md: "flex-end" }}
            sx={{
              width: { xs: "100%", md: "auto" },
              mt: { xs: 4, md: 0 },
            }}
          >
            <img src={Image} style={{ width: "80%" }} />
          </Box>
        </Box>
      </Container>
      <Divider
        sx={{
          width: "100%",
          height: "100%",
          background: "#ffffff33",
          marginTop: "5%",
          marginBottom: "10px",
        }}
      />
    </Box>
  );
};

export default Header;
