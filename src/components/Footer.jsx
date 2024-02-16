import { Box, Link, Typography } from "@mui/material";
import Services from "./Services";
import Social from "./Social";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#050872",
        color: "white",
        padding: "3rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography>Based in Munich, working worldwide.</Typography>

          <Link sx={{ color: "white" }} href="/contact">
            Get in touch
          </Link>
        </Box>

        <Box>
          <Social />
        </Box>

        <Box>
          <Services />
        </Box>
      </Box>
      <Box marginBottom={0}>
        <Typography sx={{ textAlign: "center" }}>
          Copyright © {new Date().getFullYear()} Cihan Bagriyanik | Powered by
          Cihan Bagriyanik
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
