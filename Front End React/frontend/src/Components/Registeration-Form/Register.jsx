import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";

const theme = createTheme();

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const role = "STUDENT";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      username: username,
      email: email,
      password: pass,
      role: role,
    };
    if (!email || !pass || !username) {
      alert("Please fill all the fields");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Invalid email format");
      setEmail("");
      return;
    }
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    if (!usernameRegex.test(username) || username.length < 3) {
      alert("Invalid Username please try again");
      setUsername("");
      return;
    }
    try {
      await axios.post("http://127.0.0.1:5000/api/v1/register", body);
      setUsername("");
      setEmail("");
      setPass("");
      window.location.href = "http://localhost:3000/login";
    } catch (error) {
      console.log("==>err==>", error);
      if(error.response.status == 409){
      alert("Email already exists");
      }
      else{
        alert("Connot register please try again later")
      }
    }
  };

  return (
    <ThemeProvider theme={theme} className="main-body">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#17bf9e" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{ mt: 3, mb: 10 }}
            onSubmit={handleSubmit}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="name"
                  required
                  fullWidth
                  label="Username"
                  autoFocus
                  pattern="[a-zA-Z0-9 ]{3,}"
                  title="Username must be at least 3 characters and can only include letters, numbers, and spaces"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  autoComplete="new-password"
                  onChange={(e) => setPass(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              sx={{ mt: 3, mb: 2 }}
              className="btn"
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link
                  href="/login"
                  variant="body2"
                  sx={{ color: "#0a2b1e", textDecoration: "none" }}
                >
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
