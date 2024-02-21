import { Box, Link, Typography } from "@mui/material";
import Services from "./Services";
import Social from "./Social";


const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#050872",
        color: "white",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 3rem  1.5rem",
        }}
      >
        <Box>
          <Typography sx={{ fontSize: "1.5rem", paddingBottom: "1rem" }}>
            Based in Munich, working worldwide.
          </Typography>

          <Link
            sx={{
              textDecoration: "underline",
              color: "white",
              fontSize: "2.5rem",
            }}
            href="/contact"
          >
            Get in touch
          </Link>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <Social />
          </Box>

          <Box>
            <Services />
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography sx={{ textAlign: "center", paddingBottom: "0.7rem" }}>
          Copyright © {new Date().getFullYear()} Cihan Bagriyanik | Powered by
          Cihan Bagriyanik
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
