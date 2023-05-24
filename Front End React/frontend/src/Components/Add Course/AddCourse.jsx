import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";

const theme = createTheme();
const AddCourse = () => {
  const token = localStorage.getItem("token");
  const [title, setTitle] = useState("");
  const [language, setLanguage] = useState("");
  const [description, setDescription] = useState("");
  const [videoFile, setVideoFile] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      title: title,
      language: language,
      description: description,
    };
    try {
      const res = await axios.post("http://127.0.0.1:5000/api/v1/addcourse", body, {
        headers: {
          "x-access-token": `${token}`,
        },
      });
      // const videoData = new FormData();
      // videoData.append("title", title);
      // videoData.append("course_id", res.data.course_id);
      // videoData.append("video_file", videoFile);
      // await axios.post("http://127.0.0.1:5000/api/v1/add/video", videoData, {
      //   headers: {
      //     "x-access-token": token,
      //     "Content-Type": "multipart/form-data",
      //   },
      // });


      window.location.href = "http://localhost:3000/admin";
      alert("Course and video have been registered");
    } catch (error) {
      console.log("==>err==>", error);
      alert("There was an issue");
    }
  };
  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Perform format checks here, for example:
      const allowedFormats = ["mp4", "avi", "mov"];
      const fileExtension = file.name.split(".").pop().toLowerCase();
      if (!allowedFormats.includes(fileExtension)) {
        alert("Invalid video format. Allowed formats: mp4, avi, mov");
        return;
      }

      setVideoFile(file);
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
          <Typography component="h1" variant="h5">
            Add Course
          </Typography>
          <Box
            component="form"
            noValidate
            enctype="multipart/form-data"
            sx={{ mt: 3, mb: 10 }}
            onSubmit={handleSubmit}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="title"
                  required
                  fullWidth
                  label="Title"
                  autoFocus
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Language"
                  name="language"
                  onChange={(e) => setLanguage(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="description"
                  label="Description"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <input
                  accept="video/*"
                  id="video-input"
                  type="file"
                  style={{ display: "none" }}
                  onChange={handleVideoChange}
                />
                <label htmlFor="video-input">
                  <Button
                    variant="contained"
                    component="span"
                    sx={{ mt: 2, mb: 2 }}
                    className="btn"
                  >
                    Select Video
                  </Button>
                </label>
                {videoFile && (
                    <Typography variant="body1" sx={{ mt: 1 }}>
                      Selected video: {videoFile.name}
                    </Typography>
                )}
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              sx={{ mt: 3, mb: 2 }}
              className="btn"
            >
              Add
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default AddCourse;
