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
        "Explore a diverse range of RWAs meticulously chosen to cater to your specific individual goals. Buy anything from luxurious real estate and exquisite art to precious metals and trending collectibles.",
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
        "Our platform leverages the immutability and security of blockchain technology. Smart contracts automate transactions, while escrow services safeguard funds, ensuring a secure and transparent experience for all parties involved.",
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
        "Connect with a network of buyers and sellers spanning the world. XPP breaks down geographical barriers, opening a world of opportunities and maximizing your potential for profitable ventures.",
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
        "Conduct transactions with peace of mind using our stablecoin. XPPUSD mitigates the price volatility inherent to cryptocurrencies, offering stability and predictability to your purchases.",
      icon: <img src={CoinImg} alt="Stablecoin" width="64" height="64" />,
    },
    {
      title: "XPP Wallet",
      description:
        "Store, manage, and securely access your crypto holdings and XPPUSD effortlessly within our user-friendly wallet solution.",
      icon: <img src={walletImg} alt="Wallet" width="64" height="64" />,
    },
    {
      title: "XPP Prepaid Borderless Visa Business Card",
      description:
        "Effortlessly convert your crypto holdings into spendable currency for everyday purchases anywhere Visa is accepted, maximizing the utility of your crypto assets.",
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
          Our Approach
        </Typography>
        <Typography
          sx={{
            fontFamily: '"Manrope", Helvetica',
            fontSize: "18px",
            marginBottom: "100px",
          }}
        >
          XPP offers a comprehensive ecosystem designed to streamline your
          journey. Here’s what sets us apart:
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
