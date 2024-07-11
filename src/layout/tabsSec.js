import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SothebysLogo from "../assets/sothebys.png";
import EmiratesLogo from "../assets/Emirates.png";
import ChristiesLogo from "../assets/Christies.png";
import PropertyShareLogo from "../assets/Property.png";
import ZillowLogo from "../assets/zillow.png";
import CrexiLogo from "../assets/crexi.png";

const tabs = [
  "Real Estate",
  "Precious Metals",
  "Luxury & Exotic Cars",
  "Luxury Yachts",
  "Aviation",
  "Hospitality",
  "Manufacturing",
];

const logos = {
  "Real Estate": [
    SothebysLogo,
    EmiratesLogo,
    ChristiesLogo,
    PropertyShareLogo,

    CrexiLogo,
  ],
  "Precious Metals": [
    SothebysLogo,
    EmiratesLogo,
    ChristiesLogo,
    PropertyShareLogo,
  ],
  "Luxury & Exotic Cars": [
    SothebysLogo,
    EmiratesLogo,
    ChristiesLogo,
    PropertyShareLogo,
    ZillowLogo,
  ],
  "Luxury Yachts": [],
  Aviation: [],
  Hospitality: [],
  Manufacturing: [],
};

const TabsSec = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const theme = useTheme();
  const isMediumOrSmall = useMediaQuery(theme.breakpoints.down("lg"));

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Container
      sx={{
        display: "flex",
        minWidth: "100%",
        color: "#fff",
        fontFamily: '"Manrope", Helvetica',
        padding: "50px 0px 50px 50px",
        flexDirection: isMediumOrSmall ? "column" : "row",
      }}
    >
      <Box sx={{ width: isMediumOrSmall ? "100%" : "200px", padding: "20px" }}>
        <Tabs
          orientation={isMediumOrSmall ? "horizontal" : "vertical"}
          value={selectedTab}
          onChange={handleTabChange}
          TabIndicatorProps={{ style: { backgroundColor: "yellow" } }}
          variant="scrollable"
          scrollButtons="auto"
          sx={{ borderBottom: isMediumOrSmall ? 1 : 0, borderColor: "divider" }}
        >
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              label={
                <Typography
                  sx={{
                    color: selectedTab === index ? "yellow" : "#fff",
                    fontFamily: '"Manrope", Helvetica',
                    fontSize: "14px",
                  }}
                >
                  {tab}
                </Typography>
              }
            />
          ))}
        </Tabs>
      </Box>
      <Box sx={{ flex: 1, padding: "20px" }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: isMediumOrSmall ? "center" : "flex-start", // Center on medium/small screens
          }}
        >
          {logos[tabs[selectedTab]].map((logo, index) => (
            <Box
              key={index}
              sx={{
                width: { xs: "100%", sm: "50%", md: "50%", lg: "25%" }, // Responsive widths
                height: "150px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid gray", // Add border here
                boxSizing: "border-box", // Ensure the border is included in the element's dimensions
              }}
            >
              <img
                src={logo}
                alt="logo"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default TabsSec;
