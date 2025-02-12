import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Logo from "../assets/Logo.svg";
import Menu from "@mui/material/Menu";

const logoStyle = {
  width: "200px",
  height: "auto",
  cursor: "pointer",
};

function AppAppBar() {
  const [open, setOpen] = React.useState(false);
  const [anchorElAbout, setAnchorElAbout] = React.useState(null);
  const [anchorElProducts, setAnchorElProducts] = React.useState(null);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleMenuOpen = (event, menu) => {
    if (menu === "about") {
      setAnchorElAbout(event.currentTarget);
    } else if (menu === "products") {
      setAnchorElProducts(event.currentTarget);
    }
  };

  const handleMenuClose = (menu) => {
    if (menu === "about") {
      setAnchorElAbout(null);
    } else if (menu === "products") {
      setAnchorElProducts(null);
    }
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
      setOpen(false);
    }
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: "#0F1114",
          backgroundImage: "none",
          py: 1,
          px: { xs: "", md: "2.5%" },
        }}
      >
        <Container maxWidth="100%">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 0,
              bgcolor: "#0F1114",
              maxHeight: 40,
              border: "1px solid",
              borderColor: "divider",
            })}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                px: 0,
              }}
            >
              <a href="/">
                <img src={Logo} style={logoStyle} alt="logo of Xperience Pay" />
              </a>
            </Box>
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
              <MenuItem
                onClick={(event) => (window.location.href = "/")}
                sx={{ py: "6px", px: "12px" }}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    color: "white",
                    fontFamily: '"Manrope", Helvetica',
                  }}
                >
                  Home
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={(event) => handleMenuOpen(event, "about")}
                sx={{
                  py: "6px",
                  px: "12px",
                  color: anchorElAbout ? "#FDC500" : "white",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontFamily: '"Manrope", Helvetica',
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Company
                  <ArrowDropDownIcon sx={{ ml: 1 }} />
                </Typography>
              </MenuItem>
              <Menu
                anchorEl={anchorElAbout}
                open={Boolean(anchorElAbout)}
                onClose={() => handleMenuClose("about")}
                sx={{
                  "& .MuiPaper-root": {
                    bgcolor: "#0F1114",
                    color: "white",
                    borderColor: "#3f4143",
                    borderStyle: "solid",
                    borderWidth: "1px",
                  },
                }}
              >
                <MenuItem
                  onClick={() => {
                    window.location.href = "/about/";
                    handleMenuClose("about");
                  }}
                  sx={{ color: "white" }}
                >
                  About
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    window.location.href = "/trusted-sellers/";
                    handleMenuClose("about");
                  }}
                  sx={{ color: "white" }}
                >
                  Trusted Sellers
                </MenuItem>
              </Menu>
              <MenuItem
                onClick={(event) =>
                  (window.location.href = "/xpp-marketplace/")
                }
                sx={{
                  py: "6px",
                  px: "12px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    color: "white",
                    fontFamily: '"Manrope", Helvetica',
                  }}
                >
                  XPP Marketplace
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={(event) => (window.location.href = "/how-it-works/")}
                sx={{ py: "6px", px: "12px" }}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    color: "white",
                    fontFamily: '"Manrope", Helvetica',
                  }}
                >
                  How it works?
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={(event) => handleMenuOpen(event, "products")}
                sx={{
                  py: "6px",
                  px: "12px",
                  color: anchorElProducts ? "#FDC500" : "white",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontFamily: '"Manrope", Helvetica',
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Our Products
                  <ArrowDropDownIcon sx={{ ml: 1 }} />
                </Typography>
              </MenuItem>
              <Menu
                anchorEl={anchorElProducts}
                open={Boolean(anchorElProducts)}
                onClose={() => handleMenuClose("products")}
                sx={{
                  "& .MuiPaper-root": {
                    bgcolor: "#0F1114",
                    color: "white",
                    borderColor: "#3f4143",
                    borderStyle: "solid",
                    borderWidth: "1px",
                  },
                }}
              >
                <MenuItem
                  onClick={() => {
                    window.location.href = "/xppusd-stablecoin/";
                    handleMenuClose("prodcuts");
                  }}
                  sx={{ color: "white" }}
                >
                  XPPUSD Stablecoin
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    window.location.href = "/xpp-wallet/";
                    handleMenuClose("prodcuts");
                  }}
                  sx={{ color: "white" }}
                >
                  XPP Wallet
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    window.location.href = "/cross-border-payments/";
                    handleMenuClose("products");
                  }}
                  sx={{ color: "white" }}
                >
                  Cross-Border Payments
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    window.location.href =
                      "/xpp-prepaid-borderless-visa-business-card/";
                    handleMenuClose("products");
                  }}
                  sx={{ color: "white" }}
                >
                  XPP Prepaid Borderless Visa Business Card
                </MenuItem>
              </Menu>
              {/*<MenuItem
                onClick={() => scrollToSection("Joinus")}
                sx={{ py: "6px", px: "12px" }}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    color: "white",
                    fontFamily: '"Manrope", Helvetica',
                  }}
                >
                  Join us
                </Typography>
              </MenuItem>*/}
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 0.5,
                alignItems: "center",
              }}
            >
              <Button
                href="https://app.galxe.com/quest/XperiencePay"
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
                Join Airdrop
              </Button>
            </Box>
            <Box
              sx={{
                display: { sm: "", md: "none" },
                backgroundColor: "#0F1114",
              }}
            >
              <Button
                variant="text"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: "30px", p: "4px", color: "#FDC500" }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: "60dvw",
                    p: 2,
                    backgroundColor: "#0F1114",
                    flexGrow: 1,
                  }}
                >
                  <MenuItem
                    // onClick={() => scrollToSection("whyus")}
                    sx={{ py: "6px", px: "12px" }}
                  >
                    <Typography
                      sx={{
                        fontSize: "16px",
                        color: "white",
                        fontFamily: '"Manrope", Helvetica',
                      }}
                    >
                      Home
                    </Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={(event) => handleMenuOpen(event, "about")}
                    sx={{
                      py: "6px",
                      px: "12px",
                      color: anchorElAbout ? "#FDC500" : "white",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontFamily: '"Manrope", Helvetica',
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      Company
                      <ArrowDropDownIcon sx={{ ml: 1 }} />
                    </Typography>
                  </MenuItem>
                  <Menu
                    anchorEl={anchorElAbout}
                    open={Boolean(anchorElAbout)}
                    onClose={() => handleMenuClose("about")}
                    sx={{
                      "& .MuiPaper-root": {
                        bgcolor: "#0F1114",
                        color: "white",
                        borderColor: "#3f4143",
                        borderStyle: "solid",
                        borderWidth: "1px",
                      },
                    }}
                  >
                    <MenuItem
                      onClick={() => {
                        window.location.href = "/about-us";
                        handleMenuClose("about");
                      }}
                      sx={{ color: "white" }}
                    >
                      About
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        window.location.href = "/trusted-sellers";
                        handleMenuClose("about");
                      }}
                      sx={{ color: "white" }}
                    >
                      Trusted Sellers
                    </MenuItem>
                  </Menu>
                  <MenuItem
                    onClick={(event) => (window.location.href = "/marketplace")}
                    sx={{
                      py: "6px",
                      px: "12px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "16px",
                        color: "white",
                        fontFamily: '"Manrope", Helvetica',
                      }}
                    >
                      XPP Marketplace
                    </Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={(event) => (window.location.href = "/works")}
                    sx={{ py: "6px", px: "12px" }}
                  >
                    <Typography
                      sx={{
                        fontSize: "16px",
                        color: "white",
                        fontFamily: '"Manrope", Helvetica',
                      }}
                    >
                      How it works?
                    </Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={(event) => handleMenuOpen(event, "products")}
                    sx={{
                      py: "6px",
                      px: "12px",
                      color: anchorElProducts ? "#FDC500" : "white",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontFamily: '"Manrope", Helvetica',
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      Our Products
                      <ArrowDropDownIcon sx={{ ml: 1 }} />
                    </Typography>
                  </MenuItem>
                  <Menu
                    anchorEl={anchorElProducts}
                    open={Boolean(anchorElProducts)}
                    onClose={() => handleMenuClose("products")}
                    sx={{
                      "& .MuiPaper-root": {
                        bgcolor: "#0F1114",
                        color: "white",
                        borderColor: "#3f4143",
                        borderStyle: "solid",
                        borderWidth: "1px",
                      },
                    }}
                  >
                    <MenuItem
                      onClick={() => {
                        window.location.href = "/stablecoin";
                        handleMenuClose("prodcuts");
                      }}
                      sx={{ color: "white" }}
                    >
                      XPPUSD Stablecoin
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        window.location.href = "/wallet";
                        handleMenuClose("prodcuts");
                      }}
                      sx={{ color: "white" }}
                    >
                      XPP Wallet
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        scrollToSection("about-subsection2");
                        handleMenuClose("products");
                      }}
                      sx={{ color: "white" }}
                    >
                      Cross-Border Payments
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        scrollToSection("about-subsection2");
                        handleMenuClose("products");
                      }}
                      sx={{ color: "white" }}
                    >
                      XPP Borderless Visa Business Card
                    </MenuItem>
                  </Menu>
                  {/* <MenuItem
                    onClick={() => scrollToSection("Joinus")}
                    sx={{ py: "6px", px: "12px" }}
                  >
                    <Typography
                      sx={{
                        fontSize: "16px",
                        color: "white",
                        fontFamily: '"Manrope", Helvetica',
                      }}
                    >
                      Join us
                    </Typography>
                  </MenuItem>*/}
                  <Divider />
                  <MenuItem>
                    <Button
                      href="https://zealy.io/cw/xperiencepay/questboard"
                      variant="contained"
                      size="medium"
                      sx={{
                        fontWeight: 500,
                        textTransform: "none",
                        fontFamily: '"Manrope", Helvetica',
                        backgroundColor: "#FDC500",
                        color: "#0F1114",
                        width: "100%",
                        "&:hover": {
                          backgroundColor: "#e6b300",
                        },
                      }}
                    >
                      Join Airdrop
                    </Button>
                  </MenuItem>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

AppAppBar.propTypes = {
  mode: PropTypes.oneOf(["dark", "light"]),
  toggleColorMode: PropTypes.func,
};

export default AppAppBar;
