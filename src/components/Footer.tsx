import { Box, Container, Link, Typography } from "@mui/material";
import Services from "./Services";
import Social from "./Social";

const Footer = () => {
  return (
    <Container sx={{ position: "absolute", bottom: 0 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography>Based in Munich, working worldwide.</Typography>

          <Link href="/contact">Get in touch</Link>
        </Box>

        <Box>
          <Social />
        </Box>

        <Box>
          <Services />
        </Box>
      </Box>
      <Typography sx={{ textAlign: "center" }}>
        Copyright © {new Date().getFullYear()} Cihan Bagriyanik | Powered by
        Cihan Bagriyanik
      </Typography>
    </Container>
  );
};

export default Footer;
