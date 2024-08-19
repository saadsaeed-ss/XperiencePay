import React from "react";
import { Box, Container, Typography, Divider } from "@mui/material";
import Image from "../../../assets/worksHeader.svg";

const Header = () => {
  return (
    <>
      <Box
        sx={{
          mt: 5,
          padding: "75px 0 0 0",
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
                  variant="h1"
                  sx={{
                    fontSize: { xs: "48px", md: "64px" },
                    fontWeight: "bold",
                    fontFamily: '"Manrope", Helvetica',
                    color: "white",
                    lineHeight: 1.1,
                  }}
                >
                  How Xperience Pay Works
                </Typography>
                <Typography
                  sx={{
                    fontSize: { sx: "14px", md: "18px" },
                    lineHeight: "170%",
                    fontFamily: '"Manrope", Helvetica',
                    maxWidth: { xs: "100%", md: "100%" },
                  }}
                >
                  Xperience Pay XPP enables you to purchase real-world assets
                  RWAs with cryptocurrency. Our simple web3 marketplace allows
                  you to make crypto-based purchases and quickly get your
                  desired asset by following our simple steps.
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
