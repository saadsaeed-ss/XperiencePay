import React from "react";
import { Container, Box, Typography } from "@mui/material";
import UnparallelImg from "../../../assets/unparallel.svg";
import TransactionsImg from "../../../assets/transaction.svg";
import GlobalImg from "../../../assets/Global.svg";
import CoinImg from "../../../assets/coin.svg";
import walletImg from "../../../assets/xppwallet.svg";
import CardImg from "../../../assets/xppcard.svg";

const ApproachSection = () => {
  const items = [
    {
      title: "Unparalleled Selection of RWAs",
      description:
        "Check out a range of different RWAs picked to match your needs. XPP provides you with the facility to buy fancy houses, beautiful art, valuable metals, and popular collectibles.",
      icon: (
        <img
          src={UnparallelImg}
          alt="Unparalleled Selection"
          width="64"
          height="64"
        />
      ),
    },
    {
      title: "Secure and Transparent Transactions",
      description:
        "Our platform uses blockchain technology to keep things safe and secure. Smart contracts automate transactions, and escrow keeps your money safe so everyone has a secure and transparent experience.",
      icon: (
        <img
          src={TransactionsImg}
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
          src={GlobalImg}
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
      icon: <img src={CoinImg} alt="Stablecoin" width="64" height="64" />,
    },
    {
      title: "XPP Wallet",
      description:
        "Effortlessly store, manage, and access transport your crypto holdings and XPPUSD with our easy-to-use wallet solution.",
      icon: <img src={walletImg} alt="Wallet" width="64" height="64" />,
    },
    {
      title: "XPP Prepaid Borderless Visa Business Card",
      description:
        "Convert your crypto holdings into spendable currency for everyday purchases anywhere Visa is accepted, maximizing the utility of your crypto assets.",
      icon: (
        <img
          src={CardImg}
          alt="Borderless Visa Business Card"
          width="64"
          height="64"
        />
      ),
    },
  ];

  return (
    <Container
      sx={{
        padding: "3% 5%",
        color: "#fff",
        fontFamily: '"Manrope", Helvetica',
      }}
    >
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: "30px",
            fontWeight: "700",
            fontFamily: '"Manrope", Helvetica',
            color: "#FDC500",
            marginBottom: "20px",
          }}
        >
          Our Approach
        </Typography>
        <Typography
          sx={{
            fontFamily: '"Manrope", Helvetica',
            fontSize: "18px",
            marginBottom: "100px",
          }}
        >
          XPP provides a comprehensive ecosystem that simplifies your
          experience. Here’s what makes us unique:
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
              width: { xs: "100%", md: "45%" }, // Adjust the width for responsiveness
              padding: "20px",
              marginBottom: "30px",
              borderRadius: "8px",
              border: "1px solid",
              borderColor: "#333",
              backgroundColor: "#1c1c1e",
              color: "#fff",
              backgroundClip: "padding-box", // Ensures border-radius applies correctly
              position: "relative", // Required for the pseudo-element
              fontFamily: '"Manrope", Helvetica',
              "&:hover:before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: "8px",
                padding: "1px", // Space for gradient border
                background:
                  index === 0
                    ? "linear-gradient(to right, #fdd835, #3A5EFC)"
                    : "linear-gradient(to right, #fdd835, #3A5EFC)", // Change background on hover for all items
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: "20px",
                fontWeight: "600",
                fontFamily: '"Manrope", Helvetica',
                color: "#FDC500",
                marginBottom: "10px",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column", // Align icon and title vertically
                gap: "20px", // Margin between icon and title
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

export default ApproachSection;
