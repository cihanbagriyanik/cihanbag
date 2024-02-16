import { Avatar, Box, Container, Link, Typography } from "@mui/material";
import foto from "../assets/LinkedInFoto.png";
import { SlEnvolope } from "react-icons/sl";
import { FaPhoneAlt } from "react-icons/fa";
import AboutMe from "../components/AboutMe";

const Home = () => {
  return (
    <Container>
      <Box>
        <Box sx={{display:"flex", justifyContent:"space-around", alignItems:"center", paddingTop:"3rem"}}>
          <Box>
            <Typography className="  ">
              <span>Hello,</span> my name is
            </Typography>

            <Typography>Cihan Bagriyanik</Typography>
            <Typography>Web Developer</Typography>

            <Box>
              <Link href="mailto:cihanbagriyanikde@gmail.com">
                <SlEnvolope /> cihanbagriyanikde@gmail.com
              </Link>
              <Link className="" href="tel:+4917622791071">
                <FaPhoneAlt /> +49 176 2279 10 71
              </Link>
            </Box>
          </Box>

          <Box>
            <Avatar
              src={foto}
              alt=""
              component={"a"}
              sx={{ width: 200, height: 200 }}
            />
          </Box>
        </Box>

        <AboutMe />

        {/* <Skills /> */}

        {/* <MyExperience /> */}
      </Box>
    </Container>
  );
};

export default Home;
