import React from "react";
import { Container, Box, Typography, Divider } from "@mui/material";
import cryptoRewardsIcon from "../../../assets/cryptoRewards.png";
import uncappedRewardsIcon from "../../../assets/uncappedRewards.png";
import walletIntegrationIcon from "../../../assets/walletIntegration.png";
import instantActivationIcon from "../../../assets/instantActivation.png";
import capitalGainsIcon from "../../../assets/capitalGains.png";
import XppxImg from "../../../assets/xpp-x.png";

const BenefitSec = () => {
  const items = [
    {
      title: "",
      description: "",
      icon: (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <img
            src={XppxImg}
            alt="Xpp Blur Image"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "8px",
              marginTop: "8px",
            }}
          />
        </Box>
      ),
    },
    {
      title: "Earn Crypto Rewards in Real-Time",
      description:
        "Unlike traditional rewards cards, the XPPBVBC rewards you with cryptocurrency instantly as you make purchases. This means you can benefit from any potential price increases in your chosen crypto from the moment you spend. Choose from over 60 popular options, including Bitcoin, Ethereum, and Dogecoin, to customize your rewards strategy.",
      icon: (
        <img
          src={cryptoRewardsIcon}
          alt="Earn Crypto Rewards in Real-Time"
          width="64"
          height="64"
        />
      ),
    },
    {
      title: "Uncapped Rewards on Everyday Spending",
      description:
        "Enjoy an attractive rewards structure with the XPPBVBC. Earn up to 5% back on dining purchases, 3% back on groceries, and 2% back on all other eligible transactions. There's no cap on the amount of rewards you can earn, allowing you to maximize your return on everyday spending.",
      icon: (
        <img
          src={uncappedRewardsIcon}
          alt="Uncapped Rewards on Everyday Spending"
          width="64"
          height="64"
        />
      ),
    },
    {
      title: "Seamless Integration with XPP Wallet",
      description:
        "The XPPBVBC seamlessly integrates with your Xperience Pay Wallet. As you earn rewards, they are automatically deposited into your XPP account, providing a secure and convenient way to store and manage your growing crypto portfolio.",
      icon: (
        <img
          src={walletIntegrationIcon}
          alt="Seamless Integration with XPP Wallet"
          width="64"
          height="64"
        />
      ),
    },
    {
      title: "Instant Card Activation and Use",
      description:
        "Get started quickly and easily! Once your XPPBVBC application is approved, you can instantly add it to your XPP mobile wallet and begin using it for purchases. No waiting for physical cards to arrive – enjoy the convenience of immediate spending power.",
      icon: (
        <img
          src={instantActivationIcon}
          alt="Instant Card Activation and Use"
          width="64"
          height="64"
        />
      ),
    },
    {
      title: "Minimize Capital Gains Impact",
      description:
        "For users concerned about capital gains taxes, funding your XPPBVBC with XPPUSD offers a strategic advantage. Since XPPUSD is a stablecoin pegged to the US dollar, converting it to fund your card minimizes potential capital gains tax implications compared to using other cryptocurrencies.",
      icon: (
        <img
          src={capitalGainsIcon}
          alt="Minimize Capital Gains Impact"
          width="64"
          height="64"
        />
      ),
    },
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          width: "100%",
          padding: "3% 10%",
          color: "#fff",
          fontFamily: '"Manrope", Helvetica',
          marginTop: "100px",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontSize: { xs: "35px", md: "48px" },
              fontWeight: "700",
              fontFamily: '"Manrope", Helvetica',
              color: "#FDC500",
              marginBottom: "100px",
            }}
          >
            Benefits for Businesses
          </Typography>
        </Box>

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
                width: { xs: "100%", md: "28%" },
                padding: "20px",
                marginBottom: "30px",
                borderRadius: "8px",
                border: "1px solid",
                borderColor: "#333",
                backgroundColor: "#1c1c1e",
                color: "#fff",
                backgroundClip: "padding-box",
                position: "relative",
                fontFamily: '"Manrope", Helvetica',
                "&:hover:before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  borderRadius: "8px",
                  padding: "1px",
                  background: "linear-gradient(to right, #fdd835, #3A5EFC)",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                },
              }}
            >
              <Typography
                variant="h6"
                component="h3"
                sx={{
                  fontSize: item.title ? "16px" : "inherit",
                  fontWeight: item.title ? "600" : "inherit",
                  fontFamily: '"Manrope", Helvetica',
                  color: item.title ? "#FDC500" : "inherit",
                  marginBottom: item.title ? "10px" : "0",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  gap: item.title ? "20px" : "inherit",
                }}
              >
                {item.icon}
                {item.title}
              </Typography>
              <Typography
                sx={{
                  fontFamily: '"Manrope", Helvetica',
                  fontSize: item.description ? "16px" : "inherit",
                }}
              >
                {item.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>

      <Divider
        sx={{
          width: "100%",
          height: "100%",
          background: "#ffffff33",
          marginTop: "3%",
          marginBottom: "10px",
        }}
      />
    </Box>
  );
};

export default BenefitSec;
