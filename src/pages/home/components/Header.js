import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "../../../../node_modules/swiper/swiper-bundle.min.css";
import {
  Box,
  Button,
  Container,
  Typography,
  SvgIcon,
  TextField,
  Card,
  CardContent,
  LinearProgress,
  Select,
  MenuItem,
  Divider,
  Stack,
  IconButton,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import HeaderBg from "../../../assets/HeaderBg.png";
import Partner1 from "../../../assets/P1.png";
import Partner2 from "../../../assets/P2.png";
import Partner3 from "../../../assets/P3.png";
import Partner4 from "../../../assets/P4.png";
import Partner5 from "../../../assets/P5.png";
import TelegramIcon from "@mui/icons-material/Telegram";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

function DiscordIcon(props) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <title>discord_fill</title>
        <g id="discord_fill" fill="none" fill-rule="evenodd">
          <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z" />
          <path
            fill="#0F1114"
            d="M15.003 4c.744 0 1.53.26 2.25.547l.527.216c1.26.528 1.968 1.636 2.517 2.853.891 1.975 1.51 4.608 1.724 6.61.102.95.127 1.906-.056 2.549-.197.687-.867 1.173-1.518 1.555l-.322.183-.334.186c-.172.096-.349.191-.525.284l-.522.27-.717.357-.577.284a1 1 0 1 1-.894-1.788l.79-.39-.58-.609c-1.39.57-3.027.893-4.766.893-1.739 0-3.376-.322-4.766-.893l-.58.608.793.39a1 1 0 1 1-.894 1.79l-.544-.27c-.402-.2-.805-.398-1.203-.607l-.928-.505-.321-.183c-.651-.382-1.322-.868-1.518-1.555-.184-.643-.158-1.598-.057-2.55.214-2.001.833-4.634 1.724-6.609.549-1.217 1.257-2.325 2.517-2.853C7.059 4.413 8.072 4 9 4c.603 0 1.077.555.99 1.147A13.65 13.65 0 0 1 12 5c.691 0 1.366.05 2.014.148A1.012 1.012 0 0 1 15.004 4ZM8.75 10.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5Zm6.5 0a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5Z"
          />
        </g>
      </svg>
    </SvgIcon>
  );
}

