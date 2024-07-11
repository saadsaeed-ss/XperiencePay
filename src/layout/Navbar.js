import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Logo from "./assets/Logo.svg";

const pages = [
  {
    title: "Home",
    isDropDown: false,
    options: [],
  },
  {
    title: "About Us",
    isDropDown: true,
    options: ["Team", "Company", "Careers"],
  },
  {
    title: "XPP Marketplace",
    isDropDown: false,
    options: [],
  },
  {
    title: "How it works?",
    isDropDown: false,
    options: [],
  },
  {
    title: "Our Products",
    isDropDown: true,
    options: ["Product 1", "Product 2", "Product 3"],
  },
  {
    title: "Documents",
    isDropDown: true,
    options: ["Whitepaper", "Terms of Service", "Privacy Policy"],
  },
];

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElDropdown, setAnchorElDropdown] = React.useState(null);
  const [dropdownIndex, setDropdownIndex] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleOpenDropdownMenu = (event, index) => {
    setDropdownIndex(index);
    setAnchorElDropdown(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseDropdownMenu = () => {
    setAnchorElDropdown(null);
    setDropdownIndex(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#0F1114",
        top: 0,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ display: { xs: "flex", md: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                justifyContent: "center",
                flexGrow: 1,
              }}
            >
              <img src={Logo} alt="logo" style={{ height: "40px" }} />
            </Box>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                mr: 2,
              }}
            >
              <img src={Logo} alt="logo" style={{ height: "40px" }} />
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                gap: "20px",
              }}
            >
              {pages.map((page, index) =>
                page.isDropDown ? (
                  <Box key={page.title} sx={{ position: "relative" }}>
                    <Button
                      onClick={(event) => handleOpenDropdownMenu(event, index)}
                      sx={{
                        my: 2,
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        fontSize: "0.875rem",
                        textTransform: "none",
                      }}
                    >
                      {page.title}
                      <ArrowDropDownIcon />
                    </Button>
                    {dropdownIndex === index && (
                      <Menu
                        anchorEl={anchorElDropdown}
                        open={Boolean(anchorElDropdown)}
                        onClose={handleCloseDropdownMenu}
                        sx={{ mt: "45px" }}
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "left",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "left",
                        }}
                      >
                        {page.options.map((option) => (
                          <MenuItem
                            key={option}
                            onClick={handleCloseDropdownMenu}
                          >
                            <Typography textAlign="center">{option}</Typography>
                          </MenuItem>
                        ))}
                      </Menu>
                    )}
                  </Box>
                ) : (
                  <Button
                    key={page.title}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",
                      fontSize: "0.875rem",
                      textTransform: "none",
                    }}
                  >
                    {page.title}
                  </Button>
                )
              )}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Button
                variant="contained"
                color="warning"
                sx={{
                  ml: 2,
                  backgroundColor: "#FFB000",
                  color: "black",
                  display: { xs: "block", md: "block" },
                }}
              >
                Join ICO
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </Container>

      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        {pages.map((page, index) => (
          <div key={page.title}>
            <MenuItem
              onClick={
                page.isDropDown
                  ? (event) => handleOpenDropdownMenu(event, index)
                  : handleCloseNavMenu
              }
            >
              <Typography textAlign="center">{page.title}</Typography>
              {page.isDropDown && <ArrowDropDownIcon />}
            </MenuItem>
            {page.isDropDown && dropdownIndex === index && (
              <Menu
                anchorEl={anchorElDropdown}
                open={Boolean(anchorElDropdown)}
                onClose={handleCloseDropdownMenu}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                {page.options.map((option) => (
                  <MenuItem key={option} onClick={handleCloseDropdownMenu}>
                    <Typography textAlign="center">{option}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            )}
          </div>
        ))}
      </Menu>

      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </AppBar>
  );
}

export default Navbar;
