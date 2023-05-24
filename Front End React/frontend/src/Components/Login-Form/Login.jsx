import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import jwtDecode from "jwt-decode";

const theme = createTheme();

export function tokenExpired(decodedToken) {
  const exp = decodedToken.expiration * 1000;
  const current_time = Date.now();

  if (current_time > exp) {
    return true;
  }

  return false;
}
export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const changeNavbar = () => {
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "http://localhost:3000/dashboard";
  };

  const login = async (e) => {
    e.preventDefault();
    const body = {
      email: email,
      password: password,
    };

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Invalid email format");
    return;
  }

    try {
      const res = await axios.post("http://127.0.0.1:5000/api/v1/login", body);
      const token = res.data.token;
      const decodedToken = jwtDecode(token);
      const role = decodedToken.role;
      localStorage.setItem("token", token);
      localStorage.setItem("userrole", role);
      localStorage.setItem("email", email)
      console.log(localStorage.getItem("email"))
      console.log(tokenExpired(decodedToken));
      if (res.status === 200 && role === "STUDENT") {
        changeNavbar();
      } else if (res.status === 200 && role === "ADMIN") {
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "http://localhost:3000/admin";
      }
    } catch (error) {
      alert("Email or Password is Incorrect")
      setEmail("");
      setPass("");
    }
  };

  return (
    <ThemeProvider theme={theme}>
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
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={login}
            noValidate
            sx={{ mt: 1, mb: 10 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPass(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              sx={{ mt: 3, mb: 2 }}
              className="btn"
              // onClick={changeNavbar()}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link
                  href="#"
                  variant="body2"
                  sx={{ textDecoration: "none", color: "#0a2b1e" }}
                >
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link
                  href="/register"
                  variant="body2"
                  sx={{ textDecoration: "none", color: "#0a2b1e" }}
                >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
