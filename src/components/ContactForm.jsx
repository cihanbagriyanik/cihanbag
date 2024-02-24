import React, { useState } from "react";
import { TextField, Button, Grid, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#050872",
    },
  },
});

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

    // Burada form verilerini gönderebilirsiniz

    setFormData({
      firstName: "",
      lastName: "",
      companyName: "",
      email: "",
      phoneNumber: "",
      message: "",
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} my="3rem">
          <Typography variant="h3" fontFamily={"girassol"}>
            Send me a message
          </Typography>
          <Typography variant="body1">
            Whether you wish to discuss new ideas or have a project for me,
            simply fill this form and I will get back to you soon.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                />
              </Grid>
            </Grid>
            <TextField
              label="Company Name"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              multiline
              rows={5}
              margin="normal"
              required
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                marginTop: "1rem",
                width: "10rem",
                backgroundColor: "#050872",
              }}
            >
              Send
            </Button>
          </form>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default ContactForm;
