import { Container, List, ListItem, ListItemText, styled } from "@mui/material";

import ForwardIcon from "@mui/icons-material/Forward";

import { listItemTheme } from "./style/footerListItemTheme";

const StyledListItem = styled(ListItem)(({ theme }) => ({
  ...listItemTheme,
}));

const Services = () => {
  return (
    <Container
      sx={
        {
          // "@media (max-width:460px)": {
          //   display: "none",
          // },
        }
      }
    >
      <ListItemText
        sx={{ my: 0 }}
        primary="Services"
        primaryTypographyProps={{
          fontSize: 20,
          fontWeight: "medium",
          letterSpacing: 0,
        }}
      />
      <List>
        <StyledListItem component="a" href="/services">
          <ForwardIcon />
          <ListItemText primary="Frontend Development" />
        </StyledListItem>
        <StyledListItem component="a" href="/services">
          <ForwardIcon />
          <ListItemText primary="Backend Development" />
        </StyledListItem>
        <StyledListItem component="a" href="/services">
          <ForwardIcon />
          <ListItemText primary="Responsive Design" />
        </StyledListItem>
      </List>
    </Container>
  );
};

export default Services;