const Header = () => {
  return (
    <Box
      sx={{
        mt: 10,
        py: 4,
        backgroundImage: `url(${HeaderBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
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
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
              mb: { xs: 4, md: 0 },
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
                  fontSize: { xs: "48px", md: "64px" },
                  fontWeight: "bold",
                  fontFamily: '"Manrope", Helvetica',
                  color: "white",
                  lineHeight: 1.1,
                }}
              >
                Experience the Future of Finance with Xperience Pay
              </Typography>
              <Typography
                gutterBottom
                sx={{
                  fontSize: { sx: "14px", md: "18px" },
                  color: "white",
                  lineHeight: "170%",
                  fontFamily: '"Manrope", Helvetica',
                  maxWidth: { xs: "100%", md: "80%" },
                }}
              >
                Xperience Pay (XPP) empowers you to seamlessly buy, sell, and
                manage RWAs on our secure, user-friendly WEB3 marketplace.
              </Typography>
            </Box>
            <Box>
              <div style={{ display: "flex", gap: "10px" }}>
                <Button
                  href="#"
                  variant="contained"
                  size="medium"
                  sx={{
                    fontWeight: 600,
                    textTransform: "none",
                    fontFamily: '"Manrope", Helvetica',
                    backgroundColor: "#FDC500",
                    color: "#0F1114",
                    "&:hover": {
                      backgroundColor: "#e6b300",
                    },
                  }}
                >
                  Launch Marketplace
                </Button>
                <Button
                  variant="outlined"
                  href="https://drive.google.com/file/d/16MkyMl1dHc4fJocR2j98WtLrIyqoxzlX/view?usp=sharing"
                  size="medium"
                  sx={{
                    fontWeight: 600,
                    textTransform: "none",
                    fontFamily: '"Manrope", Helvetica',
                    borderColor: "#e6b800",
                    color: "#ffcc00",
                    "&:hover": {
                      borderColor: "#e6b800",
                      color: "#e6b800",
                    },
                  }}
                >
                  Read Whitepaper
                </Button>
              </div>
              <br />
              <div style={{ display: "flex", gap: "10px" }}>
                <Button
                  variant="outlined"
                  size="medium"
                  sx={{
                    textTransform: "none",
                    fontFamily: '"Manrope", Helvetica',
                    borderColor: "#00ff00",
                    color: "#00ff00",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    "&:hover": {
                      borderColor: "#00e600",
                      color: "#00e600",
                    },
                  }}
                >
                  View Audit
                  <VisibilityIcon fontSize="small" sx={{ ml: 1 }} />
                </Button>
                <Button
                  variant="outlined"
                  size="medium"
                  sx={{
                    textTransform: "none",
                    fontFamily: '"Manrope", Helvetica',
                    borderColor: "white",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    "&:hover": {
                      borderColor: "#00e600",
                      color: "#00e600",
                    },
                  }}
                >
                  Copy Contract Address
                  <ContentCopyIcon fontSize="small" sx={{ ml: 1 }} />
                </Button>
              </div>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="right"
            sx={{
              width: { xs: "100%", md: "50%" },
              margin: { xs: "0 auto", md: "0" },
            }}
          >
            <Swiper
              cssMode={true}
              spaceBetween={2}
              slidesPerView={1}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Navigation]}
            >
              <SwiperSlide>
                <Box
                  bgcolor="#1F1F1E"
                  justifyContent="center"
                  alignItems="stretch"
                  display="flex"
                  width={{ xs: "90%", md: "75%" }}
                  padding={{ xs: "8px", md: "16px" }}
                  flexDirection="column"
                  borderRadius={{ xs: "12px", md: "20px" }}
                  gap={1}
                  sx={{ margin: { xs: "0 auto", md: "0" } }}
                >
                  <Typography
                    color="#FDC500"
                    bgcolor="#10100F"
                    textAlign="center"
                    fontFamily='"Manrope", Helvetica'
                    fontWeight="500"
                    borderRadius={{ xs: "4px", md: "12px" }}
                    fontSize={{ xs: "14px", md: "20px" }}
                    py={{ xs: "8px", md: "12px" }}
                  >
                    Become part of future!
                  </Typography>
                  <Box
                    bgcolor="#10100F"
                    px={{ xs: "8px", md: "12px" }}
                    py={{ xs: "8px", md: "12px" }}
                    borderRadius={{ xs: "4px", md: "12px" }}
                  >
                    <Typography
                      color="#000000"
                      textAlign="left"
                      fontFamily='"Manrope", Helvetica'
                      fontWeight="900"
                      borderRadius={{ xs: "4px", md: "8px" }}
                      fontSize={{ xs: "24px", md: "36px" }}
                      py={{ xs: "20px", md: "40px" }}
                      px={{ xs: "8px", md: "12px" }}
                      sx={{
                        background: "rgb(253,197,0)",
                        background:
                          "-moz-linear-gradient(145deg, rgba(253,197,0,1) 0%, rgba(58,94,252,1) 100%)",
                        background:
                          "-webkit-linear-gradient(145deg, rgba(253,197,0,1) 0%, rgba(58,94,252,1) 100%)",
                        background:
                          "linear-gradient(145deg, rgba(253,197,0,1) 0%, rgba(58,94,252,1) 100%)",
                      }}
                    >
                      First Phase of Presale <br />
                      Starting Soon!
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-start"
                    bgcolor="#10100F"
                    borderRadius={{ xs: "4px", md: "12px" }}
                    padding={{ xs: "8px", md: "12px" }}
                    gap={{ xs: 1, md: 2 }}
                  >
                    <Typography
                      color="#FFFFFF"
                      fontFamily='"Manrope", Helvetica'
                      fontWeight="500"
                      fontSize={{ xs: "12px", md: "16px" }}
                    >
                      Join our socials for the latest updates and announcements.
                    </Typography>
                    <Stack direction="row" gap={{ xs: 1, md: 2 }}>
                      <IconButton
                        href="https://x.com/XperiencePay"
                        sx={{
                          color: "#0F1114",
                          padding: "8px",
                          bgcolor: "#FDC500",
                          borderRadius: "4px",
                          "&:hover": {
                            bgcolor: "#e6b300",
                          },
                        }}
                      >
                        <XIcon sx={{ fontSize: { xs: "16px", md: "24px" } }} />
                      </IconButton>
                      <IconButton
                        href="https://t.me/XperiencePay"
                        sx={{
                          color: "#0F1114",
                          padding: "8px",
                          bgcolor: "#FDC500",
                          borderRadius: "4px",
                          "&:hover": {
                            bgcolor: "#e6b300",
                          },
                        }}
                      >
                        <TelegramIcon
                          sx={{ fontSize: { xs: "16px", md: "24px" } }}
                        />
                      </IconButton>
                      <IconButton
                        href="https://discord.com/invite/xperiencepayfintech"
                        sx={{
                          color: "#0F1114",
                          padding: "8px",
                          bgcolor: "#FDC500",
                          borderRadius: "4px",
                          "&:hover": {
                            bgcolor: "#e6b300",
                          },
                        }}
                      >
                        <DiscordIcon
                          sx={{ fontSize: { xs: "16px", md: "24px" } }}
                        />
                      </IconButton>
                    </Stack>
                  </Box>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  bgcolor="#1F1F1E"
                  justifyContent="center"
                  alignItems="stretch"
                  display="flex"
                  width={{ xs: "90%", md: "75%" }}
                  padding={{ xs: "8px", md: "16px" }}
                  flexDirection="column"
                  borderRadius={{ xs: "12px", md: "20px" }}
                  gap={1}
                  sx={{ margin: { xs: "0 auto", md: "0" } }}
                >
                  <Typography
                    color="#FDC500"
                    bgcolor="#10100F"
                    textAlign="center"
                    fontFamily='"Manrope", Helvetica'
                    fontWeight="500"
                    borderRadius={{ xs: "4px", md: "12px" }}
                    fontSize={{ xs: "14px", md: "20px" }}
                    py={{ xs: "8px", md: "12px" }}
                  >
                    Community Building: Phase 1
                  </Typography>
                  <Box
                    bgcolor="#10100F"
                    px={{ xs: "8px", md: "12px" }}
                    py={{ xs: "8px", md: "12px" }}
                    borderRadius={{ xs: "4px", md: "12px" }}
                  >
                    <Typography
                      color="#000000"
                      textAlign="left"
                      fontFamily='"Manrope", Helvetica'
                      fontWeight="900"
                      borderRadius={{ xs: "4px", md: "8px" }}
                      fontSize={{ xs: "24px", md: "36px" }}
                      py={{ xs: "20px", md: "40px" }}
                      px={{ xs: "8px", md: "12px" }}
                      sx={{
                        background: "rgb(253,197,0)",
                        background:
                          "-moz-linear-gradient(145deg, rgba(253,197,0,1) 0%, rgba(58,94,252,1) 100%)",
                        background:
                          "-webkit-linear-gradient(145deg, rgba(253,197,0,1) 0%, rgba(58,94,252,1) 100%)",
                        background:
                          "linear-gradient(145deg, rgba(253,197,0,1) 0%, rgba(58,94,252,1) 100%)",
                      }}
                    >
                      50,000 XPP Token airdrop is Live!
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-start"
                    bgcolor="#10100F"
                    borderRadius={{ xs: "4px", md: "12px" }}
                    padding={{ xs: "8px", md: "12px" }}
                    gap={{ xs: 1, md: 2 }}
                  >
                    <Typography
                      color="#FFFFFF"
                      fontFamily='"Manrope", Helvetica'
                      fontWeight="500"
                      fontSize={{ xs: "12px", md: "16px" }}
                    >
                      Start completing quests and claiming rewards.
                    </Typography>
                    <Button
                      href="#"
                      variant="contained"
                      size="medium"
                      sx={{
                        width: "100%",
                        fontWeight: 600,
                        textTransform: "none",
                        fontFamily: '"Manrope", Helvetica',
                        backgroundColor: "#FDC500",
                        color: "#0F1114",
                        "&:hover": {
                          backgroundColor: "#e6b300",
                        },
                      }}
                    >
                      Join Zealy
                    </Button>
                  </Box>
                </Box>
              </SwiperSlide>
            </Swiper>
          </Box>

          {/* <Box
            display="flex"
            justifyContent="flex-end"
            sx={{ width: { xs: "100%", md: "50%" } }}
          >
            <Box
              bgcolor="#1F1F1E"
              justifyContent="center"
              alignItems="stretch"
              display="flex"
              width={{ xs: "100%", md: "75%" }}
              padding={{ xs: "8px", md: "16px" }}
              flexDirection="column"
              borderRadius={{ xs: "12px", md: "20px" }}
              gap={1}
            >
              <Typography
                color="#FDC500"
                bgcolor="#10100F"
                textAlign="center"
                fontFamily='"Manrope", Helvetica'
                fontWeight="500"
                borderRadius={{ xs: "4px", md: "12px" }}
                fontSize={{ xs: "14px", md: "20px" }}
                py={{ xs: "8px", md: "12px" }}
              >
                Become part of future!
              </Typography>
              <Box
                bgcolor="#10100F"
                px={{ xs: "8px", md: "12px" }}
                py={{ xs: "8px", md: "12px" }}
                borderRadius={{ xs: "4px", md: "12px" }}
              >
                <Typography
                  color="#000000"
                  textAlign="left"
                  fontFamily='"Manrope", Helvetica'
                  fontWeight="900"
                  borderRadius={{ xs: "4px", md: "8px" }}
                  fontSize={{ xs: "24px", md: "36px" }}
                  py={{ xs: "20px", md: "40px" }}
                  px={{ xs: "8px", md: "12px" }}
                  sx={{
                    background: "rgb(253,197,0)",
                    background:
                      "-moz-linear-gradient(145deg, rgba(253,197,0,1) 0%, rgba(58,94,252,1) 100%)",
                    background:
                      "-webkit-linear-gradient(145deg, rgba(253,197,0,1) 0%, rgba(58,94,252,1) 100%)",
                    background:
                      "linear-gradient(145deg, rgba(253,197,0,1) 0%, rgba(58,94,252,1) 100%)",
                  }}
                >
                  First Phase of Presale <br />
                  Starting Soon!
                </Typography>
              </Box>

              <Box
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                bgcolor="#10100F"
                borderRadius={{ xs: "4px", md: "12px" }}
                padding={{ xs: "8px", md: "12px" }}
                gap={{ xs: 1, md: 2 }}
              >
                <Typography
                  color="#FFFFFF"
                  fontFamily='"Manrope", Helvetica'
                  fontWeight="500"
                  fontSize={{ xs: "12px", md: "16px" }}
                >
                  Join our socials for the latest updates and announcements.
                </Typography>
                <Stack direction="row" gap={{ xs: 1, md: 2 }}>
                  <IconButton
                    href="https://x.com/XperiencePay"
                    sx={{
                      color: "#0F1114",
                      padding: "8px",
                      bgcolor: "#FDC500",
                      borderRadius: "4px",
                      "&:hover": {
                        bgcolor: "#e6b300",
                      },
                    }}
                  >
                    <XIcon sx={{ fontSize: { xs: "16px", md: "24px" } }} />
                  </IconButton>
                  <IconButton
                    href="https://t.me/XperiencePay"
                    sx={{
                      color: "#0F1114",
                      padding: "8px",
                      bgcolor: "#FDC500",
                      borderRadius: "4px",
                      "&:hover": {
                        bgcolor: "#e6b300",
                      },
                    }}
                  >
                    <TelegramIcon
                      sx={{ fontSize: { xs: "16px", md: "24px" } }}
                    />
                  </IconButton>
                  <IconButton
                    href="https://discord.com/invite/xperiencepayfintech"
                    sx={{
                      color: "#0F1114",
                      padding: "8px",
                      bgcolor: "#FDC500",
                      borderRadius: "4px",
                      "&:hover": {
                        bgcolor: "#e6b300",
                      },
                    }}
                  >
                    <DiscordIcon
                      sx={{ fontSize: { xs: "16px", md: "24px" } }}
                    />
                  </IconButton>
                </Stack>
              </Box>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="flex-end"
            sx={{ width: { xs: "100%", md: "50%" } }}
          >
            <Box
              bgcolor="#1F1F1E"
              justifyContent="center"
              alignItems="stretch"
              display="flex"
              width={{ xs: "100%", md: "75%" }}
              padding={{ xs: "8px", md: "16px" }}
              flexDirection="column"
              borderRadius={{ xs: "12px", md: "20px" }}
              gap={1}
            >
              <Typography
                color="#FDC500"
                bgcolor="#10100F"
                textAlign="center"
                fontFamily='"Manrope", Helvetica'
                fontWeight="500"
                borderRadius={{ xs: "4px", md: "12px" }}
                fontSize={{ xs: "14px", md: "20px" }}
                py={{ xs: "8px", md: "12px" }}
              >
                Community Building: Phase 1
              </Typography>
              <Box
                bgcolor="#10100F"
                px={{ xs: "8px", md: "12px" }}
                py={{ xs: "8px", md: "12px" }}
                borderRadius={{ xs: "4px", md: "12px" }}
              >
                <Typography
                  color="#000000"
                  textAlign="left"
                  fontFamily='"Manrope", Helvetica'
                  fontWeight="900"
                  borderRadius={{ xs: "4px", md: "8px" }}
                  fontSize={{ xs: "24px", md: "36px" }}
                  py={{ xs: "20px", md: "40px" }}
                  px={{ xs: "8px", md: "12px" }}
                  sx={{
                    background: "rgb(253,197,0)",
                    background:
                      "-moz-linear-gradient(145deg, rgba(253,197,0,1) 0%, rgba(58,94,252,1) 100%)",
                    background:
                      "-webkit-linear-gradient(145deg, rgba(253,197,0,1) 0%, rgba(58,94,252,1) 100%)",
                    background:
                      "linear-gradient(145deg, rgba(253,197,0,1) 0%, rgba(58,94,252,1) 100%)",
                  }}
                >
                  50,000 XPP Token airdrop is
                  <br />
                  Live!
                </Typography>
              </Box>

              <Box
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                bgcolor="#10100F"
                borderRadius={{ xs: "4px", md: "12px" }}
                padding={{ xs: "8px", md: "12px" }}
                gap={{ xs: 1, md: 2 }}
              >
                <Typography
                  color="#FFFFFF"
                  fontFamily='"Manrope", Helvetica'
                  fontWeight="500"
                  fontSize={{ xs: "12px", md: "16px" }}
                >
                  Start completing quests and claiming rewards.
                </Typography>
                <Button
                  href="#"
                  variant="contained"
                  size="medium"
                  sx={{
                    width: "100%",
                    fontWeight: 600,
                    textTransform: "none",
                    fontFamily: '"Manrope", Helvetica',
                    backgroundColor: "#FDC500",
                    color: "#0F1114",
                    "&:hover": {
                      backgroundColor: "#e6b300",
                    },
                  }}
                >
                  Join Zealy
                </Button>
              </Box>
            </Box>
          </Box>*/}
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
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        gap={5}
        sx={{
          alignItems: "center",
          py: "3%",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "16px", md: "20px" },
            fontFamily: '"Manrope", Helvetica',
            fontWeight: 400,
          }}
        >
          IMPLEMENTATION PARTNERS
        </Typography>
        <Stack direction="row" justifyContent="center" gap={{ xs: 1, md: 5 }}>
          <img
            src={Partner1}
            alt="Partner 1"
            style={{
              width: { xs: "48", md: "56px" },
              height: "auto",
            }}
          />
          <img
            src={Partner2}
            alt="Partner 2"
            style={{
              width: { xs: "48", md: "56px" },
              height: "auto",
            }}
          />
          <img
            src={Partner3}
            alt="Partner 3"
            style={{
              width: { xs: "48", md: "56px" },
              height: "auto",
            }}
          />
          <img
            src={Partner4}
            alt="Partner 4"
            style={{
              width: { xs: "48", md: "56px" },
              height: "auto",
            }}
          />
          <img
            src={Partner5}
            alt="Partner 4"
            style={{
              width: { xs: "48", md: "56px" },
              height: "auto",
            }}
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default Header;

{
  /*<Box
            flex={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
              width: { xs: "100%", md: "auto" },
              mt: { xs: 4, md: 0 },
            }}
          >
            <Card
              sx={{
                minWidth: 275,
                backgroundColor: "#201c1c",
                borderRadius: "10px",
                color: "#fff",
              }}
            >
              <CardContent>
                <Box
                  display="flex"
                  sx={{
                    background: "black",
                    borderRadius: "10px",
                    padding: "10px",
                  }}
                  justifyContent="space-between"
                  mb={2}
                >
                  <Button sx={{ color: "#fff", textTransform: "none" }}>
                    Buy XPP
                  </Button>
                  <Button sx={{ color: "#fff", textTransform: "none" }}>
                    Balance
                  </Button>
                  <Button sx={{ color: "#fff", textTransform: "none" }}>
                    Phase Info
                  </Button>
                </Box>

                <Box
                  display="flex"
                  flexDirection="column"
                  sx={{
                    backgroundColor: "black",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                  mb={2}
                >
                  <Typography variant="h5" component="div" sx={{ mb: 2 }}>
                    Buy XPP
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="grey">
                    You can buy our XPP tokens using ETH or USDT ERC-20.
                  </Typography>
                  <TextField
                    fullWidth
                    InputLabelProps={{
                      style: {
                        color: "white",
                      },
                    }}
                    variant="outlined"
                    label="You get"
                    defaultValue="51,000"
                    InputProps={{
                      style: {
                        color: "white",
                        marginBottom: "30px",
                        backgroundColor: "#201c1c",
                      },
                      endAdornment: (
                        <Select
                          style={{ color: "white" }}
                          defaultValue="ETH"
                          label="You pay"
                        >
                          <MenuItem value="ETH">ETH</MenuItem>
                          <MenuItem value="USDT">USDT</MenuItem>
                        </Select>
                      ),
                    }}
                  />

                  <TextField
                    fullWidth
                    InputLabelProps={{
                      style: {
                        color: "white",
                      },
                    }}
                    variant="outlined"
                    label="You pay"
                    defaultValue="500"
                    InputProps={{
                      style: {
                        color: "white",
                        marginBottom: "30px",
                        backgroundColor: "#201c1c",
                      },
                      endAdornment: (
                        <Typography style={{ color: "white" }}>$XPP</Typography>
                      ),
                    }}
                  />
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#ffcc00",
                      textTransform: "none",
                      color: "#000",
                      width: "100%",
                      mb: 2,
                      "&:hover": {
                        backgroundColor: "#e6b800",
                      },
                    }}
                  >
                    Buy now
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      textTransform: "none",
                      color: "#ffcc00",
                      borderColor: "#ffcc00",
                      width: "100%",
                      "&:hover": {
                        color: "#e6b800",
                        borderColor: "#e6b800",
                      },
                    }}
                  >
                    Disconnect wallet
                  </Button>
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  sx={{
                    backgroundColor: "black",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                  mb={2}
                >
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 1, color: "#fff" }}
                  >
                    Private sale progress
                  </Typography>
                  <Box display="flex" justifyContent="space-between">
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ color: "#fff" }}
                    >
                      $0
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ color: "#fff" }}
                    >
                      $3 Million
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={20}
                    sx={{
                      mt: 1,
                      height: 10,
                      borderRadius: "20px",
                      backgroundColor: "#333",
                      "& .MuiLinearProgress-bar": {
                        borderRadius: "20px",
                        backgroundColor: "#ffcc00",
                      },
                    }}
                  />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ color: "#fff", mt: 1 }}
                  >
                    $528089.52
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>*/
}
