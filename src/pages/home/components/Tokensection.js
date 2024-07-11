import React from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  TextField,
  Button,
  Link,
  IconButton,
  Stack,
} from "@mui/material";
import tokenleft from "../../../assets/Token Left.png";
import tokenright from "../../../assets/Token Right.png";

const imagestyle = {
  width: "100%",
  maxWidth: "400px",
  height: "auto",
  px: "0px",
  py: "0px",
};

const TokenSection = () => {
  return (
    <Container
      id="XPPToken"
      sx={{
        display: "Flex",
        minWidth: "100%",
        width: "100%",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        backgroundColor: "#0F1114",
        px: { xs: "5%", md: "5%" },
        py: "7%",
      }}
    >
      <Box
        sx={{
          display: { xs: "none", md: "block" },
        }}
      >
        <img src={tokenleft} alt="token images" style={imagestyle}></img>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: "32px", md: "32px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: { xs: "8px", md: "16px" },
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              color: "#FDC500",
              fontSize: { xs: "14px", md: "20px", xl: "24" },
              textTransform: "uppercase",
              fontWeight: 500,
              fontFamily: '"Manrope", Helvetica',
            }}
          >
            $XPP Token Launching Soon
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Manrope", Helvetica',
              fontWeight: 800,
              lineHeight: { xs: "95%", md: "100%" },
              textAlign: "center",
              fontSize: { xs: "56px", md: "96px" },
              textTransform: "uppercase",
              background: "linear-gradient(90deg, #FFD700, #0000FF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            $XPP TOken
          </Typography>
        </Box>
        <Box
          sx={{
            maxWidth: { xs: "95%", md: "80%" },
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: { xs: "14px", md: "16px" },
              lineHeight: "170%",
              textAlign: "center",
              fontFamily: '"Manrope", Helvetica',
              fontWeight: 300,
              justifyContent: "center",
            }}
          >
            The XPP token is the lifeblood of the Xperience Pay ecosystem. It is
            designed to offer both utility and investment opportunities to its
            holders.
          </Typography>
        </Box>
        <Box>
          <Stack direction="row" justifyContent="center" spacing={2}>
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
              Join ICO
            </Button>
            <Button
              href="https://drive.google.com/file/d/1DvAAqwX3fHQX8tOkstGw51A3Zl5UcP91/view?usp=sharing"
              variant="outlined"
              size="medium"
              sx={{
                fontWeight: 500,
                textTransform: "none",
                fontFamily: '"Manrope", Helvetica',
                borderColor: "#FDC500",
                color: "#FDC500",
                "&:hover": {
                  borderColor: "#e6b300",
                },
              }}
            >
              Read Whitepaper
            </Button>
          </Stack>
        </Box>
      </Box>

      <Box
        sx={{
          display: { xs: "none", md: "block" },
        }}
      >
        <img src={tokenright} alt="token images" style={imagestyle}></img>
      </Box>
    </Container>
  );
};

export default TokenSection;
