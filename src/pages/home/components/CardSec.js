import React from "react";
import { Grid, Typography, Button, Card, Box } from "@mui/material";
import { styled } from "@mui/system";
import Divider from "@mui/material/Divider";
import CardSecImg from "../../../assets/CardSec.png";

const StyledCardMedia = styled("img")(({ theme, imageWidth }) => ({
  width: imageWidth,
  display: "block",
  margin: "0 auto",
  [theme.breakpoints.down("sm")]: {
    width: "100%", // Increase width on small screens
    marginTop: "50px",
  },
}));

const CardSection = ({ imageWidth = "80%" }) => {
  return (
    <Box
      sx={{
        padding: "10%",
        borderBottom: "1px solid gray",
      }}
    >
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mb: 2,
              fontFamily: '"Manrope", Helvetica',
              fontSize: "1.6rem",
            }}
          >
            XPP Prepaid Borderless Visa Business Card
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 2,
              fontFamily: '"Manrope", Helvetica',
              fontSize: "16px",
            }}
          >
            Unlock the true potential of your crypto holdings with the XPP
            Prepaid Borderless Visa Business Card (XBVBC). Seamlessly convert
            your digital assets into spendable currency for everyday purchases.
            It empowers you to effortlessly convert your crypto holdings into
            spendable currency, accepted worldwide at any merchant that displays
            the Visa logo. Simply link your XPP Wallet to your Xperience Pay
            Borderless Visa Business Card. When you make a purchase, the card
            automatically converts the required amount of cryptocurrency from
            your wallet into traditional fiat currency.
          </Typography>
          {/*
          <Button
            variant="contained"
            color="primary"
            size="medium"
            sx={{
              fontWeight: 500,
              textTransform: "none",
              fontFamily: '"Manrope", Helvetica',
              backgroundColor: "#FDC500",
              color: "#0F1114",
              marginTop: "10px",
              "&:hover": {
                backgroundColor: "#e6b300",
              },
            }}
          >
            Learn More
          </Button>
          */}
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
            <StyledCardMedia
              src={CardSecImg}
              alt="XPP Borderless Visa Business Card"
              imageWidth={imageWidth}
            />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CardSection;
