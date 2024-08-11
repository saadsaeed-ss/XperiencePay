import React from "react";
import { Container, Box, Typography, Divider } from "@mui/material";
import AdvancedEncryptionIcon from "../../../assets/AdvancedEncryption.svg";
import MultiAssetSupportIcon from "../../../assets/MultiAssetSupport.svg";
import InteroperabilityIcon from "../../../assets/Interoperability.svg";
import SecureTransactionsIcon from "../../../assets/SecureTransactions.svg";

const FeatureSec = () => {
  const items = [
    {
      title: "Advanced Encryption",
      description:
        "We are committed to protecting your data. Therefore, XPP Wallet is designed to protect your data and contents. This gives a sense of security against unauthorized access and malicious attacks.",
      icon: (
        <img
          src={AdvancedEncryptionIcon}
          alt="Advanced Encryption"
          width="64"
          height="64"
        />
      ),
    },
    {
      title: "Multi-Asset Support",
      description:
        "The XPP Wallet supports multiple cryptocurrencies BTC & ETH to EUR, and digital assets. Consolidates all your disparate investments into one place, so you can manage and track everything in the same spot.",
      icon: (
        <img
          src={MultiAssetSupportIcon}
          alt="Multi-Asset Support"
          width="64"
          height="64"
        />
      ),
    },
    {
      title: "Interoperability with DApps",
      description:
        "Take full advantage of decentralized finance (Defi) with extensive interoperability. With the XPP Wallet, you can connect with various DApps on the Ethereum blockchain, giving access to various financial services and products right from your wallet.",
      icon: (
        <img
          src={InteroperabilityIcon}
          alt="Interoperability with DApps"
          width="64"
          height="64"
        />
      ),
    },
    {
      title: "Secure Transactions",
      description:
        "Two-factor Authentication (2FA) and Biometric authentication are available to help you keep your assets safe. We have implemented robust security measures, significantly reducing unauthorized transaction initiation risks.",
      icon: (
        <img
          src={SecureTransactionsIcon}
          alt="Secure Transactions"
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
            sx={{
              fontSize: "30px",
              fontWeight: "700",
              fontFamily: '"Manrope", Helvetica',
              color: "#FDC500",
              marginBottom: "20px",
            }}
          >
            Feature-Rich Digital Asset Custody
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Manrope", Helvetica',
              fontSize: "18px",
              marginBottom: "50px",
            }}
          >
            XPP Wallet is a slick wallet offering a wide range of features
            designed to keep you safe and sound.
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
                width: { xs: "100%", md: "45%" },
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
                variant="h5"
                sx={{
                  fontSize: "20px",
                  fontWeight: "600",
                  fontFamily: '"Manrope", Helvetica',
                  color: "#FDC500",
                  marginBottom: "10px",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  gap: "20px",
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

export default FeatureSec;
