import React, { useState } from "react";
import "./navbar.css";

import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
// import { useAuth } from "./AuthContext";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [inout, setInout] = useState("Login");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("success");
  // const { userAuthState, setUserAuth } = useAuth();

  const handleLogout = () => {
    localStorage.clear();
    setMessage("Logged out Successfully");
    setError("success");
    setOpen(true);
    window.location.href = "/";
    // setUserAuth({
    //   isLoggedIn: false,
    //   user: null,
    // });
    // console.log(userAuthState, "");
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}

        <div className="logo">
          <h2>
            <NavLink to="/">
              <span>A</span>partment
              <span>H</span>unt
            </NavLink>
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          // className={
          //   showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          // }

          className={"menu-link mobile-menu-link"}
        >
          <ul>
            <li>
              <NavLink to="/view">Appartments</NavLink>
            </li>
            <li>
              <>
                {!localStorage.getItem("token") ? (
                  <NavLink to="/login">Add for Rent</NavLink>
                ) : (
                  <NavLink to="/add">Add for Rent</NavLink>
                )}
              </>
            </li>

            <li>
              <>
                {!localStorage.getItem("token") ? (
                  <NavLink to="/login">My list</NavLink>
                ) : (
                  <NavLink to="/mylist">My list</NavLink>
                )}
              </>
            </li>

            {!localStorage.getItem("token") && (
              <li>
                <NavLink to="/register">
                  {" "}
                  <Button variant="outlined">Register</Button>
                </NavLink>
              </li>
            )}

            <li>
              <>
                {localStorage.getItem("token") ? (
                  <NavLink to="/">
                    <Button variant="outlined" onClick={handleLogout}>
                      Logout
                    </Button>
                  </NavLink>
                ) : (
                  <NavLink to="/login">
                    <Button variant="outlined">Login</Button>
                  </NavLink>
                )}
              </>
            </li>
          </ul>
        </div>
      </nav>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={error} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Navbar;
