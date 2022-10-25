/* eslint-disable */

import React, { useState, useEffect } from "react";
import { AppBar, Button, TextField, Grid } from "@material-ui/core";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getEmojisBySearch } from "../../actions/emojis";
import useStyles from "./navbar_style";
import vote from "../../img/vote.png";
import logo from "../../img/logo.png";
import * as actionType from "../../constants/actionTypes";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [currentId, setCurrentId] = useState(0);
  const [search, setSearch] = useState("");
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const query = useQuery();
  const page = query.get("page") || 1;

  const searchEmoji = () => {
    if (search.trim()) {
      // Uso de Redux para la busqueda
      dispatch(getEmojisBySearch({ search }));
      history(`/emojis/search?searchQuery=${search || "none"}`);
    } else {
      history("/");
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchEmoji();
    }
  };

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Link to="/" className={classes.brandContainer}>
        <img component={Link} to="/" src={logo} alt="icon" height="50px" />
        <img src={vote} alt="icon" height="50px" className={classes.image} />
      </Link>

      <TextField
        name="search"
        variant="outlined"
        label="Buscar Emojis"
        onKeyDown={handleKeyPress}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></TextField>
      <Button onClick={searchEmoji} variant="contained" color="primary">
        Buscar
      </Button>
    </AppBar>
  );
};

export default Navbar;
