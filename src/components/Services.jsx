import { Container, List, ListItem, ListItemText } from "@mui/material";

const Services = () => {
  return (
    <Container>
      <List>
        <ListItem component="a" href="/services" target="_blank" disablePadding>
          <ListItemText primary="Frontend Development" />
        </ListItem>
        <ListItem component="a" href="/services" target="_blank" disablePadding>
          <ListItemText primary="Backend Development" />
        </ListItem>
        <ListItem component="a" href="/services" target="_blank" disablePadding>
          <ListItemText primary="Responsive Design" />
        </ListItem>
      </List>
    </Container>
  );
};

export default Services;
