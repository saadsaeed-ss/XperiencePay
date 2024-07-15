import React from "react";
import { Container, Box, Typography } from "@mui/material";
import One from "../../../assets/No1.svg";
import Two from "../../../assets/No2.svg";
import Three from "../../../assets/No3.svg";
import Four from "../../../assets/No4.svg";

const BenefitsSec = () => {
  const items = [
    {
      title: "Faster Transactions and Reduced Chargebacks",
      description:
        "XPPUSD transactions settle near-instantaneously on the blockchain, minimizing delays and the risk of chargebacks associated with traditional payment methods. This ensures you receive your funds quickly and securely upon completion of a sale.",
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
        "XPPUSD eliminates currency conversion hurdles for international buyers. Since its value remains stable and pegged to the US dollar, buyers worldwide can easily participate in purchases without worrying about fluctuating exchange rates. This broadens your buyer pool and increases your chances of securing a sale.",
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
        "Unlike traditional cryptocurrencies with fluctuating prices, XPPUSD offers a stable value. This allows you to set clear and predictable prices for your RWAs, attracting buyers who understand the exact value they are investing in.",
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
        "XPPUSD transactions leverage the efficiency of blockchain technology, facilitating near-instantaneous settlements. This ensures you gain ownership of your purchased RWAs quickly and efficiently.",
      icon: (
        <img src={Four} alt="Faster Settlement Times" width="64" height="64" />
      ),
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
          Benefits of XPPUSD for Buyers
        </Typography>
        <Typography
          sx={{
            fontFamily: '"Manrope", Helvetica',
            fontSize: "18px",
            marginBottom: "100px",
          }}
        >
          As a seller on the Xperience Pay WEB3 Marketplace, you can leverage
          the power of XPPUSD to streamline your experience and attract a wider
          pool of potential buyers. Here's how XPPUSD benefits you:
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

export default BenefitsSec;
