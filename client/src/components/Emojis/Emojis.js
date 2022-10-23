import React from "react";
import { useSelector } from "react-redux";
import { Paper, Typography, CircularProgress, Grid } from "@material-ui/core";

import Emoji from "./Emoji/Emoji";
import useStyles from "./emojis_style";

const Emojis = ({ setCurrentId }) => {
  const { emojis, isLoading } = useSelector((state) => state.emojis);
  const classes = useStyles();

  if (!emojis.length && !isLoading)
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <Typography variant="h3" component="h2">
          No se encuentra el emoji
        </Typography>
      </Paper>
    );

  return isLoading ? (
    <Grid className={classes.circular}>
      <CircularProgress />
    </Grid>
  ) : (
    <Grid container alignItems="stretch" spacing={3}>
      {emojis?.map((emoji) => (
        <Grid key={emoji._id} item xs={12} sm={12} md={6} lg={3}>
          <Emoji emoji={emoji} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Emojis;
