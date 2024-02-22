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
          <Box sx={{ margin: "2.5rem 2.5rem" }} key={x.id}>
            <Card
              sx={{
                height: 600,
                width: 530,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexDirection: "column",
              }}
            >
              <Box>
                <CardMedia
                  sx={{
                    height: 250,
                    width: 500,
                    margin: "0.5rem auto",
                    borderRadius: "5px",
                  }}
                  image={x.img}
                  title={x.projectName}
                />
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

              <Box
                sx={{
                  marginBottom: "10px",
                  marginRight: "10px",
                  alignSelf: "flex-end",
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
