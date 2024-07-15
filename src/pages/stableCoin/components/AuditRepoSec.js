import React from "react";
import { Box, Container, Typography, Divider } from "@mui/material";
import Image from "../../../assets/auditRepoSec.svg";

const AuditRepoSec = () => {
  return (
    <Box
      sx={{
        mt: 5,
        padding: "32px 0 0 0",
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
            display="flex"
            justifyContent={{ xs: "center", md: "flex-start" }}
            sx={{
              width: { xs: "100%", md: "auto" },
              mt: { xs: 4, md: 0 },
            }}
          >
            <img src={Image} style={{ width: "90%" }} />
          </Box>

          <Box
            flex={1}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
              mt: { xs: 4, md: 0 },
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
                  fontSize: { xs: "20px", md: "36px" },
                  fontWeight: "bold",
                  fontFamily: '"Manrope", Helvetica',
                  color: "white",
                  lineHeight: 1.1,
                }}
              >
                Regular Audits and Reporting
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
                XPP prioritizes user trust and confidence. To achieve this,
                XPPUSD undergoes regular audits by independent third-party
                firms.
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
                These audits verify the integrity of the reserve system and
                ensure the continued 1:1 peg of XPPUSD to the US dollar.
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
                The results of these audits are made publicly available,
                fostering transparency and accountability within the Xperience
                Pay ecosystem.
              </Typography>
            </Box>
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
    </Box>
  );
};

export default AuditRepoSec;
