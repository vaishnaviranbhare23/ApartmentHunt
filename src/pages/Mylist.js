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
import { Container, Grid, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Mylist = () => {
  const [data, setData] = useState([]);
  const [showData, setshowData] = useState(false);
  const [open, setOpen] = useState(false);

  var userId = localStorage.getItem("id");

  const fetchData = async () => {
    console.log(userId);
    const response = await axios
      .get(`http://localhost:5000/apartments/mylist/${userId}`)
      .then((response) => {
        setData(response.data);
        console.log(data);
      });
  };

  const handleDelete = (id) => {
    console.log(id);
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };
    console.log("Handle Submit");
    fetch(`http://localhost:5000/apartments/${id}`, requestOptions).then(
      (response) => {
        response.json();
        console.log(response);

        if (response.status == 200) {
          setshowData(true);
          setOpen(true);
        }
      }
    );
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [showData]);

  return localStorage.getItem("token") ? (
    <>
      <Grid container>
        {data.map((data) => (
          <Grid item xs={4}>
            <Card
              sx={{ maxWidth: 400, maxHeight: 360, margin: 10 }}
              style={{
                borderRadius: "20px",

                boxShadow: "0px 7px 30px #e4e4e4",
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
              <CardActions
                style={{
                  margin: 10,
                  justifyContent: "right",
                }}
              >
                <Button
                  size="small"
                  variant="outlined"
                  color="error"
                  onClick={() => {
                    handleDelete(data._id);
                  }}
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            style={{ backgroundColor: "success" }}
            sx={{ width: "100%" }}
          >
            Deleted Successfully
          </Alert>
        </Snackbar>
      </Grid>
    </>
  ) : (
    (alert("Login required"), (window.location.href = "/login"))
  );
};

export default Mylist;
