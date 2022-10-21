/* eslint-disable */

import React, { useState, useEffect } from "react";
import {
  Container,
  Grow,
  Grid,
  Paper,
  AppBar,
  TextField,
  Button,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

import { getEmojis } from "../../actions/emojis";
import Emojis from "../Emojis/Emojis";
import Pagination from "../Pagination/Pagination";
import useStyle from "./home_style";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyle();
  const query = useQuery();
  const page = query.get("page") || 1;

  useEffect(() => {
    dispatch(getEmojis());
  }, [currentId, dispatch]);

  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
          className={classes.gridContainer}
        >
          <Grid item xs={12} sm={6} md={9}>
            <Emojis setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={9}>
          <Paper className={classes.pagination} elevation={6}>
            <Pagination page={page} />
          </Paper>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
