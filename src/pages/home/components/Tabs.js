import React, { useState } from "react";
import { Box, Grid, Typography, Tabs, Tab } from "@mui/material";
import { styled } from "@mui/system";
import Sothebys from "../../../assets/sothebys.png";
import EmiratesEstate from "../../../assets/Emirates.png";
import Christies from "../../../assets/Christies.png";
import PropertyShare from "../../../assets/Property.png";
import Zillow from "../../../assets/zillow.png";
import Crexi from "../../../assets/crexi.png";

const tabs = [
  "Real Estate",
  "Precious Metals",
  "Luxury & Exotic Cars",
  "Luxury Yachts",
  "Aviation",
  "Hospitality",
  "Manufacturing",
];

const images = {
  "Real Estate": [
    Sothebys,
    EmiratesEstate,
    Christies,
    Christies,
    PropertyShare,
    Zillow,
    Crexi,
  ],
  "Precious Metals": [],
  "Luxury & Exotic Cars": [],
  "Luxury Yachts": [],
  Aviation: [],
  Hospitality: [],
  Manufacturing: [],
};

const TabPanel = ({ value, index, children }) => {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      sx={{ width: "100%" }}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Box>
  );
};

const VerticalTabs = styled(Tabs)(({ theme }) => ({
  borderRight: `1px solid ${theme.palette.divider}`,
  ".MuiTabs-indicator": {
    backgroundColor: "yellow",
  },
  ".MuiTab-root": {
    alignItems: "flex-start",
    textAlign: "left",
    color: "#fff",
    fontWeight: "bold",
    "&.Mui-selected": {
      color: "yellow",
    },
  },
}));

const ImageBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  alignItems: "center",
  height: "100%",
  border: "1px solid gray", // Adding border here
  padding: theme.spacing(2),
}));

const TabSec = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        padding: "80px 20px 30px",
        color: "#fff",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Grid container sx={{ height: "100%" }}>
        <Grid item xs={3} sx={{ backgroundColor: "#000" }}>
          <VerticalTabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs"
          >
            {tabs.map((tab, index) => (
              <Tab
                label={tab}
                key={index}
                id={`tab-${index}`}
                aria-controls={`tabpanel-${index}`}
              />
            ))}
          </VerticalTabs>
        </Grid>
        <Grid item xs={9}>
          {tabs.map((tab, index) => (
            <TabPanel value={value} index={index} key={index}>
              <ImageBox>
                {images[tab].map((image, idx) => (
                  <Box
                    key={idx}
                    component="img"
                    src={image}
                    alt={tab}
                    sx={{
                      maxWidth: "30%",
                      margin: 2,
                      border: "1px solid gray", // Adding border here
                    }}
                  />
                ))}
              </ImageBox>
            </TabPanel>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default TabSec;
