import React from "react";
import { Box, Container, Typography, Divider } from "@mui/material";
import Image from "../../../assets/standardSec.svg";

const StandardSec = () => {
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
                  fontSize: { xs: "20px", md: "36px" },
                  fontWeight: "bold",
                  fontFamily: '"Manrope", Helvetica',
                  color: "white",
                  lineHeight: 1.1,
                }}
              >
                ERC-20 standards
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
                XPPUSD is built on the Ethereum network according to ERC-20
                standards. XPPUSD boasts compatibility with a wide range of
                decentralized applications (DApps) and cryptocurrency exchanges.
                This compatibility enhances the liquidity and usability of
                XPPUSD.
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
                This allows users to seamlessly transact and exchange the
                stablecoin across various platforms.
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
          background: "#ffffff33",
          marginTop: "5%",
          marginBottom: "10px",
        }}
      />
    </Box>
  );
};

export default StandardSec;
