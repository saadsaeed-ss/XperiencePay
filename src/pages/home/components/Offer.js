import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";
import Divider from "@mui/material/Divider";
import marketPlaceImg from "../../../assets/marketplace-icon.png";
import stableCoin from "../../../assets/StableCoin.svg";
import StyledText from "../../../shared/components/StyledText";
import wallet from "../../../assets/wallet.png";
import payments from "../../../assets/payments.png";

// Styled components
const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: "transparent",
  color: "#FFFFFF",
  boxShadow: "none",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "50px 50px",
  borderRadius: "0",
  borderRight: "1px solid gray",
  borderTop: "1px solid gray",
  lineHeight: "1.6",
  [theme.breakpoints.down("md")]: {
    padding: "30px 30px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "20px 20px",
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#FFC107",
  color: "#000000",
  marginTop: theme.spacing(2),
  alignSelf: "start",
  "&:hover": {
    backgroundColor: "#FFA000",
  },
}));

const ContentBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  marginBottom: "20px",
});

// Updated Icon styled component to handle dynamic width and height
const Icon = styled("img")(({ width, height }) => ({
  width: width ? width : "50%",
  height: height ? height : "auto",
  marginBottom: "30px",
}));

const OfferSec = () => {
  return (
    <Container
      id="products"
      style={{
        marginTop: "20px",
        marginBottom: "10px",
        maxWidth: "100%",
        padding: "0",
      }}
    >
      <Grid container spacing={0}>
        {/* First Row */}
        <Grid item xs={12} sm={6} style={{ display: "flex", padding: "0" }}>
          <StyledCard>
            <CardContent style={{ flexGrow: 1, fontSize: "16px" }}>
              <ContentBox>
                <Icon
                  src={marketPlaceImg}
                  alt="Icon 1"
                  width="60%"
                  height="auto"
                />
                <Typography
                  variant="h4"
                  fontSize={{ xs: "20px", md: "28px" }}
                  fontWeight="bold"
                  gutterBottom
                >
                  XPP WEB3 Marketplace
                </Typography>
              </ContentBox>
              <StyledText style={{ fontSize: "16px" }}>
                The Xperience Pay WEB3 Marketplace is the mainstay of our
                ecosystem, allowing you to buy and sell real-world assets (RWAs)
                using cryptocurrencies without a hitch. Find all types of
                real-world assets (RWAs) at the XPP WEB3 Marketplace and enjoy
                crypto-based purchases. You would be able to find everything
                from houses and expensive goods to precious metals and works of
                art in our marketplace that suits various tastes and goals.
              </StyledText>

              {/*
              <StyledButton
                variant="contained"
                color="primary"
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
                Learn more
              </StyledButton>
              */}
            </CardContent>
          </StyledCard>
        </Grid>
        <Grid item xs={12} sm={6} style={{ display: "flex", padding: "0" }}>
          <StyledCard>
            <CardContent style={{ flexGrow: 1 }}>
              <ContentBox>
                <Icon src={stableCoin} alt="Icon 2" width="38%" height="auto" />
                <Typography
                  variant="h4"
                  fontSize={{ xs: "20px", md: "28px" }}
                  fontWeight="bold"
                  gutterBottom
                >
                  XPP Stablecoin
                </Typography>
              </ContentBox>
              <StyledText style={{ fontSize: "16px" }}>
                Experience stability in a volatile market with XPPUSD. Xperience
                Pay Stablecoin (XPPUSD) plays a vital role in the financial
                stability for all transaction within XPP ecosystem. This coin
                shields investors from wild swings in cryptocurrencies while
                insulating them by tying it directly to traditional fiat
                currencies. It stays pegged at 1:1 to the US dollar so as to
                maintain price balance. In other words, this price constancy
                improves trust among users during transactions.
              </StyledText>
              {/*
              <StyledButton
                variant="contained"
                color="primary"
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
                Learn more
              </StyledButton>
              */}
            </CardContent>
          </StyledCard>
        </Grid>

        {/* Second Row */}
        <Grid item xs={12} sm={6} style={{ display: "flex", padding: "0" }}>
          <StyledCard>
            <CardContent style={{ flexGrow: 1 }}>
              <ContentBox>
                <Icon src={wallet} alt="Icon 1" width="60%" height="auto" />
                <Typography
                  variant="h4"
                  fontSize={{ xs: "20px", md: "28px" }}
                  fontWeight="bold"
                  gutterBottom
                >
                  XPP Wallet
                </Typography>
              </ContentBox>
              <StyledText style={{ fontSize: "16px" }}>
                XPP Wallet makes it easy to control, access, and manage crypto
                holdings. XPP Wallet has an easy-to-use interface, where you
                just have to click “send” or “receive” when making overseas
                money transfers. Just insert your recipient’s address for an XPP
                wallet and then indicate how much money you want to send and
                within minutes your funds will reach their desired destination.
                XPP wallet provides you the facility to make payments from
                anywhere around the world.
              </StyledText>
              {/*
              <StyledButton
                variant="contained"
                color="primary"
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
                Learn more
              </StyledButton>
              */}
            </CardContent>
          </StyledCard>
        </Grid>
        <Grid item xs={12} sm={6} style={{ display: "flex", padding: "0" }}>
          <StyledCard>
            <CardContent style={{ flexGrow: 1 }}>
              <ContentBox>
                <Icon src={payments} alt="Icon 2" width="30%" height="auto" />
                <Typography
                  variant="h4"
                  fontSize={{ xs: "20px", md: "28px" }}
                  fontWeight="bold"
                  gutterBottom
                >
                  Cross-Border Payments
                </Typography>
              </ContentBox>
              <StyledText style={{ fontSize: "16px" }}>
                Xperience Pay (XPP) disrupts the old system by providing a
                transformational solution for cross-border payments using its
                stablecoin (XPPUSD) and XPP Wallet. Our transformational
                cross-border payment solution leverages the power of blockchain
                technology, offering unmatched speed, power and affordability.
                Recipients can access their funds quickly and efficiently.
              </StyledText>
              {/*
              <StyledButton
                variant="contained"
                color="primary"
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
                Learn more
              </StyledButton>
              */}
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>
      <Divider
        sx={{
          width: "100%",
          height: "100%",
          background: "gray",
          marginBottom: "10px",
        }}
      />
    </Container>
  );
};

export default OfferSec;
