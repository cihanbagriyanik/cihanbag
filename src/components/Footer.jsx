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
          "@media (max-width:750px)": {
            flexDirection: "column-reverse",
          },
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "1.5rem",
              paddingBottom: "1rem",
              "@media (max-width:500px)": {
                fontSize: "1rem",
              },
              "@media (max-width:750px)": {
                marginTop: "1rem",
              },
            }}
          >
            Based in Munich, working worldwide.
          </Typography>

          <Link
            sx={{
              textDecoration: "underline",
              color: "white",
              fontSize: "2.5rem",
              "@media (max-width:500px)": {
                fontSize: "1.5rem",
              },
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
            "@media (max-width:460px)": {
              flexDirection: "column",
              gap: 1,
            },
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
        <Typography
          sx={{
            textAlign: "center",
            paddingBottom: "0.7rem",
            "@media (max-width:450px)": {
              fontSize: "0.75rem",
            },
          }}
        >
          Copyright © {new Date().getFullYear()} Cihan Bagriyanik | Powered by
          Cihan Bagriyanik
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
