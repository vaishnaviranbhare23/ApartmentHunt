import React, { useState } from "react";
import "./header.css";

import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

function Header() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [inout, setInout] = useState("Login");
  // const { userAuthState, setUserAuth } = useAuth();

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/home";
    // setUserAuth({
    //   isLoggedIn: false,
    //   user: null,
    // });
    // console.log(userAuthState, "");
  };
  return (
    <div>
      <nav class="navbar navbar-light shadow navbar-expand-lg bgNav p-3">
        <div class="container-fluid">
          <a class="navbar-brand offset-1  bgNav" href="/landingpage">
            <div className="logo">
              <h2>
                <span>A</span>partment
                <span>H</span>unt
              </h2>
            </div>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse  offset-7 " id="navbarNav">
            <ul class="navbar-nav">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
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
                    <NavLink to="/home">
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
        </div>
      </nav>
    </div>
  );
}

export default Header;
