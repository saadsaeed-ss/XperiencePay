import React from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  TextField,
  Card,
  CardContent,
  LinearProgress,
  Select,
  MenuItem,
  Divider,
  Stack,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import HeaderBg from "../../../assets/HeaderBg.png";
import Partner1 from "../../../assets/P1.png";
import Partner2 from "../../../assets/P2.png";
import Partner3 from "../../../assets/P3.png";
import Partner4 from "../../../assets/P4.png";
import Partner5 from "../../../assets/P5.png";

const Header = () => {
  return (
    <Box
      sx={{
        mt: 5,
        py: 4,
        backgroundImage: `url(${HeaderBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container
        sx={{
          px: { xs: "5%", md: "5%" },
          minWidth: "100%",
          py: 4,
        }}
      >
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Box
            flex={1}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
              mb: { xs: 4, md: 0 },
              gap: { xs: "20px", md: "40px" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: "8px", md: "16px" },
                alignItems: { xs: "center", md: "flex-start" },
              }}
            >
              <Typography
                gutterBottom
                sx={{
                  fontSize: { xs: "48px", md: "64px" },
                  fontWeight: "bold",
                  fontFamily: '"Manrope", Helvetica',
                  color: "white",
                  lineHeight: 1.1,
                }}
              >
                Secure Crypto-Based Purchases with Xperience Pay
              </Typography>
              <Typography
                gutterBottom
                sx={{
                  fontSize: { sx: "14px", md: "18px" },
                  color: "white",
                  lineHeight: "170%",
                  fontFamily: '"Manrope", Helvetica',
                  maxWidth: { xs: "100%", md: "80%" },
                }}
              >
                Xperience Pay (XPP) is offering a secure, user-friendly WEB3
                marketplace to help you buy, sell, and manage RWAs seamlessly.
              </Typography>
            </Box>
            <Box>
              <div style={{ display: "flex", gap: "10px" }}>
                <Button
                  href="#"
                  variant="contained"
                  size="medium"
                  sx={{
                    fontWeight: 600,
                    textTransform: "none",
                    fontFamily: '"Manrope", Helvetica',
                    backgroundColor: "#FDC500",
                    color: "#0F1114",
                    "&:hover": {
                      backgroundColor: "#e6b300",
                    },
                  }}
                >
                  Launch Marketplace
                </Button>
                <Button
                  variant="outlined"
                  href="https://drive.google.com/file/d/1DvAAqwX3fHQX8tOkstGw51A3Zl5UcP91/view?usp=sharing"
                  size="medium"
                  sx={{
                    fontWeight: 600,
                    textTransform: "none",
                    fontFamily: '"Manrope", Helvetica',
                    borderColor: "#e6b800",
                    color: "#ffcc00",
                    "&:hover": {
                      borderColor: "#e6b800",
                      color: "#e6b800",
                    },
                  }}
                >
                  Read Whitepaper
                </Button>
              </div>
              <br />
              <div style={{ display: "flex", gap: "10px" }}>
                <Button
                  variant="outlined"
                  size="medium"
                  sx={{
                    textTransform: "none",
                    fontFamily: '"Manrope", Helvetica',
                    borderColor: "#00ff00",
                    color: "#00ff00",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    "&:hover": {
                      borderColor: "#00e600",
                      color: "#00e600",
                    },
                  }}
                >
                  View Audit
                  <VisibilityIcon fontSize="small" sx={{ ml: 1 }} />
                </Button>
                <Button
                  variant="outlined"
                  size="medium"
                  sx={{
                    textTransform: "none",
                    fontFamily: '"Manrope", Helvetica',
                    borderColor: "white",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    "&:hover": {
                      borderColor: "#00e600",
                      color: "#00e600",
                    },
                  }}
                >
                  Copy Contract Address
                  <ContentCopyIcon fontSize="small" sx={{ ml: 1 }} />
                </Button>
              </div>
            </Box>
          </Box>

          <Box
            flex={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
              width: { xs: "100%", md: "auto" },
              mt: { xs: 4, md: 0 },
            }}
          >
            <Card
              sx={{
                minWidth: 275,
                backgroundColor: "#201c1c",
                borderRadius: "10px",
                color: "#fff",
              }}
            >
              <CardContent>
                <Box
                  display="flex"
                  sx={{
                    background: "black",
                    borderRadius: "10px",
                    padding: "10px",
                  }}
                  justifyContent="space-between"
                  mb={2}
                >
                  <Button sx={{ color: "#fff", textTransform: "none" }}>
                    Buy XPP
                  </Button>
                  <Button sx={{ color: "#fff", textTransform: "none" }}>
                    Balance
                  </Button>
                  <Button sx={{ color: "#fff", textTransform: "none" }}>
                    Phase Info
                  </Button>
                </Box>

                <Box
                  display="flex"
                  flexDirection="column"
                  sx={{
                    backgroundColor: "black",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                  mb={2}
                >
                  <Typography variant="h5" component="div" sx={{ mb: 2 }}>
                    Buy XPP
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="grey">
                    You can buy our XPP tokens using ETH or USDT ERC-20.
                  </Typography>
                  <TextField
                    fullWidth
                    InputLabelProps={{
                      style: {
                        color: "white",
                      },
                    }}
                    variant="outlined"
                    label="You get"
                    defaultValue="51,000"
                    InputProps={{
                      style: {
                        color: "white",
                        marginBottom: "30px",
                        backgroundColor: "#201c1c",
                      },
                      endAdornment: (
                        <Select
                          style={{ color: "white" }}
                          defaultValue="ETH"
                          label="You pay"
                        >
                          <MenuItem value="ETH">ETH</MenuItem>
                          <MenuItem value="USDT">USDT</MenuItem>
                        </Select>
                      ),
                    }}
                  />

                  <TextField
                    fullWidth
                    InputLabelProps={{
                      style: {
                        color: "white",
                      },
                    }}
                    variant="outlined"
                    label="You pay"
                    defaultValue="500"
                    InputProps={{
                      style: {
                        color: "white",
                        marginBottom: "30px",
                        backgroundColor: "#201c1c",
                      },
                      endAdornment: (
                        <Typography style={{ color: "white" }}>$XPP</Typography>
                      ),
                    }}
                  />
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#ffcc00",
                      textTransform: "none",
                      color: "#000",
                      width: "100%",
                      mb: 2,
                      "&:hover": {
                        backgroundColor: "#e6b800",
                      },
                    }}
                  >
                    Buy now
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      textTransform: "none",
                      color: "#ffcc00",
                      borderColor: "#ffcc00",
                      width: "100%",
                      "&:hover": {
                        color: "#e6b800",
                        borderColor: "#e6b800",
                      },
                    }}
                  >
                    Disconnect wallet
                  </Button>
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  sx={{
                    backgroundColor: "black",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                  mb={2}
                >
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 1, color: "#fff" }}
                  >
                    Private sale progress
                  </Typography>
                  <Box display="flex" justifyContent="space-between">
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ color: "#fff" }}
                    >
                      $0
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ color: "#fff" }}
                    >
                      $3 Million
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={20}
                    sx={{
                      mt: 1,
                      height: 10,
                      borderRadius: "20px",
                      backgroundColor: "#333",
                      "& .MuiLinearProgress-bar": {
                        borderRadius: "20px",
                        backgroundColor: "#ffcc00",
                      },
                    }}
                  />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ color: "#fff", mt: 1 }}
                  >
                    $528089.52
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
      <Divider
        sx={{
          width: "100%",
          height: "100%",
          background: "rgba(204, 204, 204, 1)",
          marginTop: "5%",
          marginBottom: "10px",
        }}
      />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        gap={5}
        sx={{
          alignItems: "center",
          py: "3%",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "16px", md: "20px" },
            fontFamily: '"Manrope", Helvetica',
            fontWeight: 400,
          }}
        >
          IMPLEMENTATION PARTNERS
        </Typography>
        <Stack direction="row" justifyContent="center" gap={{ xs: 1, md: 5 }}>
          <img
            src={Partner1}
            alt="Partner 1"
            style={{
              width: { xs: "48", md: "56px" },
              height: "auto",
            }}
          />
          <img
            src={Partner2}
            alt="Partner 2"
            style={{
              width: { xs: "48", md: "56px" },
              height: "auto",
            }}
          />
          <img
            src={Partner3}
            alt="Partner 3"
            style={{
              width: { xs: "48", md: "56px" },
              height: "auto",
            }}
          />
          <img
            src={Partner4}
            alt="Partner 4"
            style={{
              width: { xs: "48", md: "56px" },
              height: "auto",
            }}
          />
          <img
            src={Partner5}
            alt="Partner 4"
            style={{
              width: { xs: "48", md: "56px" },
              height: "auto",
            }}
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default Header;
