import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";

const OuterContainer = styled(Box)(({ theme }) => ({
  color: "#fff",
  display: "flex",
  justifyContent: "center", // Center the inner container
}));

const InnerContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    textAlign: "center",
  },
}));

const TextContainer = styled(Box)(({ theme }) => ({
  maxWidth: "1000px",
  [theme.breakpoints.down("md")]: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(5),
  },
}));

const StyledParagraph = styled("p")(({ theme }) => ({
  maxWidth: "600px", // Set the max-width to be smaller than the heading
  marginTop: theme.spacing(5),
  marginBottom: theme.spacing(2),
}));

const ActionButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#FFC107", // Yellow background color for the button
  color: "#000",
  padding: theme.spacing(1, 3),
  fontWeight: "bold",
  textTransform: "none",
  borderRadius: "5px",
  "&:hover": {
    backgroundColor: "#FFA000",
  },
}));

const JoinSellerProgram = () => {
  return (
    <OuterContainer
      sx={{
        px: { xs: "5%", md: "5%" },
        py: { xs: "5%", md: "5%" },
      }}
    >
      <InnerContainer>
        <TextContainer>
          <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
            Join our trusted seller program
          </Typography>
          <StyledParagraph
            sx={{
              fontSize: { sx: "14px", md: "16px" },
              lineHeight: "170%",
              fontWeight: 300,
            }}
          >
            Want to sell on our platform? Join the community of our trusted
            sellers and get access to the new potential buyers around the world.
          </StyledParagraph>
        </TextContainer>
        <Button
          href="#"
          variant="contained"
          size="medium"
          sx={{
            fontWeight: 500,
            textTransform: "none",
            fontFamily: '"Manrope", Helvetica',
            backgroundColor: "#FDC500",
            color: "#0F1114",
            "&:hover": {
              backgroundColor: "#e6b300",
            },
          }}
        >
          Apply now
        </Button>
      </InnerContainer>
    </OuterContainer>
  );
};

export default JoinSellerProgram;
