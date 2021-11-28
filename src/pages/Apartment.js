import * as React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useAuth } from "./AuthContext";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

const Apartment = () => {
  const theme = createTheme();
  const [name, setName] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [rent, setRent] = useState("");
  const [extraInfo, setExtraInfo] = useState("");
  const [email, setEmail] = useState("");
  const [noRooms, setNoRooms] = useState("");
  const [noBathRooms, setNoBathRooms] = useState("");
  const [sqft, setSqft] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("success");

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data);
    // setName("");
    // setState("");
    // setCity("");
    // setPincode("");
    // setRent("");
    // setExtraInfo("");
    // setNoRooms("");
    // setNoBathRooms("");
    // setSqft("");
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  async function addApartment(event) {
    event.preventDefault();

    var getEmail = localStorage.getItem("id");
    console.log(getEmail);
    setEmail(getEmail);
    console.log(email);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        state,
        city,
        pincode,
        rent,
        extraInfo,
        email: localStorage.getItem("id"),
        block: {
          no_rooms: noRooms,
          no_bathrooms: noBathRooms,
          sqft: sqft,
        },
      }),
    };
    console.log(requestOptions.body);
    fetch("http://localhost:5000/apartments/add", requestOptions)
      .then((response) => {
        response.json();
        console.log(response);

        if (response.status == 200) {
          setMessage("Apartment Added Successfully");
          setError("success");
          setOpen(true);
          window.location.reload();
        } else {
          setMessage("Invalid Information");
          setError("error");

          setOpen(true);
        }
      })
      .catch((err) => console.log(err));
  }

  return localStorage.getItem("token") ? (
    <div style={{ backgroundColor: "#eff4f7" }}>
      {/* <h1>Add Apartment</h1> */}

      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          {/* <CssBaseline /> */}
          <Box
            sx={{
              paddingTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Add Apartment to be rented
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    onChange={(e) => setName(e.target.value)}
                    name="Name"
                    required
                    fullWidth
                    id="Name"
                    label="name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="State"
                    label="state"
                    name="state"
                    autoComplete="family-name"
                    onChange={(e) => setState(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="City"
                    label="city"
                    name="City"
                    autoComplete="city"
                    onChange={(e) => setCity(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="Pincode"
                    label="Pincode"
                    name="Pincode"
                    autoComplete="Pincode"
                    onChange={(e) => setPincode(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="Rent"
                    label="Rent"
                    id="Rent"
                    autoComplete="Rent"
                    onChange={(e) => setRent(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="Info"
                    label="Info"
                    id="Info"
                    autoComplete="Info"
                    onChange={(e) => setExtraInfo(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="Number_of_Rooms"
                    label="Number of Rooms"
                    id="Rooms"
                    autoComplete="Rooms"
                    onChange={(e) => setNoRooms(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="Number_of_Bathrooms"
                    label="Number of Bathrooms"
                    id="Number of Bathrooms"
                    autoComplete="Number of Bathrooms"
                    onChange={(e) => setNoBathRooms(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="Square Feets"
                    label="Sqaure Feets"
                    id="Sqaure Feets"
                    autoComplete="Square Feet"
                    onChange={(e) => setSqft(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Button
                type="Add"
                fullWidth
                variant="contained"
                onClick={addApartment}
                sx={{ mt: 3, mb: 2 }}
              >
                Add
              </Button>
            </Box>
          </Box>
        </Container>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={error} sx={{ width: "100%" }}>
            {message}
          </Alert>
        </Snackbar>
      </ThemeProvider>
    </div>
  ) : (
    (alert("Login required"), (window.location.href = "/login"))
  );
};

export default Apartment;
