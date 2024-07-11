import React, { useState } from "react";
import { Container, CardContent, Grid, Button } from "@mui/material";
import { Box, Typography, Avatar, Card as MuiCard } from "@mui/material";
import { styled } from "@mui/system";
import Luxury from "../../../assets/luxury.png";
import RealEstate from "../../../assets/RealEstate.png";
import Cars from "../../../assets/Cars.png";
import Metals from "../../../assets/Precious Metals.svg";
import Aviation from "../../../assets/Aviation.svg";
import StyledText from "../../../shared/components/StyledText";
import useMediaQuery from "@mui/material/useMediaQuery";

const Card = styled(MuiCard)(({ delay }) => ({
  background: "#000000",
  width: "100%",
  //maxWidth: "500px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  opacity: 0,
  pointerEvents: "none",
  position: "absolute",
  justifyContent: "space-between",
  borderRadius: "12px",
  borderWidth: "2px",
  borderStyle: "solid",
  borderColor: "#FDC500",
  animation: "animate 15s linear infinite",
  animationDelay: `calc(3s * ${delay})`,
  "&:hover": {
    //animationPlayState: "paused",
  },
  "@keyframes animate": {
    "0%": {
      opacity: 0,
      transform: "translateY(100%) scale(0.5)",
    },
    "5%, 20%": {
      opacity: 0.4,
      transform: "translateY(100%) scale(0.7)",
    },
    "25%, 40%": {
      opacity: 1,
      pointerEvents: "auto",
      transform: "translateY(0%) scale(1)",
    },
    "45%, 60%": {
      opacity: 0.4,
      transform: "translateY(-100%) scale(0.7)",
    },
    "65%, 100%": {
      opacity: 0,
      transform: "translateY(-100%) scale(0.5)",
    },
  },
}));

const Content = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignContent: "space-around",
  alignItems: "center",
});

const ImageContainer = styled(Box)({
  //height: { xs: "56px", md: "90px" },
  //width: { xs: "56px", md: "90px" },
  borderRadius: "8px",
});

const Details = styled(Box)({
  display: "flex",
  flexDirection: "column",
});

const cards = [
  {
    name: "Luxury Items",
    title:
      "Buy luxury items with cryptocurrencies in our Innovative Web 3.0 marketplace ",
    image: Luxury,
    delay: -1,
  },
  {
    name: "Real Estate",
    title:
      "Buy and Tokenize your real estate with our Innovative Web 3.0 marketplace",
    image: RealEstate,
    delay: 0,
  },
  {
    name: "Luxury Cars",
    title:
      "Buy luxury cars with cryptocurrencies and get guaranteed delivery with our escrow account",
    image: Cars,
    delay: 1,
  },
  {
    name: "Precious Metals",
    title:
      "Buy precious metals from all over the world without worrying about the security and delivery.",
    image: Metals,
    delay: 2,
  },
  {
    name: "Aviation",
    title:
      "Choose from the best of aviation products available on our Web 3.0 marketplace.",
    image: Aviation,
    delay: 3,
  },
];

