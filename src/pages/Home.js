import React from "react";
import Navbar from "./Navbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Img from "./City.jpg";
import Img2 from "./City2.jpeg";

const Home = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <a href="/view" style={{ color: "#000000" }}>
          <Typography component="h1" variant="h3">
            Start your Hunt!
          </Typography>
        </a>

        <center>
          <img
            style={{
              objectFit: "contain",
              border: "1px",
              borderRadius: "20px",
              width: "55%",
              marginTop: 40,
              float: "center",
              boxShadow: "10px 10px 10px grey",

              justifyContent: "center",
            }}
            src={Img}
          />
        </center>
      </Box>
    </div>
  );
};

export default Home;
