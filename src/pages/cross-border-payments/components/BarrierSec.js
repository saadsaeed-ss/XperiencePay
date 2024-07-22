import React from "react";
import { Box, Container, Typography } from "@mui/material";

const FeaturesSection = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to right, #FDC500, #3A5EFC)",
        py: 8,
        px: 2,
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          gap: 8,
          px: { xs: 2, md: 4 },
        }}
      >
        <Box
          sx={{
            flex: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "20px", md: "26px" },
              fontWeight: "bold",
              fontFamily: '"Manrope", Helvetica',
              color: "black",
              mb: 2,
            }}
          >
            Break Down Barriers
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "18px" },
              fontFamily: '"Manrope", Helvetica',
              color: "black",
              lineHeight: 1.4,
              fontWeight: "bold",
            }}
          >
            Forget waiting days for international wire transfers. XPP leverages
            the power of blockchain technology to facilitate near-instantaneous
            cross-border payments, settling transactions on the blockchain
            within minutes. Recipients can access their funds quickly and
            efficiently.
          </Typography>
        </Box>

        <Box
          sx={{
            flex: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "20px", md: "26px" },
              fontWeight: "bold",
              fontFamily: '"Manrope", Helvetica',
              color: "black",
              mb: 2,
            }}
          >
            Embrace Stability
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "18px" },
              fontFamily: '"Manrope", Helvetica',
              color: "black",
              lineHeight: 1.4,
              fontWeight: "bold",
            }}
          >
            The volatility of cryptocurrencies can be a concern for traditional
            cross-border transactions. XPP addresses this through its XPPUSD
            stablecoin. This acts as the primary medium of exchange for
            cross-border payments. This ensures that the value of transferred
            funds remains consistent and predictable, mitigating the risk of
            currency fluctuations and providing users with confidence and
            certainty in their transactions.
          </Typography>
        </Box>

        <Box
          sx={{
            flex: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "20px", md: "26px" },
              fontWeight: "bold",
              fontFamily: '"Manrope", Helvetica',
              color: "black",
              mb: 2,
            }}
          >
            Reduce Costs Significantly
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "18px" },
              fontFamily: '"Manrope", Helvetica',
              color: "black",
              lineHeight: 1.4,
              fontWeight: "bold",
            }}
          >
            XPP eliminates the need for intermediaries and leverages the
            efficiency of blockchain technology to offer significantly lower
            transaction fees compared to traditional methods, allowing you to
            send more of your money exactly where it needs to go.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturesSection;
