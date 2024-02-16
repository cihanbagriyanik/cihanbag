import { Container, List, ListItem, ListItemText } from "@mui/material";

const Social = () => {
  return (
    <Container>
      <List>
        <ListItem
          component="a"
          href="https://www.linkedin.com/in/bagriyanik/"
          target="_blank"
          disablePadding
        >
          <ListItemText primary="Linkedin" />
        </ListItem>
        <ListItem
          component="a"
          href="https://github.com/cihanbagriyanik"
          target="_blank"
          disablePadding
        >
          <ListItemText primary="GitHub" />
        </ListItem>
        <ListItem
          component="a"
          href="https://www.instagram.com/cihanbagriyanik/"
          target="_blank"
          disablePadding
        >
          <ListItemText primary="Instagram" />
        </ListItem>
        <ListItem
          component="a"
          href="https://www.facebook.com/profile.php?id=100017748019463"
          target="_blank"
          disablePadding
        >
          <ListItemText primary="Facebook" />
        </ListItem>
      </List>
    </Container>
  );
};

export default Social;
