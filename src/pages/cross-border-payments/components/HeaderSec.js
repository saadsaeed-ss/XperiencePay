import React from "react";
import { Box, Container, Typography, Divider } from "@mui/material";
import StablecoinIcon from "../../../assets/stablecoinsmall.svg";
import WalletIcon from "../../../assets/xppwalletsmall.svg";
import WorldIcon from "../../../assets/world.svg";

const Header = () => {
  return (
    <Box
      sx={{
        mt: 5,
        mb: 5,
        padding: "75px 0 0 0",
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
                Cross-Border Payments
              </Typography>
              <Typography
                gutterBottom
                sx={{
                  fontSize: { sx: "14px", md: "18px" },
                  lineHeight: "170%",
                  fontFamily: '"Manrope", Helvetica',
                  maxWidth: { xs: "100%", md: "100%" },
                }}
              >
                The world is becoming increasingly interconnected, and the need
                for swift, cost-effective cross-border payments has never been
                greater. Traditional financial institutions often impose high
                fees, lengthy processing times, and complex procedures that
                hinder the seamless flow of funds across borders.
              </Typography>
              <Typography
                sx={{
                  fontSize: { sx: "14px", md: "18px" },
                  color: "#FDC500",
                  lineHeight: "170%",
                  fontFamily: '"Manrope", Helvetica',
                  maxWidth: { xs: "100%", md: "100%" },
                }}
              >
                Xperience Pay (XPP) disrupts this outdated system by offering a
                revolutionary solution for cross-border payments using its
                stablecoin (XPPUSD) and the XPP Wallet. XPP uses its innovative
                technology to simplify the complexities of international
                transfers, offering transparent and cost-effective solutions to
                customers. With a network spanning over 170 countries and a
                reputation for customer service.
              </Typography>
            </Box>
          </Box>
          <Box
            flex={1}
            display="flex"
            flexDirection="column"
            justifyContent={{ xs: "center", md: "flex-end" }}
            sx={{
              mt: { xs: 4, md: 0 },
              ml: { xs: 0, md: 10 },
            }}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              width="100%"
              mb={4}
            >
              <Box
                display="flex"
                flexDirection="column"
                flex={1}
                backgroundColor="#181B20"
                borderRadius={"8px"}
                alignItems="left"
                padding={"20px"}
                mr={2}
              >
                <img
                  src={StablecoinIcon}
                  alt="Stablecoin"
                  style={{ width: "64px", height: "64px" }}
                />
                <Typography
                  sx={{
                    fontSize: { xs: "16px", md: "20px" },
                    color: "white",
                    mt: 4,
                    fontFamily: '"Manrope", Helvetica',
                  }}
                >
                  Stablecoin (XPPUSD)
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                flex={1}
                backgroundColor="#181B20"
                borderRadius={"8px"}
                padding={"20px"}
                ml={2}
                alignItems="left"
              >
                <img
                  src={WalletIcon}
                  alt="XPP Wallet"
                  style={{ width: "64px", height: "64px" }}
                />
                <Typography
                  sx={{
                    fontSize: { xs: "16px", md: "20px" },
                    color: "white",
                    mt: 4,
                    fontFamily: '"Manrope", Helvetica',
                  }}
                >
                  XPP Wallet
                </Typography>
              </Box>
            </Box>
            <Box
              display="flex"
              flexDirection={{ xs: "column", md: "row" }}
              sx={{
                backgroundColor: "#181B20",
                borderRadius: "8px",
                p: 4,
              }}
            >
              <Box
                display="flex"
                flexDirection="column"
                sx={{
                  mr: { md: 2 },
                  mb: { xs: 2, md: 0 },
                }}
              >
                <img
                  src={WorldIcon}
                  alt="170 Countries"
                  style={{
                    width: "120px",
                    height: "120px",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: { xs: "16px", md: "20px" },
                    fontFamily: '"Manrope", Helvetica',
                    mt: "20px",
                  }}
                >
                  170 Countries
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                sx={{
                  maxWidth: { xs: "100%", md: "70%" },
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "14px", md: "16px" },
                    color: "#FDC500",
                    lineHeight: "170%",
                    fontFamily: '"Manrope", Helvetica',
                    ml: { xs: 0, md: 10 },
                  }}
                >
                  XPP has become a trusted partner for many businesses, helping
                  them streamline their global payment processes, and accepting
                  cryptocurrencies.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      <Divider
        sx={{
          width: "100%",
          height: "100%",
          background: "#ffffff33",
          marginTop: "5%",
          marginBottom: "10px",
        }}
      />
    </Box>
  );
};

export default Header;
