import React from "react";
import { useSelector } from "react-redux";
import { Paper, Typography, CircularProgress, Grid } from "@material-ui/core";

import Emoji from "./Emoji/Emoji";
import useStyles from "./emojis_style";
import Jaipur from "../../img/Jaipur.jpg";

const Emojis = ({ setCurrentId }) => {
  const { emojis, isLoading } = useSelector((state) => state.emojis);
  const classes = useStyles();

  if (!emojis.length && !isLoading)
    return (
      <Paper
        style={{
          backgroundImage: `url(${Jaipur})`,
          opacity: "0.9",
        }}
        elevation={6}
        className={classes.loadingPaper}
      >
        <Typography variant="h3" component="h2">
          Emoji not found!
        </Typography>
      </Paper>
    );

  return isLoading ? (
    <Grid className={classes.circular}>
      <CircularProgress />
    </Grid>
  ) : (
    <Grid
      container
      spacing={4}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      {emojis?.map((emoji) => (
        <Grid key={emoji._id} item xs={12} sm={12} md={6} lg={3}>
          <Emoji emoji={emoji} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Emojis;
