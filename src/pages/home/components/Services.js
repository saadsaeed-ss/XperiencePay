import React from "react";
import { Container, Box, Grid, Button } from "@mui/material";
import { styled } from "@mui/system";
import securityIcon from "../../../assets/security.png"; // Replace with your actual image paths
import selectionIcon from "../../../assets/selection.png";
import feeIcon from "../../../assets/fee.png";
import reachIcon from "../../../assets/reach.png";
import StyledText from "../../../shared/components/StyledText";
import Divider from "@mui/material/Divider";

const FeatureBox = styled(Box)(({ theme, isFirstChild }) => ({
  padding: "40px",
  color: "#fff",
  position: "relative",
  textAlign: "left",
  width: "100%", // Ensure the box takes full width
  boxSizing: "border-box",
  borderLeft: "none", // Default to no left border
  borderBottom: "1px solid gray", // Add bottom border
  [theme.breakpoints.up("md")]: {
    borderLeft: isFirstChild ? "none" : "1px solid gray", // Add left border on medium screens and up
    borderBottom: "none", // Remove bottom border on medium screens and up
  },
}));

const LearnMoreButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  color: "#f0b90b",
  borderLeft: "3px solid white",
  borderRadius: "0",
  padding: "0 6px",
  transition: "all 0.3s ease", // Add transition for the hover effect
  "&:hover": {
    backgroundColor: "rgba(240, 185, 11, 0.1)", // Slight background color change on hover
    transform: "scale(1.05)", // Scale up the button slightly
  },
  "&:active": {
    transform: "scale(0.95)", // Scale down the button slightly on click
  },
}));

function Services() {
  const features = [
    {
      title: "Security at its Core",
      description:
        "Feel safe with every transaction, protected by our top-notch security.",
      icon: securityIcon,
    },
    {
      title: "Unparalleled Selection",
      description:
        "Find exactly what you're looking for in our handpicked collection of RWAs.",
      icon: selectionIcon,
    },
    {
      title: "Fee Structure",
      description:
        "Benefit from lower transaction costs compared to traditional platforms.",
      icon: feeIcon,
    },
    {
      title: "Global Reach",
      description:
        "Connect with buyers & sellers worldwide & expand your opportunities.",
      icon: reachIcon,
    },
  ];

  return (
    <Container
      id="whyus"
      style={{
        marginTop: "50px",
        marginBottom: "20px",
        maxWidth: "100%",
        padding: "0",
      }}
    >
      <Grid container spacing={2}>
        {features.map((feature, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={index}
            style={{ display: "flex" }}
          >
            <FeatureBox isFirstChild={index === 0}>
              <img
                src={feature.icon}
                alt={feature.title}
                style={{ width: "150px", height: "150px", display: "block" }}
              />
              <StyledText
                style={{
                  marginTop: "20px",
                  backgroundColor: "#FDC500",
                  color: "black",
                  padding: "4px 12px",
                  fontWeight: "500",
                  borderRadius: "2px",
                  display: "inline-block",
                  fontSize: "16px",
                }}
              >
                <div>{feature.title}</div>
              </StyledText>
              <StyledText style={{ marginTop: "10px", fontSize: "16px" }}>
                {feature.description}
              </StyledText>
              {/*<LearnMoreButton>Learn more</LearnMoreButton> */}
            </FeatureBox>
          </Grid>
        ))}
      </Grid>
      <Divider
        sx={{
          width: "100%",
          height: "100%",
          background: "gray",
          marginBottom: "10px",
          display: { xs: "none", sm: "none", md: "block" }, // Hide on small and medium screens, show on medium screens and up
        }}
      />
    </Container>
  );
}

export default Services;
