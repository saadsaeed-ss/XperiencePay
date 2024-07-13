import React from "react";
import { Box, Container, Typography, Divider } from "@mui/material";
import Image from "../../../assets/marketplaceHeader.svg";

const Header = () => {
  return (
    <>
      <Box
        sx={{
          mt: 5,
          padding: "50px 0",
        }}
      >
        <Container
          sx={{
            px: { xs: "5%", md: "0%" },
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
                padding: "5%",
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
                  Xperience Pay WEB3 Marketplace
                </Typography>
                <Typography
                  sx={{
                    fontSize: { sx: "14px", md: "18px" },
                    lineHeight: "170%",
                    fontFamily: '"Manrope", Helvetica',
                    maxWidth: { xs: "100%", md: "100%" },
                  }}
                >
                  The Xperience Pay WEB3 Marketplace is your gateway to a
                  dynamic world of real-world assets (RWAs). We are breaking
                  down barriers and empowering individuals globally to
                  participate in a curated selection of high-value RWAs using
                  cryptocurrency. Xperience Pay offers a seamless experience
                  that prioritizes trust, security, and efficiency.
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
                  Our marketplace allows you to browse and acquire a diverse
                  range of RWAs, from luxurious real estate and exquisite art to
                  precious metals and trending collectibles.
                </Typography>
              </Box>
            </Box>

            <Box
              flex={1}
              display="flex"
              justifyContent={{ xs: "center", md: "flex-end" }}
              sx={{
                width: { xs: "100%", md: "50%" }, // Change the width for large screens
                mt: { xs: 4, md: 0 },
              }}
            >
              <img src={Image} style={{ width: "100%", maxWidth: "650px" }} />{" "}
              {/* Limit the max width of the image */}
            </Box>
          </Box>
        </Container>
      </Box>
      <Divider
        sx={{
          width: "100%",
          height: "100%",
          background: "rgba(204, 204, 204, 1)",
          marginTop: "5%",
        }}
      />
    </>
  );
};

export default Header;
