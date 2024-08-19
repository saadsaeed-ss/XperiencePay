import React from "react";
import { Container, Box, Typography } from "@mui/material";
import realEstate from "../../../assets/realEstate.svg";
import preciuosMetal from "../../../assets/preciuos.svg";
import luxuryCar from "../../../assets/luxuryCar.svg";
import Aviation from "../../../assets/helicopter 1.svg";
import Yachts from "../../../assets/yachts.svg";
import hospitality from "../../../assets/hospitality.svg";
import Shipping from "../../../assets/shipping1.svg";
import Commodities from "../../../assets/commodities.svg";
import Account from "../../../assets/account.svg";
import ChineseFa from "../../../assets/fapio.svg";
import Insurance from "../../../assets/insurance1.svg";
import Manufacture from "../../../assets/manufacture1.svg";

const OfferingSec = () => {
  const items = [
    {
      title: "Real Estate",
      icon: <img src={realEstate} alt="Real Estate" width="64" height="64" />,
    },
    {
      title: "Precious Metals",
      icon: (
        <img src={preciuosMetal} alt="Precious Metals" width="64" height="64" />
      ),
    },
    {
      title: "Luxury & Exotic Cars",
      icon: (
        <img
          src={luxuryCar}
          alt="Luxury & Exotic Cars"
          width="64"
          height="64"
        />
      ),
    },
    {
      title: "Aviation",
      icon: <img src={Aviation} alt="Aviation" width="64" height="64" />,
    },
    {
      title: "Luxury Yachts",
      icon: <img src={Yachts} alt="Luxury Yachts" width="64" height="64" />,
    },
    {
      title: "Hospitality",
      icon: <img src={hospitality} alt="Hospitality" width="64" height="64" />,
    },
    {
      title: "Shipping",
      icon: <img src={Shipping} alt="Shipping" width="64" height="64" />,
    },
    {
      title: "Commodities",
      icon: <img src={Commodities} alt="Commodities" width="64" height="64" />,
    },
    {
      title: "Account Receivable",
      icon: (
        <img src={Account} alt="Account Receivable" width="64" height="64" />
      ),
    },
    {
      title: "Chinese Fapiao",
      icon: <img src={ChineseFa} alt="Chinese Fapiao" width="64" height="64" />,
    },
    {
      title: "Insurance",
      icon: <img src={Insurance} alt="Insurance" width="64" height="64" />,
    },
    {
      title: "Manufacturing",
      icon: (
        <img src={Manufacture} alt="Manufacturing" width="64" height="64" />
      ),
    },
  ];

  return (
    <Container
      sx={{
        padding: "3% 5%",
        color: "#fff",
        fontFamily: '"Manrope", Helvetica',
        marginTop: "75px",
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
          What We Offer
        </Typography>
        <Typography
          sx={{
            fontFamily: '"Manrope", Helvetica',
            fontSize: "18px",
            marginBottom: "100px",
          }}
        >
          Xperience Pay WEB3 Marketplace has many different real-world assets.
          These can match a wide range of interests and investment goals.
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
              width: { xs: "100%", md: "28%" }, // Adjust the width for responsiveness if required
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              {item.icon}
              <Typography
                component="h4"
                sx={{
                  fontSize: "20px",
                  fontWeight: "500",
                  fontFamily: '"Manrope", Helvetica',
                  color: "#FDC500",
                  marginTop: "20px",
                }}
              >
                {item.title}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default OfferingSec;
