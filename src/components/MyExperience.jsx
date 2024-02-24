import React from "react";
import { Box, Container, Typography } from "@mui/material";

const MyExperience = () => {
  return (
    <Container sx={{ marginTop: "3rem" }}>
      <Box>
        <Typography
          sx={{ fontWeight: "bold" }}
          variant="h5"
          fontFamily={"girassol"}
          color={"#0B58BE"}
        >
          Experince
        </Typography>
        
      </Box>
    </Container>
  );
};

export default MyExperience;
