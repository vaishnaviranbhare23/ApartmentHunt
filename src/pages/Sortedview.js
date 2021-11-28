import React from "react";

import Card from "@mui/material/Card";

import { Container, Grid } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function Sortedview({ lookup }) {
  return (
    <div>
      {/* <Typography component="h1" variant="h5">
        Sorted by Your Choice
      </Typography> */}
      {console.log(lookup)}
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
        <Typography component="h1" variant="h5">
          Sorted by Your Choice
        </Typography>
        {lookup.length !== 0 ? (
          lookup.map((data) => (
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
                  height="140"
                  image="https://vistapointe.net/images/building-6.jpg"
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
          ))
        ) : (
          <Grid item xs={8}>
            <Typography component="h1" variant="h5">
              No Apartments on rent for given choices
            </Typography>
          </Grid>
        )}
      </Grid>
    </div>
  );
}

export default Sortedview;
