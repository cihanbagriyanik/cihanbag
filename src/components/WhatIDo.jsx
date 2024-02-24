import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { whatIDoData } from "../helper/data";

console.log(whatIDoData);

const WhatIDo = () => {
  return (
    <Container sx={{ margin: "auto", padding: "3rem 3rem 3rem" }}>
      <Box>
        <Typography
          sx={{ fontWeight: "bold", marginBottom: "1rem" }}
          variant="h4"
          fontFamily={"girassol"}
          color={"#0B58BE"}
        >
          What I Do
        </Typography>
        <Typography variant="body1" mb={3} sx={{ width: { md: "40rem" } }}>
          From understanding your requirements, designing a blueprint and
          delivering the final product, I do everything that falls in between
          these lines.
        </Typography>
        <Grid container spacing={{ md: 5 }}>
          {whatIDoData.map((x) => {
            return (
              <Grid item xs={12} md={4} key={x.id}>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "girassol",
                    fontWeight: "900",
                    color: "#0B58BE",
                    marginLeft: "2rem",
                    marginTop: "1.5rem",
                  }}
                >
                  {x.service}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ marginLeft: "3rem", marginTop: "1rem" }}
                  //   sx={{ textAlign: { xs: "start", md: "end" } }}
                >
                  {x.description}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
};

export default WhatIDo;
