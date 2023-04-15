import { Button, Link, Typography } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Login() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "400px",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Box
        sx={{
          width: 600,
          maxWidth: "100%",
        }}
      >
        <Typography variant={"h3"} sx={{ textAlign: "center" }}>
          Login Page
        </Typography>
        <TextField
          fullWidth
          label="fullWidth"
          id="fullWidth"
          placeholder={"username"}
          sx={{ my: "10px" }}
        />
        <TextField
          fullWidth
          label="fullWidth"
          id="fullWidth"
          placeholder={"password"}
          sx={{ my: "10px" }}
        />
        <Button variant={"contained"}>Login</Button>
        <Link sx={{ textAlign: "right", ml: "20px" }}>Register</Link>
      </Box>
    </Box>
  );
}
