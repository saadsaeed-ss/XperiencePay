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
                <Typography variant="h5" component="div" gutterBottom>
                  XPP WEB3 Marketplace
                </Typography>
              </ContentBox>
              <StyledText style={{ fontSize: "16px" }}>
                The Xperience Pay WEB3 Marketplace is the cornerstone of our
                ecosystem, empowering you to seamlessly buy and sell real-world
                assets (RWAs) using cryptocurrencies. Discover a diverse
                selection of real-world assets (RWAs) on the XPP WEB3
                Marketplace. From real estate and luxury goods to precious
                metals and art, our marketplace caters to a wide range of
                interests and goals.
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
                <Typography variant="h5" component="div" gutterBottom>
                  XPP Stablecoin
                </Typography>
              </ContentBox>
              <StyledText style={{ fontSize: "16px" }}>
                Experience stability in a volatile market with XPPUSD. The
                Xperience Pay Stablecoin (XPPUSD) is the cornerstone of
                financial stability within the XPP ecosystem. It functions as a
                bridge between the volatility of the cryptocurrency market and
                the stability of traditional fiat currencies. XPPUSD maintains a
                1:1 peg to the US dollar. This price stability fosters trust and
                confidence among users when conducting transactions.
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
                <Typography variant="h5" component="div" gutterBottom>
                  XPP Wallet
                </Typography>
              </ContentBox>
              <StyledText style={{ fontSize: "16px" }}>
                The XPP Wallet serves as your central hub for managing your
                crypto holdings and interacting with the XPP ecosystem. The
                intuitive interface of the XPP Wallet makes sending and
                receiving international payments a breeze. Just select your
                recipient's XPP Wallet address, enter the desired amount, and
                your funds are on their way in a matter of minutes. Send and
                receive payments from anyone with an XPP Wallet, regardless of
                their location.
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
                <Typography variant="h5" component="div" gutterBottom>
                  Cross-Border Payments
                </Typography>
              </ContentBox>
              <StyledText style={{ fontSize: "16px" }}>
                Xperience Pay (XPP) disrupts this outdated system by offering a
                revolutionary solution for cross-border payments using its
                stablecoin (XPPUSD) and the XPP Wallet. Our revolutionary
                cross-border payment solution leverages the power of blockchain
                technology, offering unparalleled speed, stability, and
                affordability. Recipients can access their funds quickly and
                efficiently.
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
