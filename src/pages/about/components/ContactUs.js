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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock email sending process
    setTimeout(() => {
      setMessage("Your email has been sent!");
    }, 1000);

    // In a real application, you would send a request to your backend here
    // fetch('/api/sendEmail', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // }).then(response => response.json())
    //   .then(data => {
    //     setMessage("Your email has been sent!");
    //   }).catch(error => {
    //     setMessage("An error occurred. Please try again later.");
    //   });
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
              gap: { xs: 1, sm: 4 },
            }}
          >
            <Typography
              variant="h1"
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
          <Stack
            component="form"
            direction="column"
            spacing={2}
            useFlexGap
            onSubmit={handleSubmit}
            width={"100%"}
          >
            <TextField
              name="name"
              value={formData.name}
              onChange={handleChange}
              sx={{
                maxWidth: "100%",
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
              placeholder="Your name"
              inputProps={{
                autoComplete: "off",
              }}
            />
            <TextField
              name="email"
              value={formData.email}
              onChange={handleChange}
              sx={{
                maxWidth: "100%",
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
              placeholder="Your email address"
              inputProps={{
                autoComplete: "off",
              }}
            />
            <TextField
              name="message"
              value={formData.message}
              onChange={handleChange}
              sx={{
                maxWidth: "100%",
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
              Submit
            </Button>
          </Stack>
          {message && (
            <Typography
              sx={{
                mt: 2,
                color: "#FDC500",
                fontSize: "16px",
                fontFamily: '"Manrope", Helvetica',
                fontWeight: 500,
              }}
            >
              {message}
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
          <Typography variant="h2">Follow us on social media!</Typography>
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
