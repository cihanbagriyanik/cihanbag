import { Box, Container, Typography } from "@mui/material";

const AboutMe = () => {
  return (
    <Container sx={{ marginTop: "3rem" }}>
      <Box>
        <Typography
          sx={{
            fontWeight: "bold",
            marginBottom: "1rem",
            "@media (max-width:500px)": {
              fontSize: "1.7rem",
            },
          }}
          variant="h4"
          fontFamily={"girassol"}
          color={"#0B58BE"}
        >
          About Me
        </Typography>
        <Typography
          sx={{
            fontWeight: "bold",
            letterSpacing: "1px",
            "@media (max-width:500px)": {
              fontSize: "0.9rem",
            },
          }}
          fontFamily={"girassol"}
          variant="h6"
          component={"h1"}
        >
          I am an enthusiastic web developer based in Munich, with a rich
          experience of in frontend & backend web design.
        </Typography>
        <Box className="row" sx={{ marginTop: "0.8rem", marginLeft: "0.8rem" }}>
          <Typography
            className="col-6"
            fontFamily={"girassol"}
            color={"#0B58BE"}
            variant="h5"
            sx={{
              fontWeight: "bold",
              marginTop: "0.8rem",
              "@media (max-width:500px)": {
                fontSize: "1rem",
              },
            }}
          >
            I design professional & beautiful websites
          </Typography>

          <Typography
            className="col-6"
            fontFamily={"girassol"}
            sx={{
              fontSize: "1.2rem",
              marginTop: "1rem",
              marginLeft: "1rem",
              "@media (max-width:500px)": {
                fontSize: "0.9rem",
              },
            }}
          >
            &emsp;&emsp;With a master's degree and over 2 years of experience in
            software development, I bring a comprehensive skill set and a
            commitment to excellence. My journey in web design has equipped me
            with the ability to grasp client needs while staying attuned to the
            latest industry trends. Collaborating with diverse businesses across
            various sectors has honed my adaptability and creativity, ensuring
            tailored solutions for every project.
            <br />
            <br />
            &emsp;&emsp;Throughout my career, I've navigated through different
            domains of design, including front-end development, landing pages,
            and email design, contributing to numerous live projects along the
            way. What sets me apart is my dedication to providing you with
            options and empowering you to make informed decisions. I believe in
            a collaborative approach where we explore a range of possibilities
            together, ensuring that the final product not only meets but exceeds
            your expectations.
            <br />
            <br />
            &emsp;&emsp;My technical proficiency spans the MERN Stack,
            encompassing HTML, CSS, JavaScript, React, Redux, Tailwind CSS,
            MongoDB, Express.js, and Node.js. This robust skill set enables me
            to deliver compelling digital solutions tailored to your specific
            needs. Beyond technical expertise, I bring strong communication,
            teamwork, and analytical thinking abilities to the table, ensuring
            seamless collaboration and innovative problem-solving.
            <br />
            <br />
            &emsp;&emsp;I'm passionate about leveraging technology to drive
            impactful outcomes, and I'm always open to exploring new
            collaborative opportunities. Please don't hesitate to reach out for
            further discussion. Together, let's embark on a journey to turn your
            vision into reality.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default AboutMe;
