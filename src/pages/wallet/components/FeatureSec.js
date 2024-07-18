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
        "Your security is our priority. The XPP Wallet employs advanced encryption techniques to safeguard your data and assets. This ensures peace of mind against unauthorized access and malicious attacks.",
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
        "From XPPUSD to Bitcoin and Ethereum, the XPP Wallet supports a wide range of cryptocurrencies and digital assets. Manage your diverse portfolio within a single, unified interface, streamlining asset management and enhancing convenience.",
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
        "Unlock the full potential of decentralized finance (DeFi) with seamless interoperability. The XPP Wallet integrates with various DApps built on the Ethereum blockchain, allowing you to access a myriad of financial services and products directly from your wallet.",
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
        "Protect your assets with built-in security features such as two-factor authentication (2FA) and biometric authentication. Our robust security measures ensure that only authorized users can initiate transactions, minimizing the risk of unauthorized access and fraudulent activity.",
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
            component="h2"
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
            The XPP Wallet offers a comprehensive suite of features designed to
            provide a secure and convenient experience.
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
                variant="h6"
                component="h3"
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
