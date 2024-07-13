import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Logo from "../assets/Logo.svg";

const logoStyle = {
  width: "300px",
  height: "auto",
};

function Copyright() {
  return (
    <Typography variant="body2" color="#ffffff" mt={1}>
      {"Copyright © "}
      {new Date().getFullYear()}
      <Link href="https://xperiencepay.com/" color="hsla(47, 100%, 50%, 1)">
        {" "}
        Xperience Pay.{" "}
      </Link>
      All rights reserved.&nbsp;
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
      sx={{
        bgcolor: "#0F1114",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 2, sm: 6 },
        py: { xs: 6, sm: 10 },
        textAlign: { sm: "left", md: "left" },
        minWidth: "100%",
        px: { xs: "5%", lg: "5%" },
        borderTop: "1px solid",
        borderColor: "#ffffff33",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            minWidth: { xs: "100%", sm: "20%" },
            maxWidth: "35%",
          }}
        >
          <img src={Logo} style={logoStyle} alt="logo of Xperience Pay" />
          <Typography
            variant="body2"
            mt={2}
            sx={{ color: "hsla(0, 0%, 100%, 0.8)" }}
          >
            Xperience Pay (XPP) gives you the ability to buy, sell and manage
            RWAs on our secure, user-friendly WEB3 marketplace, making
            crypto-based purchases more convenient.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            maxWidth: "50%",
            justifyContent: "space-between",
            flex: 1,
            gap: { xs: 2, sm: 4 },
          }}
        >
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography
              variant="h6"
              fontSize="14px"
              fontWeight={600}
              color={"white"}
              fontFamily={'"Manrope", Helvetica'}
            >
              Product
            </Typography>
            <Link
              sx={{
                color: "hsla(0, 0%, 100%, 0.8)",
                textDecoration: "none",
                "&:hover": { color: "hsla(47, 100%, 50%, 1)" },
              }}
              href="#"
            >
              XPP Web 3 Marketplace
            </Link>
            <Link
              sx={{
                color: "hsla(0, 0%, 100%, 0.8)",
                textDecoration: "none",
                "&:hover": { color: "hsla(47, 100%, 50%, 1)" },
              }}
              href="#"
            >
              XPP Stablecoin
            </Link>
            <Link
              sx={{
                color: "hsla(0, 0%, 100%, 0.8)",
                textDecoration: "none",
                "&:hover": { color: "hsla(47, 100%, 50%, 1)" },
              }}
              href="#"
            >
              XPP Wallet
            </Link>
            <Link
              sx={{
                color: "hsla(0, 0%, 100%, 0.8)",
                textDecoration: "none",
                "&:hover": { color: "hsla(47, 100%, 50%, 1)" },
              }}
              href="#"
            >
              Cross-Border Payments
            </Link>
            <Link
              sx={{
                color: "hsla(0, 0%, 100%, 0.8)",
                textDecoration: "none",
                "&:hover": { color: "hsla(47, 100%, 50%, 1)" },
              }}
              href="#"
            >
              XPP Prepaid Borderless Visa Business Card
            </Link>
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography
              variant="h6"
              fontSize="14px"
              fontWeight={600}
              color={"white"}
            >
              Token
            </Typography>
            <Link
              sx={{
                color: "hsla(0, 0%, 100%, 0.8)",
                textDecoration: "none",
                "&:hover": { color: "hsla(47, 100%, 50%, 1)" },
              }}
              href="#"
            >
              $XPP Token
            </Link>
            <Link
              sx={{
                color: "hsla(0, 0%, 100%, 0.8)",
                textDecoration: "none",
                "&:hover": { color: "hsla(47, 100%, 50%, 1)" },
              }}
              href="#"
            >
              Join ICO
            </Link>
            <Link
              sx={{
                color: "hsla(0, 0%, 100%, 0.8)",
                textDecoration: "none",
                "&:hover": { color: "hsla(47, 100%, 50%, 1)" },
              }}
              href="#"
            >
              XPP Staking
            </Link>
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography
              variant="h6"
              fontSize="14px"
              fontWeight={600}
              color={"white"}
            >
              About
            </Typography>
            <Link
              sx={{
                color: "hsla(0, 0%, 100%, 0.8)",
                textDecoration: "none",
                "&:hover": { color: "hsla(47, 100%, 50%, 1)" },
              }}
              href="#"
            >
              About us
            </Link>
            <Link
              sx={{
                color: "hsla(0, 0%, 100%, 0.8)",
                textDecoration: "none",
                "&:hover": { color: "hsla(47, 100%, 50%, 1)" },
              }}
              href="#"
            >
              Careers
            </Link>
            <Link
              sx={{
                color: "hsla(0, 0%, 100%, 0.8)",
                textDecoration: "none",
                "&:hover": { color: "hsla(47, 100%, 50%, 1)" },
              }}
              href="#"
            >
              Contact Support
            </Link>
            <Link
              sx={{
                color: "hsla(0, 0%, 100%, 0.8)",
                textDecoration: "none",
                "&:hover": { color: "hsla(47, 100%, 50%, 1)" },
              }}
              href="#"
            >
              Legal
            </Link>
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography
              variant="h6"
              fontSize="14px"
              fontWeight={600}
              color={"white"}
            >
              Community
            </Typography>
            <Link
              sx={{
                color: "hsla(0, 0%, 100%, 0.8)",
                textDecoration: "none",
                "&:hover": { color: "hsla(47, 100%, 50%, 1)" },
              }}
              href="https://x.com/XperiencePay"
            >
              X
            </Link>
            <Link
              sx={{
                color: "hsla(0, 0%, 100%, 0.8)",
                textDecoration: "none",
                "&:hover": { color: "hsla(47, 100%, 50%, 1)" },
              }}
              href="https://t.me/XperiencePay"
            >
              Telegram
            </Link>
            <Link
              sx={{
                color: "hsla(0, 0%, 100%, 0.8)",
                textDecoration: "none",
                "&:hover": { color: "hsla(47, 100%, 50%, 1)" },
              }}
              href="https://discord.com/invite/xperiencepayfintech"
            >
              Discord
            </Link>
            <Link
              sx={{
                color: "hsla(0, 0%, 100%, 0.8)",
                textDecoration: "none",
                "&:hover": { color: "hsla(47, 100%, 50%, 1)" },
              }}
              href="#"
            >
              Facebook
            </Link>
            <Link
              sx={{
                color: "hsla(0, 0%, 100%, 0.8)",
                textDecoration: "none",
                "&:hover": { color: "hsla(47, 100%, 50%, 1)" },
              }}
              href="#"
            >
              Instagram
            </Link>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          pt: { xs: 3, sm: 4 },
          width: "100%",
          borderTop: "1px solid",
          borderColor: "#ffffff33",
          gap: { xs: 2 },
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "white",
              fontSize: { xs: "14px", md: "14px" },
              lineHeight: "170%",
              textAlign: "left",
              fontFamily: '"Manrope", Helvetica',
              fontWeight: 300,
            }}
          >
            10490 Little Patuxent Pkwy, <br /> Suite 600 Columbia Maryland 21044
            <br /> Tel: +1.410.372.4342 <br />{" "}
            <a
              href="mailto:info@xperiencepay.com"
              style={{ color: "white", textDecoration: "none" }}
            >
              Mail : info@xperiencepay.com
            </a>
          </Typography>
        </Box>
        <Box textAlign={{ xs: "left", md: "right" }}>
          <Copyright
            sx={{
              color: "white",
              fontSize: { xs: "14px", md: "14px" },
              lineHeight: "170%",
              textAlign: "left",
              fontFamily: '"Manrope", Helvetica',
              fontWeight: 300,
            }}
          />
          <Link
            color="#ffffff"
            href="#"
            sx={{
              color: "white",
              fontSize: { xs: "14px", md: "14px" },
              lineHeight: "170%",
              textAlign: "left",
              fontFamily: '"Manrope", Helvetica',
              fontWeight: 300,
            }}
          >
            Privacy Policy
          </Link>
          <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <Link
            color="#ffffff"
            href="#"
            sx={{
              color: "white",
              fontSize: { xs: "14px", md: "14px" },
              lineHeight: "170%",
              textAlign: "left",
              fontFamily: '"Manrope", Helvetica',
              fontWeight: 300,
            }}
          >
            Terms of Service
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: 1, md: 2 },
          borderTop: "1px solid",
          borderColor: "#ffffff33",
          pt: { xs: 2, sm: 4 },
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: "14px",
              md: "20px",
            },
            lineHeight: "170%",
            fontFamily: '"Manrope", Helvetica',
            fontWeight: 600,
          }}
        >
          Disclaimer
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xs: "10px",
              md: "14px",
            },
            lineHeight: "170%",
            fontFamily: '"Manrope", Helvetica',
            fontWeight: 300,
            color: "rgba(255, 255, 255, 0.7)",
          }}
        >
          The information contained on this website is for general informational
          purposes only and does not constitute financial, legal, tax, or other
          professional advice. You should not base any investment or other
          decisions solely on the information provided on this website. Always
          consult with a qualified professional before making any financial or
          other decisions. Investing in cryptocurrency and digital assets
          carries significant risks. The value of your holdings can fluctuate
          dramatically, and you could lose some or all of your investment.{" "}
          <br />
          Nothing on this website constitutes an offer to sell or a solicitation
          of an offer to buy any securities, digital assets, or other regulated
          products or services. While we strive to provide accurate and
          up-to-date information, we make no guarantees or warranties about the
          accuracy, completeness, or reliability of any information on this
          website.
          <br />
          The information and services provided on this website are not intended
          for distribution to, or use by, any person in any jurisdiction or
          country where such distribution or use would be contrary to local law
          or regulation. Users are responsible for complying with all applicable
          laws and regulations in their respective jurisdictions. Xperience Pay
          will not be liable for any damages arising out of or related to the
          use of this website. Xperience Pay reserves the right to change this
          disclaimer at any time without prior notice.
          <br />
          This website may contain links to external websites that are not
          controlled by Xperience Pay. Xperience Pay is not responsible for the
          content or accuracy of any external website.
          <br />
          By using this website, you agree to the terms of this disclaimer.
        </Typography>
      </Box>
    </Container>
  );
}
