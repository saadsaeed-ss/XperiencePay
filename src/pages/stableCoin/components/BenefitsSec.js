import React from "react";
import { Container, Box, Typography, Divider } from "@mui/material";
import One from "../../../assets/No1.svg";
import Two from "../../../assets/No2.svg";
import Three from "../../../assets/No3.svg";
import Four from "../../../assets/No4.svg";

const BenefitsSec = () => {
  const items = [
    {
      title: "Faster Transactions and Reduced Chargebacks",
      description:
        "XPPUSD transactions are settled on the blockchain nearly instantly, resulting in much shorter delays and chargeback risks than conventional payment alternatives. Thereby you get your money quickly and safely when a sale is made.",
      icon: (
        <img
          src={One}
          alt="Faster Transactions and Reduced Chargebacks"
          width="64"
          height="64"
        />
      ),
    },
    {
      title: "Attract a Global Audience of Buyers",
      description:
        "XPPUSD removes currency conversion barriers for foreign buyers. It retains a stable value and is tied to the US dollar, meaning anyone in the world can purchase without being affected by fluctuating exchange rates. This expands the circle of potential buyers and increases your selling opportunities.",
      icon: (
        <img
          src={Two}
          alt="Attract a Global Audience of Buyers"
          width="64"
          height="64"
        />
      ),
    },
    {
      title: "Price Stability and Predictability",
      description:
        "Living up to the experience, XPPUSD has a balanced value, unlike other cryptocurrencies that keep fluctuating. It gives you the ability to price your RWAs transparently and predictably, thereby attracting buyers who know exactly what they are getting into.",
      icon: (
        <img
          src={Three}
          alt="Price Stability and Predictability"
          width="64"
          height="64"
        />
      ),
    },
    {
      title: "Faster Settlement Times",
      description:
        "Transactions in XPPUSD will be supported by blockchain facilitating near-instantaneous settlements. This guarantees that you can own your bought RWAs fast and securely.",
      icon: (
        <img src={Four} alt="Faster Settlement Times" width="64" height="64" />
      ),
    },
  ];

  return (
    <Box>
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
            Benefits of XPPUSD for Buyers
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Manrope", Helvetica',
              fontSize: "18px",
              marginBottom: "100px",
            }}
          >
            If you are a seller on the Xperience Pay WEB3 Marketplace, then
            using XPPUSD can help make your user experience simpler and more
            desirable to buyers looking to make crypto-based purchases. What
            XPPUSD will do for you:
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
                border: "1px solid #333",

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
                variant="h5"
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
      <Divider
        sx={{
          width: "100%",
          height: "100%",
          background: "#ffffff33",
          marginTop: "5%",
          marginBottom: "10px",
        }}
      />
    </Box>
  );
};

export default BenefitsSec;
