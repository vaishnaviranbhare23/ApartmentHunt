import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { Container, Grid } from "@mui/material";
import Img from "./City3.jpeg";

const View = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await axios
      .get("http://localhost:5000/apartments/")
      .then((response) => {
        setData(response.data);
        console.log(data);
      });
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Box
        sx={{
          margin: 10,
          // marginLeft: 40,

          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography component="h1" variant="h4">
          Apartments available for rent (<a href="/sort"> Click here to Sort</a>{" "}
          )
        </Typography>{" "}
      </Box>
      <Grid
        container
        component="main"
        style={{
          marginLeft: 60,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {data.map((data) => (
          <Grid item xs={4}>
            <Card
              sx={{ maxHeight: 400, maxWidth: 360, margin: 10 }}
              style={{
                borderRadius: "20px",
                boxShadow: "0px 7px 30px #e4e4e4",

                margin: "30px 20px 10px 20px",
              }}
            >
              <CardMedia
                component="img"
                height="280"
                // image="https://vistapointe.net/images/building-6.jpg"
                image={Img}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {data.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {data.state} {data.city} {data.extraInfo}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {data.rent} {data.sqft}
                </Typography>
              </CardContent>
              {/* <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions> */}
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default View;
