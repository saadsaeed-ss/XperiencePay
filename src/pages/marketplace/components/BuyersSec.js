import React from "react";
import { Container, Box, Typography } from "@mui/material";

const BuyersSection = () => {
  const items = [
    {
      title: "For Buyers",
      description: "",
      isTitle: true,
    },
    {
      title: "Detailed Asset Listings",
      description:
        "Make informed decisions with comprehensive information, including high-quality photos, detailed descriptions, and key metrics for each RWA.",
    },
    {
      title: "Seamless Acquisition Process",
      description:
        "Effortlessly acquire RWAs using your XPPUSD stablecoin or other supported cryptocurrencies within the secure Xperience Pay ecosystem.",
    },
    {
      title: "Secure Transactions",
      description:
        "Enjoy peace of mind knowing all transactions are facilitated through secure smart contracts on the blockchain, eliminating intermediaries and reducing the risk of fraud.",
    },
    {
      title: "Unparalleled Selection of RWAs",
      description:
        "Explore a meticulously chosen collection of RWAs, carefully selected to cater to your specific preferences.",
    },
    {
      title: "Track Your Portfolio",
      description:
        "Monitor your crypto holdings conveniently within your XPP Wallet, keeping a watchful eye on their performance and value.",
    },
  ];

  return (
    <Container
      sx={{
        padding: "3% 5%",
        color: "#fff",
        fontFamily: '"Manrope", Helvetica',
        marginTop: "100px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {items.map((item, index) => (
          <Box
            key={index}
            sx={{
              width: { xs: "100%", md: "28%" }, // Adjust the width for responsiveness
              padding: "20px",
              marginBottom: "30px",
              borderRadius: "8px",
              border: item.isTitle ? "none" : "1px solid #333",
              background: item.isTitle
                ? "linear-gradient(to right, #FDC500, #3A5EFC)"
                : "#1c1c1e",
              color: item.isTitle ? "#fff" : "#fff",
              textAlign: "left",
              display: item.isTitle ? "flex" : "block",
              alignItems: item.isTitle ? "center" : "initial",
              justifyContent: item.isTitle ? "center" : "initial",
              position: "relative", // Required for the pseudo-element
              fontFamily: '"Manrope", Helvetica',
              "&:hover:before": !item.isTitle && {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: "8px",
                padding: "1px", // Space for gradient border
                background: "linear-gradient(to right, #fdd835, #3A5EFC)", // Change background on hover for all items
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              },
            }}
          >
            <Typography
              variant={item.isTitle ? "h4" : "h6"}
              component={item.isTitle ? "h2" : "h3"}
              sx={{
                fontSize: item.isTitle ? "36px" : "20px",
                fontWeight: item.isTitle ? "700" : "600",
                fontFamily: '"Manrope", Helvetica',
                color: item.isTitle ? "#fff" : "#FDC500",
                marginBottom: item.isTitle ? "0" : "10px",
              }}
            >
              {item.title}
            </Typography>
            {!item.isTitle && (
              <Typography
                sx={{
                  fontFamily: '"Manrope", Helvetica',
                  fontSize: "16px",
                }}
              >
                {item.description}
              </Typography>
            )}
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default BuyersSection;
