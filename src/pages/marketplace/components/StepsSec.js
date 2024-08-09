import React from "react";
import { Box, Container, Typography } from "@mui/material";

const StepsSec = () => {
  return (
    <>
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          width: "90%",
          position: "relative",
          px: { xs: "5%", md: "2%" },
          padding: "40px 0 0",
          overflow: "hidden",
          borderRadius: "10px",
          background:
            "linear-gradient(#0F1114, #0F1114) padding-box, linear-gradient(to right, #fdd835, #3A5EFC) border-box",
          border: "1px solid transparent",
          marginTop: "50px",
        }}
      >
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          alignItems="center"
          sx={{ mb: 4 }}
        >
          <Box
            sx={{
              flex: { xs: "0 1 auto", md: "0 0 30%" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              mb: { xs: 4, md: 0 },
              padding: "20px",
              background: "linear-gradient(90deg, #FFD700 0%, #4A90E2 100%)",
              borderRadius: "50px",
              height: "100%", // Ensure the height fills the parent container
              width: "fit-content",
              margin: { xs: "auto", md: "initial" },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "18px", md: "24px" },
                fontWeight: "bold",
                fontFamily: '"Manrope", Helvetica',
                color: "black",
                lineHeight: 1.3,
              }}
            >
              Secure transactions with smart contracts
            </Typography>
          </Box>
          <Box
            sx={{
              flex: { xs: "0 1 auto", md: "1" },
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
              mt: { xs: "30px", md: "0px" },
              padding: { xs: "0", md: "0 0 0 6%" },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "14px", md: "16px" },
                lineHeight: "180%",
                fontFamily: '"Manrope", Helvetica',
                maxWidth: { xs: "100%", md: "100%" },
                color: "white",
              }}
            >
              The heart of our marketplace is the use of smart contracts. These
              self-executing contracts would be programmed to record terms and
              automatically carry out those transactions without the reliance on
              intermediaries (parties in a contractual relationship) reducing
              the risk of fraud or non-compliance. Smart contracts ensure that
              the transactions are executed transparently, quickly, and safely
              by disclosing each other part of the deals-making trust.
            </Typography>
          </Box>
        </Box>
      </Container>

      <Container
        maxWidth={false}
        disableGutters
        sx={{
          width: "90%",
          position: "relative",
          px: { xs: "5%", md: "2%" },
          padding: "40px 0 0",
          overflow: "hidden",
          borderRadius: "10px",
          background:
            "linear-gradient(#0F1114, #0F1114) padding-box, linear-gradient(to right, #fdd835, #3A5EFC) border-box",
          border: "1px solid transparent",
          marginTop: "50px",
        }}
      >
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          alignItems="center"
          sx={{ mb: 4 }}
        >
          <Box
            sx={{
              flex: { xs: "0 1 auto", md: "0 0 30%" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              mb: { xs: 4, md: 0 },
              padding: "20px",
              background: "linear-gradient(90deg, #FFD700 0%, #4A90E2 100%)",
              borderRadius: "50px",
              height: "100%", // Ensure the height fills the parent container
              width: "fit-content",
              margin: { xs: "auto", md: "initial" },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "18px", md: "24px" },
                fontWeight: "bold",
                fontFamily: '"Manrope", Helvetica',
                color: "black",
                lineHeight: 1.3,
              }}
            >
              Enhanced Security with Escrow Accounts
            </Typography>
          </Box>
          <Box
            sx={{
              flex: { xs: "0 1 auto", md: "1" },
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
              mt: { xs: "30px", md: "0px" },
              padding: { xs: "0", md: "0 0 0 6%" },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "14px", md: "16px" },
                lineHeight: "180%",
                fontFamily: '"Manrope", Helvetica',
                maxWidth: { xs: "100%", md: "100%" },
                color: "white",
              }}
            >
              We also provide escrow accounts on our platform, to give you an
              extra layer of security and protection over the blockchain. Our
              escrow account is a way to hold funds in trust pending fulfillment
              of pre-established terms by both buyer and seller. This also helps
              to prevent financial risk or dispute and guarantees satisfaction
              and trust for both parties.
            </Typography>
          </Box>
        </Box>
      </Container>

      <Container
        maxWidth={false}
        disableGutters
        sx={{
          width: "90%",
          position: "relative",
          px: { xs: "5%", md: "2%" },
          padding: "40px 0 0",
          overflow: "hidden",
          borderRadius: "10px",
          background:
            "linear-gradient(#0F1114, #0F1114) padding-box, linear-gradient(to right, #fdd835, #3A5EFC) border-box",
          border: "1px solid transparent",
          marginTop: "50px",
        }}
      >
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          alignItems="center"
          sx={{ mb: 4 }}
        >
          <Box
            sx={{
              flex: { xs: "0 1 auto", md: "0 0 30%" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              mb: { xs: 4, md: 0 },
              padding: "20px",
              background: "linear-gradient(90deg, #FFD700 0%, #4A90E2 100%)",
              borderRadius: "50px",
              height: "100%", // Ensure the height fills the parent container
              width: "fit-content",
              margin: { xs: "auto", md: "initial" },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "18px", md: "24px" },
                fontWeight: "bold",
                fontFamily: '"Manrope", Helvetica',
                color: "black",
                lineHeight: 1.3,
              }}
            >
              Trusted Partnerships to Ensure Quality
            </Typography>
          </Box>
          <Box
            sx={{
              flex: { xs: "0 1 auto", md: "1" },
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
              mt: { xs: "30px", md: "0px" },
              padding: { xs: "0", md: "0 0 0 6%" },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "14px", md: "16px" },
                lineHeight: "180%",
                fontFamily: '"Manrope", Helvetica',
                maxWidth: { xs: "100%", md: "100%" },
                color: "white",
              }}
            >
              We aim to build a marketplace that people trust and that focuses
              on quality. That's why we've teamed up with well-known vendors
              from all over the world. To ensure they live up to our high
              standards, our partners go through a meticulous verification
              process. This gives buyers peace of mind when they deal with
              sellers. We've started with over 55 partners who together have
              sold goods having a combined Gross Merchandise Value (GMV) of USD
              23 billion. Our ecosystem offers many different types of
              real-world assets to suit all kinds of interests and investment
              goals all through crypto-based purchases.
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default StepsSec;
