import * as React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import { portfolioData } from "../helper/data";
// console.log(portfolioData);

export default function PortfolioCard() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {portfolioData.map((x) => {
        return (
          <Box
            sx={{
              margin: "2.5rem 2.5rem",
              width: "43%",
              "@media (max-width:1250px)": {
                width: "100%",
                margin: "2rem 2rem",
              },
            }}
            key={x.id}
          >
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
                "@media (max-width:700px)": {
                  flexDirection: "column",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <Box sx={{ flex: 1 }}>
                  <CardMedia
                    sx={{
                      border: "1px  solid rgba(5, 8, 114, 0.5)",
                      height: { xs: 150, sm: 250, md: 250 },
                      width: { xs: 300, sm: 430, md: 500 },
                      margin: "1rem 0 0 1.5rem",
                      borderRadius: "5px",

                      "@media (max-width:700px)": {
                        height: { xs: 150, sm: 200, md: 250 },
                        width: { xs: 300, sm: 300, md: 430 },
                      },
                    }}
                    image={x.img}
                    title={x.projectName}
                  />
                </Box>
                <Box
                  sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h1">
                      {x.projectName}
                    </Typography>
                    <Typography variant="body3" color="text.secondary">
                      <span style={{ fontWeight: "bold" }}>Topics:</span>{" "}
                      {x.LibrariesAndTech}
                    </Typography>
                    <Typography
                      marginTop={1}
                      sx={{ height: "145px", overflow: "scroll" }}
                    >
                      {x.description}
                    </Typography>
                  </CardContent>
                </Box>
              </Box>

              <Box
                sx={{
                  marginBottom: "10px",
                  marginRight: "10px",
                  alignSelf: "flex-start",
                }}
              >
                <CardActions>
                  <Button
                    variant="outlined"
                    size="medium"
                    target="_blank"
                    href={x.gitGubLink}
                    sx={{
                      color: "#050872",
                      borderColor: "inherit",
                      transition: " 2s ease",
                      ":hover": {
                        backgroundColor: "#050872",
                        color: "white",
                        border: "none",
                      },
                    }}
                  >
                    GitHub
                  </Button>
                  <Button
                    variant="contained"
                    size="medium"
                    target="_blank"
                    href={x.webSite}
                    sx={{
                      backgroundColor: "#050872",
                      transition: "background-color 1s ease",
                      ":hover": { backgroundColor: "white", color: "inherit" },
                    }}
                  >
                    Web Site
                  </Button>
                </CardActions>
              </Box>
            </Card>
          </Box>
        );
      })}
    </Box>
  );
}
