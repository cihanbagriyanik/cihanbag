import { Box, Container, Typography } from "@mui/material";

const AboutMe = () => {
  return (
    <Container sx={{ marginTop: "3rem" }}>
      <Box>
        <Typography
          sx={{ fontWeight: "bold" }}
          variant="h6"
          fontFamily={"girassol"}
          color={"#0B58BE"}
        >
          About Me
        </Typography>
        <Typography
          sx={{ fontWeight: "bold", letterSpacing: "1px" }}
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
            sx={{ fontWeight: "bold", marginTop: "0.8rem" }}
          >
            I design professional & beautiful websites
          </Typography>

          <Typography
            className="col-6"
            fontFamily={"girassol"}
            sx={{ fontSize: "1.2rem", marginTop: "1rem", marginLeft: "1rem" }}
          >
            With years of experience in graphic and web design I have mastered
            the skills of understanding client requirements according to the
            latest trends. I have worked with businesses from different niches
            so you can rely on me for yours.
            <br />
            <br />I have spent most of these years working across different
            areas of design like front-end development, landing pages, email
            design, app UI/UX, to my current role designing products for mobile
            platforms. Having worked on various projects that are already live,
            I can help you with the best possible suggestions and ideas that we
            can proceed with. With me, you are not forced to accept anything. I
            give you a variety of options we can work on together.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default AboutMe;
