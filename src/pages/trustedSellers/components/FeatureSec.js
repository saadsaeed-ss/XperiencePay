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
        "We make sure every seller we connect with is both a reliable and trustworthy supplier through our stringent verification process. We look at their credentials, track record, and reputation to give you peace of mind when doing crypto-based purchases.",
      icon: (
        <img src={oneImg} alt="Unparalleled Selection" width="64" height="64" />
      ),
    },
    {
      title: "Secure and Transparent Transactions",
      description:
        "Our platform uses blockchain technology to keep things safe and secure. Smart contracts automate transactions, and escrow keeps your money safe so everyone has a secure and transparent experience.",
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
        "Get in touch with the buyers and sellers from all over the world. XPP helps you meet people from anywhere giving you more chances to make money.",
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
        "Use XPPUSD Stablecoin to buy things without worry. XPPUSD eliminates the risk of price volatility like other cryptocurrencies, offering stability and predictability to your crypto-based purchases.",
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
              variant="h2"
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
