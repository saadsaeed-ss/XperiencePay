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
import Logo from "../assets/Logo.svg";

const logoStyle = {
  width: "200px",
  height: "auto",
  cursor: "pointer",
};

function AppAppBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
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
              <img
                src={Logo}
                style={logoStyle}
                alt="logo of Xperience Pay"
                href="#"
              />
            </Box>
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
              <MenuItem
                onClick={() => scrollToSection("about")}
                sx={{ py: "6px", px: "12px" }}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    color: "white",
                    fontFamily: '"Manrope", Helvetica',
                  }}
                >
                  About
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => scrollToSection("whyus")}
                sx={{ py: "6px", px: "12px" }}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    color: "white",
                    fontFamily: '"Manrope", Helvetica',
                  }}
                >
                  Why us
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => scrollToSection("products")}
                sx={{ py: "6px", px: "12px" }}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    color: "white",
                    fontFamily: '"Manrope", Helvetica',
                  }}
                >
                  Products
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => scrollToSection("XPPToken")}
                sx={{ py: "6px", px: "12px" }}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    color: "white",
                    fontFamily: '"Manrope", Helvetica',
                  }}
                >
                  XPP Token
                </Typography>
              </MenuItem>
              <MenuItem
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
              </MenuItem>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 0.5,
                alignItems: "center",
              }}
            >
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
                    onClick={() => scrollToSection("about")}
                    sx={{
                      fontSize: "14px",
                      color: "white",
                      fontFamily: '"Manrope", Helvetica',
                      fontWeight: 300,
                    }}
                  >
                    About
                  </MenuItem>
                  <MenuItem
                    onClick={() => scrollToSection("whyus")}
                    sx={{
                      fontSize: "14px",
                      color: "white",
                      fontFamily: '"Manrope", Helvetica',
                      fontWeight: 300,
                    }}
                  >
                    Why us
                  </MenuItem>
                  <MenuItem
                    onClick={() => scrollToSection("products")}
                    sx={{
                      fontSize: "14px",
                      color: "white",
                      fontFamily: '"Manrope", Helvetica',
                      fontWeight: 300,
                    }}
                  >
                    Products
                  </MenuItem>
                  <MenuItem
                    onClick={() => scrollToSection("XPPToken")}
                    sx={{
                      fontSize: "14px",
                      color: "white",
                      fontFamily: '"Manrope", Helvetica',
                      fontWeight: 300,
                    }}
                  >
                    XPP Token
                  </MenuItem>
                  <MenuItem
                    onClick={() => scrollToSection("Joinus")}
                    sx={{
                      fontSize: "14px",
                      color: "white",
                      fontFamily: '"Manrope", Helvetica',
                      fontWeight: 300,
                    }}
                  >
                    Join us
                  </MenuItem>
                  <Divider />
                  <MenuItem>
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
                        width: "100%",
                        "&:hover": {
                          backgroundColor: "#e6b300",
                        },
                      }}
                    >
                      Join ICO
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
