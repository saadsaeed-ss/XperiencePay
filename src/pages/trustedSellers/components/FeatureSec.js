import React from "react";
import { Container, Box, Typography } from "@mui/material";
import oneImg from "../../../assets/one.svg";
import twoImg from "../../../assets/two.svg";
import threeImg from "../../../assets/three.svg";
import fourImg from "../../../assets/four.svg";

const FeatureSec = () => {
  const items = [
    {
      title: "Verified Credentials",
      description:
        "Each seller on our platform undergoes a thorough verification process to ensure they meet our stringent criteria for reliability and trustworthiness. We verify their credentials, track record, and reputation to give you peace of mind when making a purchase.",
      icon: (
        <img src={oneImg} alt="Unparalleled Selection" width="64" height="64" />
      ),
    },
    {
      title: "Secure and Transparent Transactions",
      description:
        "Our platform leverages the immutability and security of blockchain technology. Smart contracts automate transactions, while escrow services safeguard funds, ensuring a secure and transparent experience for all parties involved.",
      icon: (
        <img
          src={twoImg}
          alt="Secure and Transparent Transactions"
          width="64"
          height="64"
        />
      ),
    },
    {
      title: "Global Reach and Opportunity",
      description:
        "Connect with a network of buyers and sellers spanning the world. XPP breaks down geographical barriers, opening a world of opportunities and maximizing your potential for profitable ventures.",
      icon: (
        <img
          src={threeImg}
          alt="Global Reach and Opportunity image"
          width="64"
          height="64"
        />
      ),
    },
    {
      title: "XPPUSD Stablecoin",
      description:
        "Conduct transactions with peace of mind using our stablecoin. XPPUSD mitigates the price volatility inherent to cryptocurrencies, offering stability and predictability to your purchases.",
      icon: <img src={fourImg} alt="Stablecoin" width="64" height="64" />,
    },
  ];

  return (
    <Container
      sx={{
        padding: "3% 0%",
        color: "#fff",
        fontFamily: '"Manrope", Helvetica',
        minWidth: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          padding: "0 2%",
        }}
      >
        {items.map((item, index) => (
          <Box
            key={index}
            sx={{
              width: { xs: "100%", md: "46%" }, // Adjust the width for responsiveness
              padding: "20px",
              marginBottom: "30px",
              color: "#fff",
              fontFamily: '"Manrope", Helvetica',
            }}
          >
            <Typography
              variant="h6"
              component="h3"
              sx={{
                fontSize: "20px",
                fontWeight: "600",
                fontFamily: '"Manrope", Helvetica',
                marginBottom: "20px",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column", // Align icon and title vertically
                gap: "30px", // Margin between icon and title
              }}
            >
              {item.icon}
              {item.title}
            </Typography>
            <Typography
              sx={{
                fontFamily: '"Manrope", Helvetica',
                fontSize: "16px",
              }}
            >
              {item.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default FeatureSec;
