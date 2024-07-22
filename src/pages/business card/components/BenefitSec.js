import React from "react";
import { Container, Box, Typography, Divider } from "@mui/material";
import internationalPaymentIcon from "../../../assets/internationalPayment.png";
import reducedIcon from "../../../assets/Reduced.png";
import expandIcon from "../../../assets/expand.png";

const BenefitSec = () => {
  const items = [
    {
      title: "Faster International Payments",
      description:
        "Streamline your operations by facilitating rapid cross-border payments to suppliers and partners, improving efficiency and cash flow management.",
      icon: (
        <img
          src={internationalPaymentIcon}
          alt="Faster International Payments"
          width="64"
          height="64"
        />
      ),
    },
    {
      title: "Reduced Transaction Costs",
      description:
        "Say goodbye to high fees and hidden charges with our cost-effective payment solution. Keep more of your profits by minimizing transaction expenses associated with traditional banking methods.",
      icon: (
        <img
          src={reducedIcon}
          alt="Reduced Transaction Costs"
          width="64"
          height="64"
        />
      ),
    },
    {
      title: "Expand Your Reach",
      description:
        "Tap into new markets and reach a broader global audience of customers by offering a convenient and reliable payment option. With XPP, the world is your marketplace.",
      icon: (
        <img src={expandIcon} alt="Expand Your Reach" width="64" height="64" />
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

export default BenefitSec;
