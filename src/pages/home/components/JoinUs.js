import axios from "axios";
import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import DiscordIcon from "../../../assets/discord_fill.svg";

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: "#FDC500",
      },
      background: {
        default: "#0F1114",
        paper: "#121212",
      },
      text: {
        primary: "#ffffff",
      },
    },
    typography: {
      h1: {
        fontFamily: '"Manrope-SemiBold", Helvetica',
        fontWeight: "600",
        color: "#ffffff", // Ensures text is visible
      },
      h2: {
        fontSize: "32px",
        fontFamily: '"Manrope-SemiBold", Helvetica',
        fontWeight: "bold",
        color: "#ffffff", // Ensures text is visible
      },
    },
  })
);

const SubscriptionSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    // Check for valid email format using regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      return "Please enter a valid email address.";
    }

    // Check for valid domain
    const domainRegex = /@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    const domainMatch = email.match(domainRegex);
    if (!domainMatch) {
      return "Email domain is invalid.";
    }

    // Check for illegal characters
    const illegalChars = /[()<>[\]{}\\]/;
    if (illegalChars.test(email)) {
      return "Email contains illegal characters.";
    }

    return ""; // Return an empty string if all validations pass
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateEmail(email);
    if (validationError) {
      setError(validationError);
      return;
    }
    setError(""); // Clear any previous errors

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = process.env.REACT_APP_ServiceId;
    const templateId = process.env.REACT_APP_TemplateId;
    const publicKey = process.env.REACT_APP_PublicKey;

    // Create an object with EmailJS service ID, template ID, Public Key, and Template params
    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_email: email,
        from_name: "Xperience Pay",
        to_name: "Chris",
      },
    };

    // Send the email using EmailJS
    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      console.log(res.data);
      setEmail("");
      setIsSubmitted(true); // Set confirmation message state to true
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        id="Joinus"
        sx={{
          bgcolor: "#0F1114",
          display: "flex",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "flex-start",
          gap: { xs: 10, md: "25%" },
          py: { xs: 6, sm: 10 },
          textAlign: { sm: "left", md: "left" },
          minWidth: "100%",
          px: { xs: "5%", lg: "5%" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            maxWidth: { xs: "100%", md: "40%" },
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexDirection: "column",
            gap: { xs: 2, md: 5 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: 1, sm: 4 },
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "36px", md: "56px" },
                fontWeight: "bold",
              }}
            >
              Join Us on the <br /> Future of Finance
            </Typography>

            <Typography
              sx={{
                fontSize: { sx: "14px", md: "16px" },
                lineHeight: "170%",
                fontFamily: '"Manrope", Helvetica',
                fontWeight: 300,
              }}
            >
              Experience the future of finance with Xperience Pay (XPP). Join
              our ecosystem today and open up a world of possibilities.
            </Typography>
          </Box>
          <form onSubmit={handleSubmit} className="emailForm">
            <Stack direction="row" spacing={1} useFlexGap>
              <TextField
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  maxWidth: { xs: "100%", md: "100%" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#4e4e4e",
                    },
                    "&:hover fieldset": {
                      borderColor: "hsla(47, 100%, 50%, 1)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#fdc500",
                    },
                  },
                }}
                hiddenLabel
                size="small"
                variant="outlined"
                aria-label="Enter your email address"
                inputProps={{
                  autoComplete: "off",
                }}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="medium"
                sx={{
                  fontWeight: 500,
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#e6b300",
                  },
                }}
              >
                Send It.
              </Button>
            </Stack>
          </form>
          {error && (
            <Typography
              variant="body1"
              sx={{
                marginTop: 2,
                color: "red",
                fontFamily: '"Manrope", Helvetica',
                fontWeight: 300,
              }}
            >
              {error}
            </Typography>
          )}
          {isSubmitted && (
            <Typography
              variant="body1"
              sx={{
                marginTop: 2,
                color: "#FDC500",
                fontFamily: '"Manrope", Helvetica',
                fontWeight: 300,
              }}
            >
              Thank you! Your email has been submitted.
            </Typography>
          )}
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "stretch",
            alignSelf: "start",
            flexDirection: "column",
            gap: { xs: 2, sm: 4 },
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ fontSize: { xs: "20px", md: "32px" } }}
          >
            Follow us on social media!
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              gap: "20px",
              position: "relative",
            }}
          >
            <Button
              href="https://x.com/XperiencePay"
              sx={{
                justifyContent: "flex-start",
                alignSelf: "stretch",
                color: "#fff",
                padding: "12px 0px",
                borderBottomStyle: "solid",
                borderBottomWidth: "1px",
                borderRadius: "0px",
                borderColor: "hsla(0, 0%, 100%, 0.2)",
                fontSize: "20px",
                textTransform: "capitalize",
                fontFamily: '"Manrope-SemiBold", Helvetica',
              }}
              startIcon={
                <XIcon style={{ fontSize: "32px", marginRight: "12px" }} />
              }
            >
              X
            </Button>

            <Button
              href="https://discord.com/invite/xperiencepayfintech"
              sx={{
                justifyContent: "flex-start",
                alignSelf: "stretch",
                color: "#fff",
                padding: "12px 0px",
                borderBottomStyle: "solid",
                borderBottomWidth: "1px",
                borderRadius: "0px",
                borderColor: "hsla(0, 0%, 100%, 0.2)",
                fontSize: "20px",
                textTransform: "capitalize",
                fontFamily: '"Manrope-SemiBold", Helvetica',
              }}
              startIcon={
                <img
                  src={DiscordIcon}
                  alt="custom icon"
                  style={{
                    marginRight: "12px",
                    width: "32px",
                    height: "32px",
                    color: "white",
                  }}
                />
              }
            >
              Discord
            </Button>
            <Button
              href="https://t.me/XperiencePay"
              sx={{
                justifyContent: "flex-start",
                alignSelf: "stretch",
                color: "#fff",
                padding: "12px 0px",
                borderBottomStyle: "solid",
                borderBottomWidth: "1px",
                borderRadius: "0px",
                borderColor: "hsla(0, 0%, 100%, 0.2)",
                fontSize: "20px",
                textTransform: "capitalize",
                fontFamily: '"Manrope-SemiBold", Helvetica',
              }}
              startIcon={
                <TelegramIcon
                  style={{
                    fontSize: "32px",
                    marginRight: "12px",
                  }}
                />
              }
            >
              Telegram
            </Button>

            <Button
              href="#"
              sx={{
                justifyContent: "flex-start",
                alignSelf: "stretch",
                color: "#fff",
                padding: "12px 0px",
                borderBottomStyle: "solid",
                borderBottomWidth: "1px",
                borderRadius: "0px",
                borderColor: "hsla(0, 0%, 100%, 0.2)",
                fontSize: "20px",
                textTransform: "capitalize",
                fontFamily: '"Manrope-SemiBold", Helvetica',
              }}
              startIcon={
                <FacebookIcon
                  style={{ fontSize: "32px", marginRight: "12px" }}
                />
              }
            >
              Facebook
            </Button>
            <Button
              href="#"
              sx={{
                justifyContent: "flex-start",
                alignSelf: "stretch",
                color: "#fff",
                padding: "12px 0px",
                borderBottomStyle: "solid",
                borderBottomWidth: "1px",
                borderRadius: "0px",
                borderColor: "hsla(0, 0%, 100%, 0.2)",
                fontSize: "20px",
                textTransform: "capitalize",
                fontFamily: '"Manrope-SemiBold", Helvetica',
              }}
              startIcon={
                <InstagramIcon
                  style={{ fontSize: "32px", marginRight: "12px" }}
                />
              }
            >
              Instagram
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SubscriptionSection;
