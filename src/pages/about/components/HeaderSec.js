import React from "react";
import { Box, Container, Typography, Divider } from "@mui/material";
import Image from "../../../assets/AboutHeaderSecImg.svg";

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
                About Xperience Pay
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
                Xperience Pay (XPP) is a pioneering WEB3 marketplace built upon
                the transformative power of blockchain technology. We're on a
                mission to revolutionize the financial landscape by leveraging
                the power of blockchain technology and cryptocurrencies.XPP is
                committed to creating an ecosystem that empowers individuals and
                businesses to seamlessly transact real-world assets (RWAs) using
                cryptocurrencies.
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
                We are dedicated to building a trusted and decentralized
                marketplace where users can confidently buy, sell, and manage
                real-world assets using our suite of products and services.
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
          background: "rgba(204, 204, 204, 1)",
          marginTop: "5%",
          marginBottom: "10px",
        }}
      />
    </Box>
  );
};

export default Header;
