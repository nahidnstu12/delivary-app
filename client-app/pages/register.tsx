import { Button, Typography } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Register() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "550px",
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
          Register Page
        </Typography>
        <TextField
          fullWidth
          label="username"
          id="username"
          placeholder={"username"}
          sx={{ my: "10px" }}
        />
        <TextField
          fullWidth
          label="fullname"
          id="fullname"
          placeholder={"fullname"}
          sx={{ my: "10px" }}
        />
        <TextField
          fullWidth
          label="email"
          id="email"
          placeholder={"email"}
          sx={{ my: "10px" }}
        />
        <TextField
          fullWidth
          label="phone"
          id="phone"
          placeholder={"phone"}
          sx={{ my: "10px" }}
        />
        <TextField
          fullWidth
          label="password"
          id="password"
          placeholder={"password"}
          sx={{ my: "10px" }}
        />
        <Button variant={"contained"}>Register</Button>
      </Box>
    </Box>
  );
}
