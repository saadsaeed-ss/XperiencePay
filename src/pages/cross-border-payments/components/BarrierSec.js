import React from "react";
import { Box, Container, Typography } from "@mui/material";

const FeaturesSection = () => {
  return (
    <>
      <Box>
        <Typography
          variant="h2"
          sx={{
            fontSize: "30px",
            fontWeight: "700",
            fontFamily: '"Manrope", Helvetica',
            color: "#FDC500",
            padding: "20px 0 50px",
            textAlign: "center",
          }}
        >
          XPP offers the following benefits
        </Typography>
      </Box>
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
              variant="h3"
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
              Don't bother waiting for days to receive international wire
              transfers. XPP uses blockchain technology to make cross-border
              payments happen almost right away. So that recipients can get
              their hands on their money fast and without hassle.
            </Typography>
          </Box>

          <Box
            sx={{
              flex: 1,
            }}
          >
            <Typography
              variant="h3"
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
              People who transfer money internationally are always concerned
              about crypto price fluctuation. Therefore, XPP remediates this
              concern through XPPUSD stablecoin. XPPUSD stablecoin serves as the
              primary way of exchange for cross-border payments. It keeps the
              value of sent funds steady and easy to predict cutting down on
              currency risks and giving users peace of mind about their
              transfers.
            </Typography>
          </Box>

          <Box
            sx={{
              flex: 1,
            }}
          >
            <Typography
              variant="h3"
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
              XPP eliminates the need for middlemen and uses blockchain
              technology to offer lower transfer fees than traditional methods,
              enabling you to send more money to your preferred recipient.
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default FeaturesSection;
