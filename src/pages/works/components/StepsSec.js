import React from "react";
import { Box, Container, Typography, Divider } from "@mui/material";

const StepsSec = () => {
  return (
    <>
      <Container
        sx={{
          px: { xs: "5%", md: "5%" },
          padding: "40px 0 0",
          minWidth: "100%",
          borderBottom: "1px solid rgba(204, 204, 204, 1)",
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
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
              mb: { xs: 4, md: 0 },
              padding: "0 6%",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "24px", md: "32px" },
                fontWeight: "bold",
                fontFamily: '"Manrope", Helvetica',
                color: "#FFD700",
                lineHeight: 1.3,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Create Your Free Xperience Pay Account
            </Typography>
          </Box>
          <Box
            sx={{
              flex: { xs: "0 1 auto", md: "1" },
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "14px", md: "18px" },
                lineHeight: "180%",
                fontFamily: '"Manrope", Helvetica',
                maxWidth: { xs: "100%", md: "100%" },
              }}
            >
              Head over to the Xperience Pay website and click on "Sign Up" to
              create a free account. <br />
              Provide your basic information and choose a secure password.{" "}
              <br />
              Connect your XPP wallet to your account. <br />
              Verify your email address to complete your registration.
            </Typography>
          </Box>
        </Box>
      </Container>

      <Container
        sx={{
          px: { xs: "5%", md: "5%" },
          padding: "40px 0 0px",
          minWidth: "100%",
          borderBottom: "1px solid rgba(204, 204, 204, 1)",
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
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
              mb: { xs: 4, md: 0 },
              padding: "0 6%",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "24px", md: "32px" },
                fontWeight: "bold",
                fontFamily: '"Manrope", Helvetica',
                color: "#FFD700",
                lineHeight: 1.3,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Explore the Marketplace
            </Typography>
          </Box>
          <Box
            sx={{
              flex: { xs: "0 1 auto", md: "1" },
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "14px", md: "18px" },
                lineHeight: "180%",
                fontFamily: '"Manrope", Helvetica',
                maxWidth: { xs: "100%", md: "100%" },
              }}
            >
              Browse through a curated selection of RWAs across various
              categories, including real estate, luxury goods, precious metals,
              art, and collectibles. <br />
              Utilize the search bar and filters to refine your search based on
              specific criteria such as location, asset type, and price range.{" "}
              <br />
              Each RWA listing provides detailed information, including
              high-quality photos, comprehensive descriptions, key metrics, and
              ownership details.
            </Typography>
          </Box>
        </Box>
      </Container>

      <Container
        sx={{
          px: { xs: "5%", md: "5%" },
          padding: "40px 0 0px",
          minWidth: "100%",
          borderBottom: "1px solid rgba(204, 204, 204, 1)",
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
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
              mb: { xs: 4, md: 0 },
              padding: "0 6%",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "24px", md: "32px" },
                fontWeight: "bold",
                fontFamily: '"Manrope", Helvetica',
                color: "#FFD700",
                lineHeight: 1.3,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Fund Your XPP Wallet
            </Typography>
          </Box>
          <Box
            sx={{
              flex: { xs: "0 1 auto", md: "1" },
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "14px", md: "18px" },
                lineHeight: "180%",
                fontFamily: '"Manrope", Helvetica',
                maxWidth: { xs: "100%", md: "100%" },
              }}
            >
              To purchase RWAs on the Xperience Pay marketplace, you'll need to
              have sufficient funds in your XPP Wallet. <br />
              You can easily transfer your existing cryptocurrency holdings from
              an external crypto wallet to your XPP Wallet. <br />
              Our platform utilizes Collateralized Debt Position (CDP) to
              convert fiat and cryptocurrencies into XPPUSD.
            </Typography>
          </Box>
        </Box>
      </Container>

      <Container
        sx={{
          px: { xs: "5%", md: "5%" },
          padding: "40px 0 0",
          minWidth: "100%",
          borderBottom: "1px solid rgba(204, 204, 204, 1)",
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
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
              mb: { xs: 4, md: 0 },
              padding: "0 6%",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "24px", md: "32px" },
                fontWeight: "bold",
                fontFamily: '"Manrope", Helvetica',
                color: "#FFD700",
                lineHeight: 1.3,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Initiate the Purchase Process
            </Typography>
          </Box>
          <Box
            sx={{
              flex: { xs: "0 1 auto", md: "1" },
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "14px", md: "18px" },
                lineHeight: "180%",
                fontFamily: '"Manrope", Helvetica',
                maxWidth: { xs: "100%", md: "100%" },
              }}
            >
              Once you've identified the RWA you wish to purchase, click on the
              "Buy Now" button on the specific asset listing. <br />
              Review the purchase details carefully, including the asset
              description, price, and any associated fees. <br />
              Select your preferred payment method – XPPUSD or another supported
              cryptocurrency.
              <br /> In case you select supported cryptocurrencies, Xperience
              Pay will instantly convert fiat and cryptocurrencies into XPPUSD
              by utilizing Collateralized Debt Position (CDP).
            </Typography>
          </Box>
        </Box>
      </Container>

      <Container
        sx={{
          px: { xs: "5%", md: "5%" },
          padding: "40px 0 0",
          minWidth: "100%",
          borderBottom: "1px solid rgba(204, 204, 204, 1)",
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
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
              mb: { xs: 4, md: 0 },
              padding: "0 6%",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "24px", md: "32px" },
                fontWeight: "bold",
                fontFamily: '"Manrope", Helvetica',
                color: "#FFD700",
                lineHeight: 1.3,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Secure Transaction with Smart Contracts
            </Typography>
          </Box>
          <Box
            sx={{
              flex: { xs: "0 1 auto", md: "1" },
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "14px", md: "18px" },
                lineHeight: "180%",
                fontFamily: '"Manrope", Helvetica',
                maxWidth: { xs: "100%", md: "100%" },
              }}
            >
              Xperience Pay leverages smart contracts to automate and execute
              the purchase transaction securely on the blockchain. <br />
              These self-executing contracts eliminate the need for
              intermediaries, reduce transaction costs, and enforce the
              predefined terms of the purchase agreement. <br />
              Xperience Pay utilizes its XPP Borderless Visa Business Card for
              cross-border transactions. This will enable the client to directly
              access the global marketplace and shop for more goods and
              services.
            </Typography>
          </Box>
        </Box>
      </Container>

      <Container
        sx={{
          px: { xs: "5%", md: "5%" },
          padding: "40px 0 0",
          minWidth: "100%",
          borderBottom: "1px solid rgba(204, 204, 204, 1)",
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
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
              mb: { xs: 4, md: 0 },
              padding: "0 6%",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "24px", md: "32px" },
                fontWeight: "bold",
                fontFamily: '"Manrope", Helvetica',
                color: "#FFD700",
                lineHeight: 1.3,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Secure Escrow Service
            </Typography>
          </Box>
          <Box
            sx={{
              flex: { xs: "0 1 auto", md: "1" },
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "14px", md: "18px" },
                lineHeight: "180%",
                fontFamily: '"Manrope", Helvetica',
                maxWidth: { xs: "100%", md: "100%" },
              }}
            >
              For added security, Xperience Pay utilizes an escrow service for
              the transaction. <br />
              <br />
              Your XPPUSD or cryptocurrency funds will be held securely in an
              escrow account until the seller fulfills their obligations, such
              as delivering the ownership rights to the RWA. Once confirmed, the
              funds are automatically released to the seller. services.
            </Typography>
          </Box>
        </Box>
      </Container>

      <Container
        sx={{
          px: { xs: "5%", md: "5%" },
          padding: "40px 0 0",
          minWidth: "100%",
          borderBottom: "1px solid rgba(204, 204, 204, 1)",
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
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
              mb: { xs: 4, md: 0 },
              padding: "0 6%",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "24px", md: "32px" },
                fontWeight: "bold",
                fontFamily: '"Manrope", Helvetica',
                color: "#FFD700",
                lineHeight: 1.3,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Track Your Order
            </Typography>
          </Box>
          <Box
            sx={{
              flex: { xs: "0 1 auto", md: "1" },
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "14px", md: "18px" },
                lineHeight: "180%",
                fontFamily: '"Manrope", Helvetica',
                maxWidth: { xs: "100%", md: "100%" },
              }}
            >
              Once the transaction is complete, the seller ships the purchased
              asset directly to your designated delivery address.
              <br /> Enjoy peace of mind knowing that your asset is on its way
              and track its delivery through our platform for added convenience.
            </Typography>
          </Box>
        </Box>
      </Container>

      <Container
        sx={{
          px: { xs: "5%", md: "5%" },
          padding: "40px 0 0",
          minWidth: "100%",
          borderBottom: "1px solid rgba(204, 204, 204, 1)",
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
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
              mb: { xs: 4, md: 0 },
              padding: "0 6%",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "24px", md: "32px" },
                fontWeight: "bold",
                fontFamily: '"Manrope", Helvetica',
                color: "#FFD700",
                lineHeight: 1.3,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Confirmation and Feedback
            </Typography>
          </Box>
          <Box
            sx={{
              flex: { xs: "0 1 auto", md: "1" },
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "14px", md: "18px" },
                lineHeight: "180%",
                fontFamily: '"Manrope", Helvetica',
                maxWidth: { xs: "100%", md: "100%" },
              }}
            >
              Upon receipt of the asset, confirm its delivery through our
              platform to finalize the transaction. <br />
              Share your feedback and experience to help us continuously improve
              our platform and services.
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default StepsSec;
