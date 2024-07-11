import React from "react";
import { Box, Container, Typography, Divider } from "@mui/material";
import Image from "../../../assets/trsutedSellerHeader.svg";

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
                Trusted Sellers
              </Typography>
              <Typography
                sx={{
                  fontSize: { sx: "14px", md: "18px" },
                  lineHeight: "170%",
                  fontFamily: '"Manrope", Helvetica',
                  maxWidth: { xs: "100%", md: "100%" },
                }}
              >
                The Xperience Pay is committed to fostering a secure and
                reliable environment for all participants.
              </Typography>
              <Typography
                sx={{
                  fontSize: { sx: "14px", md: "18px" },
                  color: "#FDC500",
                  lineHeight: "170%",
                  fontFamily: '"Manrope", Helvetica',
                  maxWidth: { xs: "100%", md: "100%" },
                  fontWeight: "600",
                }}
              >
                We have curated a select group of trusted sellers who meet our
                rigorous standards of quality, integrity, and professionalism.
              </Typography>
              <Typography
                sx={{
                  fontSize: { sx: "14px", md: "18px" },
                  lineHeight: "170%",
                  fontFamily: '"Manrope", Helvetica',
                  maxWidth: { xs: "100%", md: "100%" },
                }}
              >
                Trusted Seller fosters transparency within the marketplace.
                Buyers can feel confident knowing that the sellers they interact
                with have gone through a verification process.
              </Typography>
              <Typography
                sx={{
                  fontSize: { sx: "14px", md: "18px" },
                  lineHeight: "170%",
                  fontFamily: '"Manrope", Helvetica',
                  maxWidth: { xs: "100%", md: "100%" },
                }}
              >
                Verification helps us deter individuals with malicious intent
                from listing fake or illegitimate RWAs. By confirming a seller's
                identity and basic information, we create a safer marketplace
                for buyers and minimize the risk of fraudulent transactions. 
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
            <img src={Image} style={{ width: "90%" }} />
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
