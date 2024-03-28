import { Avatar, Box, Link, Typography, styled } from "@mui/material";
import foto from "../assets/LinkedInFoto.png";
import { SlEnvolope } from "react-icons/sl";
import { FaPhoneAlt } from "react-icons/fa";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import MyExperience from "../components/MyExperience";

const StyledLinkTheme = {
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  textDecoration: "none",
  color: "black",
  ":hover": { color: "blue" },
};

const StyledLink = styled(Link)(({ theme }) => ({
  ...StyledLinkTheme,
}));

const Home = () => {
  return (
    <Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            paddingTop: "3rem",
          }}
        >
          <Box
            sx={{
              "@media (max-width:500px)": {
                fontSize: "75%",
                marginLeft: "-1.5rem",
              },
            }}
          >
            <Typography
              fontFamily={"girassol"}
              fontSize={25}
              sx={{
                "@media (max-width:500px)": {
                  fontSize: "1rem",
                },
              }}
            >
              <span
                style={{
                  borderBottom: "2px solid black",
                  paddingBottom: "3px",
                }}
              >
                Hello,
              </span>{" "}
              my name is
            </Typography>

            <Typography
              fontFamily={"girassol"}
              variant="h3"
              component={"h1"}
              sx={{
                "@media (max-width:500px)": {
                  fontSize: "1.5rem",
                  marginTop: "0.5rem",
                },
              }}
            >
              Cihan Bagriyanik
            </Typography>
            <Typography
              fontFamily={"girassol"}
              variant="h4"
              component={"h1"}
              color={"grey"}
              sx={{
                fontStyle: "italic",
                "@media (max-width:500px)": {
                  fontSize: "1.5rem",
                  // marginTop: "0.5rem",
                },
              }}
            >
              Web Developer
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "3.5rem",

                "@media (max-width:500px)": {
                  fontSize: "0.7rem",
                  marginTop: "1rem",
                },
              }}
              gap={1}
            >
              <StyledLink href="mailto:cihanbagriyanikde@gmail.com">
                <SlEnvolope /> cihanbagriyanikde@gmail.com
              </StyledLink>

              <StyledLink href="tel:+4917622791071">
                <FaPhoneAlt /> +49 176 2279 10 71
              </StyledLink>
            </Box>
          </Box>

          <Box>
            <Avatar
              src={foto}
              alt=""
              component={"a"}
              sx={{
                width: 200,
                height: 200,
                "@media (max-width:500px)": {
                  width: 100,
                  height: 100,
                  marginLeft: "-1.5rem",
                },
              }}
            />
          </Box>
        </Box>

        <AboutMe />

        <Skills />

        <MyExperience />
      </Box>
    </Box>
  );
};

export default Home;
