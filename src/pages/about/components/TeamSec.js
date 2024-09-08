import React from "react";
import { Container, Box, Typography, Avatar } from "@mui/material";
import LinkedIn from "../../../assets/linkedin.svg";
import Team05 from "../../../assets/team05.png";
import Asad from "../../../assets/asad.png";
import Saad from "../../../assets/saad.jpg";
import Mahnoor from "../../../assets/mahnoor.png";
import Mary from "../../../assets/mary.jpg";
import Leonard from "../../../assets/Leonard Tchuindjo.jpeg";

//
//
//
const teamMembers = [
  {
    name: "CHRISTOPHE TAPA",
    role: "Founder and CEO",
    img: Team05,
    linkedin: "https://www.linkedin.com/in/christophe-tapa/",
  },
  {
    name: "Leonard Tchuindjo",
    role: "Compliance Officer",
    img: Leonard,
    linkedin: "https://www.linkedin.com/in/leonard-tchuindjo/",
  },
  {
    name: "Asad Ali Akbar",
    role: "Business Development Manager",
    img: Asad,
    linkedin: "https://www.linkedin.com/in/asad-ali-a78692212",
  },
  {
    name: "Saad Saeed",
    role: "Front-End Engineer",
    img: Saad,
    linkedin: "https://www.linkedin.com/in/saad-saeed-49b1ab158/",
  },
  {
    name: "Mahnoor Maqsood",
    role: "Design Lead",
    img: Mahnoor,
    linkedin: "https://www.linkedin.com/in/mahnoor-maqsood-76157020b/",
  },
  {
    name: "Mary",
    role: "Marketing Head",
    img: Mary,
    linkedin: "",
  },
];

const TeamSec = () => {
  return (
    <Container
      sx={{
        width: "100%",
        padding: "3% 5%",
        color: "#fff",
        fontFamily: '"Manrope", Helvetica',
      }}
    >
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontSize: "30px",
            fontWeight: "700",
            fontFamily: '"Manrope", Helvetica',
            color: "#FDC500",
            marginBottom: "20px",
          }}
        >
          The XPP Team
        </Typography>
        <Typography
          sx={{
            fontFamily: '"Manrope", Helvetica',
            fontSize: { xs: "12px", md: "16px" },
            marginBottom: "100px",
          }}
        >
          Xperience Pay’s success (XPP) is all about the team's dedication and
          expertise. Our dedicated team consists of passionate individuals who
          have expertise in various areas such as finance, blockchain
          technology, and real-world asset markets. We are driven by a shared
          vision of making the RWA market accessible and safe for all.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {teamMembers.map((member, index) => (
          <Box
            key={index}
            sx={{
              width: {
                xs: "100%",
                sm: "44%",
                md: "22%",
              },
              textAlign: "center",
              position: "relative",
              padding: "20px 10px",
              backgroundColor: "#222",
              margin: {
                xs: "0 auto 20px", // Center the card horizontally on small screens
                sm: "0 20px 20px 0", // Apply margin normally on larger screens
              },
              overflow: "hidden",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                padding: "2px",
                background: "linear-gradient(90deg, #fdd835, #3A5EFC)",
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "destination-out",
                maskComposite: "exclude",
              },
            }}
          >
            <Avatar
              src={member.img}
              alt={member.name}
              sx={{
                width: 150,
                height: 150,
                margin: "0 auto 20px",
              }}
            />
            <Typography
              component="h6"
              sx={{
                fontSize: "20px",
                fontWeight: "500",
                marginBottom: "10px",
                fontFamily: '"Manrope-SemiBold", Helvetica',
              }}
            >
              {member.name}
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                color: "#ccc",
                marginBottom: "10px",
                fontFamily: '"Manrope-SemiBold", Helvetica',
              }}
            >
              {member.role}
            </Typography>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", marginTop: "10px" }}
            >
              <img
                src={LinkedIn}
                alt="LinkedIn"
                style={{
                  width: "24px",
                  height: "24px",
                  cursor: "pointer",
                  position: "relative",
                  zIndex: 1,
                  //properties to make the linkedIn Icon clickable
                }}
              />
            </a>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default TeamSec;
