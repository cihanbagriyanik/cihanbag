import { Container, List, ListItem, ListItemText, styled } from "@mui/material";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

import { listItemTheme } from "./style/footerListItemTheme";

const StyledListItem = styled(ListItem)(({ theme }) => ({
  ...listItemTheme,
}));

const Social = () => {
  return (
    <Container>
      <ListItemText
        sx={{ my: 0 }}
        primary="Social"
        primaryTypographyProps={{
          fontSize: 20,
          fontWeight: "medium",
          letterSpacing: 0,
        }}
      />
      <List>
        <StyledListItem
          href="https://www.linkedin.com/in/bagriyanik/"
          component="a"
          target="_blank"
        >
          <LinkedInIcon />
          <ListItemText primary="Linkedin" />
        </StyledListItem>
        <StyledListItem
          href="https://github.com/cihanbagriyanik"
          component="a"
          target="_blank"
        >
          <GitHubIcon />
          <ListItemText primary="GitHub" />
        </StyledListItem>
        <StyledListItem
          href="https://www.instagram.com/cihanbagriyanik/"
          component="a"
          target="_blank"
        >
          <InstagramIcon />
          <ListItemText primary="Instagram" />
        </StyledListItem>
        {/* <StyledListItem
          href="https://www.facebook.com/profile.php?id=100017748019463"
          component="a"
          target="_blank"
        >
          <FacebookIcon />
          <ListItemText primary="Facebook" />
        </StyledListItem> */}
      </List>
    </Container>
  );
};

export default Social;