const About = () => {
  return (
    <Container
      id="about"
      sx={{
        display: "Flex",
        flexDirection: { xs: "column", md: "row" },
        minWidth: "100%",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#0F1114",
        px: { xs: "5%", md: "5%" },
        py: "10%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: { xs: "100%", md: "50%" },
          gap: { xs: 2, md: 5 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 1, md: 2 },
          }}
        >
          <Typography
            fontSize="50px"
            style={{ marginBottom: 0, fontWeight: "bold" }}
          >
            Xperience Pay
          </Typography>
          <Typography
            sx={{
              fontSize: { sx: "14px", md: "20px" },
              color: "white",
              lineHeight: "170%",
              fontFamily: '"Manrope", Helvetica',
              color: "#f0b90b",
            }}
          >
            The Gateway to Real-World Asset Ownership with Crypto
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: { sx: "14px", md: "16px" },
              color: "white",
              lineHeight: "170%",
              fontFamily: '"Manrope", Helvetica',
              mb: { xs: "8px", md: "16px" },
            }}
          >
            Xperience Pay (XPP) is breaking down the barriers between
            traditional finance and crypto-based purchases. Our secure WEB3
            marketplace helps you buy, sell, and manage real-world assets (RWAs)
            using cryptocurrency. Xperience Pay helps you connect with a network
            of people buying and selling all over the world, and watch your
            chances grow.
          </Typography>
          <Typography
            sx={{
              fontSize: { sx: "14px", md: "16px" },
              color: "white",
              lineHeight: "170%",
              fontFamily: '"Manrope", Helvetica',
            }}
          >
            XPPUSD is pegged to the US dollar that makes it perfect for easy and
            reliable transactions in the XPP ecosystem. You get the kind of
            stability and predictability that makes trading a breeze. XPPUSD
            combines the steadiness of regular money with the cool innovation of
            crypto.
          </Typography>
        </Box>
        <Box>
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
              "&:hover": {
                backgroundColor: "#e6b300",
              },
            }}
          >
            About us
          </Button>
          */}
        </Box>
      </Box>
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          height: "500px",
        }}
      >
        {cards.map((card, index) => (
          <Card
            key={index}
            delay={card.delay}
            sx={{
              padding: { xs: "12px", md: "20px" },
              maxWidth: { xs: "300px", md: "500px" },
            }}
          >
            <Content
              sx={{
                gap: { xs: "12px", md: "20px" },
              }}
            >
              <ImageContainer>
                <img
                  src={card.image}
                  alt={card.name}
                  height={{ xs: "56px", md: "90px" }}
                  width={{ xs: "56px", md: "90px" }}
                />
              </ImageContainer>
              <Details
                sx={{
                  gap: { xs: "8px", md: 1.5 },
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    fontSize: { xs: "20px", md: "24px" },
                    fontWeight: 700,
                    color: "#fff",
                    fontFamily: '"Manrope", Helvetica',
                  }}
                >
                  {card.name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "14px", md: "16px" },
                    color: "#fff",
                    fontFamily: '"Manrope", Helvetica',
                  }}
                >
                  {card.title}
                </Typography>
              </Details>
            </Content>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default About;

/*function About() {
  const [hoveredCard, setHoveredCard] = useState(1); // Set the default hovered card to the center one
  const isSmallScreen = useMediaQuery("(max-width:599px)");
  const isMediumScreen = useMediaQuery("(max-width:900px)");

  const GradientCard = styled(Card)(({ theme, isHovered }) => ({
    backgroundColor: "black",
    color: "#fff",
    margin: isSmallScreen ? "30px 0" : "30px 20px",
    transition: "transform 0.3s ease, filter 0.3s ease",
    borderRadius: "7px",
    position: "relative",
    maxWidth: "600px",
    display: "flex",
    overflow: "hidden",
    transform: isHovered ? "scale(1.05)" : "scale(1)",
    filter: isHovered ? "none" : "blur(2px)",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: -1,
      borderRadius: "7px",
      padding: "2px",
      background:
        "linear-gradient(90deg, rgba(240,185,11,1) 0%, rgba(0,212,255,1) 100%)",
      WebkitMask:
        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
      WebkitMaskComposite: "xor",
      maskComposite: "exclude",
    },
  }));



  const features = [
    {
      title: "Luxury items",
      description:
        "Buy luxury items with cryptocurrencies in our Innovative Web 3.0 marketplace",
      img: Luxury,
    },
    {
      title: "Real Estate",
      description:
        "Buy and Tokenize your real estate with our Innovative Web 3.0 marketplace",
      img: RealEstate,
    },
    {
      title: "Luxury Cars",
      description:
        "Buy luxury cars with cryptocurrencies and get guaranteed delivery with our escrow account",
      img: Cars,
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        px: { xs: "5%", md: "5%" },
        width: "100%",
        justifyContent: "center",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", maxWidth: "50%" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 1, md: 2 },
          }}
        >
          <Typography
            fontSize="50px"
            style={{ marginBottom: 0, fontWeight: "bold" }}
          >
            Xperience Pay
          </Typography>
          <Typography
            sx={{
              fontSize: { sx: "14px", md: "20px" },
              color: "white",
              lineHeight: "170%",
              fontFamily: '"Manrope", Helvetica',
              maxWidth: { xs: "100%", md: "80%" },
              color: "#f0b90b",
            }}
          >
            The Gateway to Real-World Asset Ownership with Crypto
          </Typography>
        </Box>
        <Typography
          sx={{
            fontSize: { sx: "14px", md: "16px" },
            color: "white",
            lineHeight: "170%",
            fontFamily: '"Manrope", Helvetica',
            maxWidth: { xs: "100%", md: "80%" },
            mb: { xs: "8px", md: "16px" },
          }}
        >
          Unlock a new frontier of financial freedom and redefine how to
          transact worldwide. Xperience Pay (XPP) bridges the gap between
          traditional finance and the world of cryptocurrencies. Our
          cutting-edge WEB3 marketplace empowers you to seamlessly buy, sell,
          and trade real-world assets (RWAs) using cryptocurrency. Connect with
          a network of buyers and sellers spanning the globe, expanding your
          horizons and unlocking new opportunities.
        </Typography>
        <Typography
          sx={{
            fontSize: { sx: "14px", md: "16px" },
            color: "white",
            lineHeight: "170%",
            fontFamily: '"Manrope", Helvetica',
            maxWidth: { xs: "100%", md: "80%" },
          }}
        >
          Our XPPUSD stablecoin serves as a reliable medium of exchange and
          store of value within the XPP ecosystem. XPPUSD is pegged to the US
          dollar, ensuring stability and predictability, facilitating
          transactions with ease. XPPUSD offers users the best of both worlds -
          the stability of fiat currencies and the innovation of
          cryptocurrencies.
        </Typography>
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
            "&:hover": {
              backgroundColor: "#e6b300",
            },
          }}
        >
          About us
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></Box>
    </Box>
  );
}

export default About;

<Box>
        <Grid style={{ justifyContent: "center" }} container xs={12} md={12}>
          {features.map((feature, index) => (
            <GradientCard
              isHovered={hoveredCard === index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(1)} // Ensure it goes back to the center card
              key={index}
              sx={{
                textAlign: {
                  xs: "center",
                  sm: "left", // Change as needed for other breakpoints
                },
                mt: 2,
                mb: 2,
              }}
            >
              <Grid container alignItems="center">
                <Grid
                  item
                  xs={12}
                  sm={3}
                  md={2}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <img
                    height="75px"
                    width="75px"
                    style={{
                      marginLeft: isSmallScreen ? 0 : "25px",
                      marginTop: isSmallScreen ? "30px" : 0,
                    }}
                    src={feature.img}
                    alt={feature.title}
                  />
                </Grid>
                <Grid
                  style={{ paddingLeft: "10px" }}
                  item
                  xs={12}
                  sm={9}
                  md={10}
                >
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      style={{ marginBottom: 0 }}
                      component="div"
                    >
                      {feature.title}
                    </Typography>
                    <Typography variant="body2">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Grid>
              </Grid>
            </GradientCard>
          ))}
        </Grid>
      </Box>*/
