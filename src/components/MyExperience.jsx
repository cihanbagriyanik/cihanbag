import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { experinceData } from "../helper/data";

// console.log(experinceData);

const MyExperience = () => {
  return (
    <Container sx={{ marginBottom: "3rem" }}>
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
          Experience
        </Typography>
        {experinceData.map((x) => {
          return (
            <Grid container spacing={{ md: 5 }} key={x.id}>
              <Grid item xs={12} md={3}>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "girassol",
                    fontWeight: "900",
                    textAlign: {
                      xs: "start",
                      md: "end",
                      "@media (max-width:500px)": {
                        fontSize: "0.9rem",
                      },
                    },
                  }}
                >
                  {x.date}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    textAlign: {
                      xs: "start",
                      md: "end",
                      "@media (max-width:500px)": {
                        fontSize: "0.9rem",
                      },
                    },
                  }}
                >
                  {x.company}
                </Typography>
              </Grid>

              <Grid
                item
                xs={12}
                md={9}
                sx={{
                  marginLeft: { xs: "2rem", md: "0" },
                  marginTop: { xs: "1rem", md: "1.5rem" },
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "girassol",
                    fontWeight: "900",
                    textAlign: "start",
                    marginBottom: "0.7rem",
                    "@media (max-width:500px)": {
                      fontSize: "1rem",
                    },
                  }}
                >
                  {x.title}
                </Typography>
                <Typography
                  variant="body1"
                  mx={3}
                  sx={{
                    marginBottom: "2rem",
                    "@media (max-width:500px)": {
                      fontSize: "0.9rem",
                    },
                  }}
                >
                  {x.description}
                </Typography>
              </Grid>
            </Grid>
          );
        })}
      </Box>
    </Container>
  );
};

export default MyExperience;
