import React from "react";
import { Container, Box, Grid, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import Divider from "@mui/material/Divider";
import StyledText from "../../../shared/components/StyledText";

const StatBox = styled(Box)(({ theme }) => ({
  padding: "48px",
  textAlign: "left",
  marginBottom: theme.spacing(2),
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    padding: "24px 30px 0px",
    width: "100%",
    borderTop: "1px solid gray",
  },
  [theme.breakpoints.between("sm", "md")]: {
    padding: "32px 32px 10px",
  },
}));

const StatGridItem = styled(Grid)(({ theme }) => ({
  "&:not(:first-of-type):not(:last-of-type)": {
    borderLeft: "1px solid gray",
    borderRight: "1px solid gray",
  },
  [theme.breakpoints.down("sm")]: {
    "&:not(:first-of-type):not(:last-of-type)": {
      borderLeft: "none",
      borderRight: "none",
      borderTop: "1px solid gray",
      borderBottom: "1px solid gray",
    },
  },
}));

function Counter() {
  const theme = useTheme();
  const stats = [
    { title: "Trusted Partners", value: "55+" },
    { title: "Gross Merchandise Value", value: "$23B" },
    { title: "Products", value: "100+" },
  ];

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        width: "100%",
        padding: 0,
        margin: 0,
      }}
    >
      <Grid container>
        {stats.map((stat, index) => (
          <StatGridItem
            item
            xs={12}
            sm={4}
            key={index}
            container
            justifyContent="left"
          >
            <StatBox>
              <StyledText fontSize="20px">{stat.title}</StyledText>
              <StyledText fontSize="48px" style={{ marginTop: "10px" }}>
                {stat.value}
              </StyledText>
            </StatBox>
          </StatGridItem>
        ))}
        <Divider
          sx={{
            width: "100%",
            background: "gray",
            marginBottom: "10px",
          }}
        />
      </Grid>
    </Container>
  );
}

export default Counter;
