import { Box, Container, Typography } from "@mui/material";

const AboutMe = () => {
  return (
    <Container sx={{marginTop:"3rem"}}>
      <Box>
        <Typography>About Me</Typography>
        <Typography>
          I am an enthusiastic web developer based in Munich, with a rich
          experience of in frontend & backend web design.
        </Typography>
        <Box className="row">
          <Typography className="col-6">
            I design professional & beautiful websites
          </Typography>

          <Typography className="col-6">
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
