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
              sx={{
                fontSize: { xs: "18px", md: "24px" },
                fontWeight: "bold",
                fontFamily: '"Manrope", Helvetica',
                color: "black",
                lineHeight: 1.3,
              }}
            >
              Empowering Transactions with Smart Contracts
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
              At the heart of our marketplace lies the utilization of smart
              contracts. These self-executing agreements automate and enforce
              transaction terms, eliminating the need for intermediaries and
              reducing the risk of fraud or non-compliance. With smart
              contracts, transactions are executed transparently, efficiently,
              and securely, fostering trust among transacting parties.
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
              In addition to smart contracts, we integrate escrow accounts into
              our platform to provide an extra layer of security and protection
              for users. Escrow accounts hold funds in trust until predetermined
              conditions are met, ensuring that both buyers and sellers fulfill
              their obligations. This mitigates the risk of financial loss or
              dispute, instilling confidence, and peace of mind for all parties
              involved.
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
              sx={{
                fontSize: { xs: "18px", md: "24px" },
                fontWeight: "bold",
                fontFamily: '"Manrope", Helvetica',
                color: "black",
                lineHeight: 1.3,
              }}
            >
              Trusted Partnerships for Quality Assurance
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
              We believe in creating a trusted and quality-centered marketplace,
              which is why we've forged strategic partnerships with reputable
              vendors worldwide. Our partners undergo a meticulous attestation
              process to ensure they meet our high standards, empowering buyers
              with the confidence to interact with reputable sellers. With over
              55 initial partners boasting a combined Gross Merchandise Value
              (GMV) of USD 23 billion, our ecosystem offers a diverse selection
              of RWAs to cater to every interest and investment goal.
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default StepsSec;
