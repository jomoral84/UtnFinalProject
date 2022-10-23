/* eslint-disable */

import React, { useState, useEffect } from "react";
import { AppBar, Avatar, Toolbar, Typography, Button } from "@material-ui/core";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";

import useStyles from "./navbar_style";
import vote from "../../img/vote.png";
import logo from "../../img/logo.png";
import * as actionType from "../../constants/actionTypes";

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // const logout = () => {
  //   dispatch({ type: actionType.LOGOUT });

  //   navigate("/auth");

  //   setUser(null);
  // };

  // useEffect(() => {
  //   const token = user?.token;

  //   if (token) {
  //     const decodedToken = decode(token);

  //     if (decodedToken.exp * 1000 < new Date().getTime()) {
  //       // Si se acaba el tiempo del token se deslogea al usuario
  //       logout();
  //     }
  //   }

  //   setUser(JSON.parse(localStorage.getItem("profile")));
  // }, [location]);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Link to="/" className={classes.brandContainer}>
        <img component={Link} to="/" src={logo} alt="icon" height="50px" />
        <img src={vote} alt="icon" height="50px" className={classes.image} />
      </Link>
    </AppBar>
  );
};

export default Navbar;
