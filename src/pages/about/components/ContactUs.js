import axios from "axios";
import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  TextField,
  Button,
  Stack,
  SvgIcon,
} from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import DiscordIcon from "../../../assets/discord_fill.svg";

import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";

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

const ContactUsSec = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
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
    const templateId = process.env.REACT_APP_ContactTemplateId;
    const publicKey = process.env.REACT_APP_PublicKey;

    // Create an object with EmailJS service ID, template ID, Public Key, and Template params
    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        to_name: "Xperience Pay",
        message: message,
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
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-evenly",
          gap: { xs: 10, md: "10%" },
          py: { xs: 6, sm: 12 },
          textAlign: { sm: "left", md: "left" },
          minWidth: "100%",
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
              gap: { xs: 1, sm: 3 },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "42px", md: "56px" },
              }}
            >
              Contact us
            </Typography>

            <Typography
              sx={{
                fontSize: { sx: "14px", md: "16px" },
                lineHeight: "170%",
                fontFamily: '"Manrope", Helvetica',
                fontWeight: 300,
              }}
            >
              Get in touch with our team to learn more about XPP.
            </Typography>
          </Box>
          <form
            onSubmit={handleSubmit}
            className="emailForm"
            style={{ width: "100%" }}
          >
            <Stack direction="column" spacing={2} useFlexGap>
              <TextField
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={{
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
                aria-label="Enter your name"
                inputProps={{
                  autoComplete: "off",
                }}
              />
              <TextField
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
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
              <TextField
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                sx={{
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
                aria-label="Enter your message"
                placeholder="Your message"
                multiline
                rows={4}
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
            alignSelf: "auto",
            flexDirection: "column",
            gap: { xs: 2, sm: 4 },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: "32px" },
            }}
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

export default ContactUsSec;
