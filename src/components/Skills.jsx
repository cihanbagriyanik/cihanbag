import React from "react";
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
  styled,
} from "@mui/material";
import "./style/skillsAnimation.scss";
import { skillsData } from "../helper/data";

import { listItemTextTheme } from "./style/skills";

const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  ...listItemTextTheme,
}));

// console.log(skillsData);

const Skills = () => {
  return (
    <Box sx={{ margin: "2rem 0" }}>
      <Container>
        <Typography
          sx={{ fontWeight: "bold", marginBottom: "2rem" }}
          variant="h5"
          fontFamily={"girassol"}
          color={"#0B58BE"}
        >
          Skills
        </Typography>
      </Container>

      <Box className="slider">
        <Box className="slide-track">
          {skillsData.map((x) => {
            return (
              <Box
                key={x.id}
                className="slide"
                component="a"
                target="_blank"
                href={x.link}
              >
                <img src={x.logo} height="100" width="250" alt={x.name} />
              </Box>
            );
          })}
        </Box>
      </Box>

      <Container
        sx={{
          marginTop: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <List sx={{ width: "50%" }}>
          <ListItem>
            <StyledListItemText primary="JavaScript" />
          </ListItem>
          <ListItem>
            <StyledListItemText primary="React.js" />
          </ListItem>
          <ListItem>
            <StyledListItemText primary="Redux" />
          </ListItem>
          <ListItem>
            <StyledListItemText primary="TypeScript" />
          </ListItem>
          <ListItem>
            <StyledListItemText primary="MaterialUI" />
          </ListItem>
        </List>
        <List sx={{ width: "50%" }}>
          <ListItem>
            <StyledListItemText primary="Node.js" />
          </ListItem>
          <ListItem>
            <StyledListItemText primary="Express.js" />
          </ListItem>
          <ListItem>
            <StyledListItemText primary="Java" />
          </ListItem>
          <ListItem>
            <StyledListItemText primary="MongoDB" />
          </ListItem>
          <ListItem>
            <StyledListItemText primary="Mongoose" />
          </ListItem>
        </List>
      </Container>
    </Box>
  );
};

export default Skills;
