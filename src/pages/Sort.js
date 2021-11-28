import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Sortedview from "./Sortedview";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { Container, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";

const Sort = () => {
  const [data, setData] = useState([]);

  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");

  const [lkup, setLkup] = useState([]);

  const lookup = [];

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log(city);
  //   // eslint-disable-next-line no-console
  //   console.log({
  //     email: data.get("email"),
  //     password: data.get("password"),
  //   });
  // };
  async function fetchData(event) {
    const response = await axios
      .get("http://localhost:5000/apartments/")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
        console.log(data.length);

        if (city && pincode) {
          for (var i = 0; i < data.length; i++) {
            if (
              data[i].city === city &&
              Number(data[i].pincode) === Number(pincode)
            ) {
              lookup.push(data[i]);
            }
          }
        } else if (city && !pincode) {
          for (var j = 0; j < data.length; j++) {
            if (data[j].city === city) {
              lookup.push(data[j]);
            }
          }
        } else if (pincode && !city) {
          for (var k = 0; k < data.length; k++) {
            if (Number(data[k].pincode) === Number(pincode)) {
              lookup.push(data[k]);
            }
          }
        } else {
          for (var l = 0; l < data.length; l++) {
            lookup.push(data[l]);
          }
        }

        console.log(lookup);
        setLkup(lookup);
        console.log(data);
      });
    console.log(typeof city);
    console.log(typeof pincode);
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Grid
          container
          component="main"
          style={{
            paddingLeft: 20,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {/* <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          > */}
          <Grid item xs={3}>
            <TextField
              // required
              // fullWidth
              id="City"
              label="city"
              name="City"
              autoComplete="city"
              onChange={(e) => setCity(e.target.value)}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              // required
              // fullWidth
              // type="number"
              id="Pincode"
              label="Pincode"
              name="Pincode"
              autoComplete="Pincode"
              onChange={(e) => setPincode(e.target.value)}
            />
          </Grid>
          <Grid item xs={3}>
            <Button
              type="Add"
              fullWidth
              variant="contained"
              onClick={fetchData}
              sx={{ mt: 3, mb: 2 }}
            >
              Sort
            </Button>
          </Grid>
          {/* </Box> */}
        </Grid>

        <Sortedview lookup={lkup} />
      </Box>
    </>
  );
};

export default Sort;
