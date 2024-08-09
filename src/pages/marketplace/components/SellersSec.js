import React from "react";
import { Container, Box, Typography } from "@mui/material";

const SellersSection = () => {
  const items = [
    {
      title: "For Sellers",
      description: "",
      isTitle: true,
    },
    {
      title: "Quick and Safe Transactions",
      description:
        "Get almost instant payments for your RWA sales in XPPUSD, cutting down on wait times and chargeback risks.",
    },
    {
      title: "Transparent Pricing",
      description:
        "Use XPPUSD's stable price to set straightforward, easy-to-understand prices for your RWAs to draw in buyers.",
    },
    {
      title: "Reduced Fees",
      description:
        "Pay less in transaction fees than on traditional marketplaces, helping you keep more of your profits.",
    },
    {
      title: "Connect with Buyers Worldwide",
      description:
        "Grow your customer base and link up with a global network of people keenly looking to buy RWAs.",
    },
    {
      title: "Secure Escrow Services",
      description:
        "To boost security, you can opt to use our escrow service to keep funds safe until the buyer fulfills their obligations.",
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
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {items.map((item, index) => (
          <Box
            key={index}
            sx={{
              width: { xs: "100%", md: "28%" }, // Adjust the width for responsiveness
              padding: "20px",
              marginBottom: "30px",
              borderRadius: "8px",
              border: item.isTitle ? "none" : "1px solid #333",
              background: item.isTitle
                ? "linear-gradient(to right, #FDC500, #3A5EFC)"
                : "#1c1c1e",
              color: item.isTitle ? "#fff" : "#fff",
              textAlign: "left",
              display: item.isTitle ? "flex" : "block",
              alignItems: item.isTitle ? "center" : "initial",
              justifyContent: item.isTitle ? "center" : "initial",
              position: "relative", // Required for the pseudo-element
              fontFamily: '"Manrope", Helvetica',
              "&:hover:before": !item.isTitle && {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: "8px",
                padding: "1px", // Space for gradient border
                background: "linear-gradient(to right, #fdd835, #3A5EFC)", // Change background on hover for all items
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              },
            }}
          >
            <Typography
              variant={item.isTitle ? "h4" : "h5"}
              sx={{
                fontSize: item.isTitle ? "36px" : "20px",
                fontWeight: item.isTitle ? "700" : "600",
                fontFamily: '"Manrope", Helvetica',
                color: item.isTitle ? "#fff" : "#FDC500",
                marginBottom: item.isTitle ? "0" : "10px",
              }}
            >
              {item.title}
            </Typography>
            {!item.isTitle && (
              <Typography
                sx={{
                  fontFamily: '"Manrope", Helvetica',
                  fontSize: "16px",
                }}
              >
                {item.description}
              </Typography>
            )}
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default SellersSection;
