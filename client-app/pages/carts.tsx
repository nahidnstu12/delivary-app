import { Button, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function Carts() {
  return (
    <>
      <Typography variant={"h4"} sx={{ textAlign: "center" }}>
        Cart Page
      </Typography>
      <Grid container spacing={2} p={4}>
        <Grid item md={8}>
          {[...Array(5)].map((_, index) => (
            <CartItem key={index} />
          ))}
        </Grid>
        <Grid item md={4} justifyContent={"start"}>
          <Box sx={{ display: "grid", placeItems: "center", gap: "10px" }}>
            <Typography variant={"h6"} sx={{ textAlign: "center" }}>
              Subtotal = 749 taka
            </Typography>
            <Button variant="outlined">Pay</Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

const CartItem = () => {
  return (
    <Card sx={{ display: "flex", gap: "8px", my: "12px" }}>
      <CardMedia
        sx={{ height: 120, width: 120 }}
        image="/images/pizza1.jpg"
        title="green iguana"
      />
      <CardContent
        sx={{
          width: "100%",
          display: "flex",
          gap: "30px",
          alignItems: "center",
        }}
      >
        <Box sx={{ mx: "30px" }}>
          <Typography sx={{ fontWeight: "900", fontSize: "20px" }}>
            -
          </Typography>
          <Typography>1</Typography>
          <Typography sx={{ fontWeight: "900" }}>+</Typography>
        </Box>
        <Typography> Price: 700 taka</Typography>
        <Button variant="outlined" size={"small"}>
          Delete
        </Button>
      </CardContent>
    </Card>
  );
};
