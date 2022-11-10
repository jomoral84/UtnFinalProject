/* eslint-disable */

import React, { useEffect } from "react";
import {
  Paper,
  Typography,
  CircularProgress,
  Divider,
  Button,
  Link,
} from "@material-ui/core/";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useParams, useNavigate } from "react-router-dom";

import { getEmoji, getEmojisBySearch } from "../../actions/emojis";
import useStyles from "./emojiDetails_style";
import Jaipur from "../../img/Jaipur.jpg";

const emoji = () => {
  const { emoji, emojis, isLoading } = useSelector((state) => state.emojis);
  const dispatch = useDispatch();
  const history = useNavigate();
  const classes = useStyles();
  const { id } = useParams();

  const toHome = () => {
    history("/");
  };

  useEffect(() => {
    dispatch(getEmoji(id));
  }, [id]);

  if (!emoji) {
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
  }

  if (isLoading) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size="7em" />
      </Paper>
    );
  }

  return (
    <Paper
      style={{
        padding: "80px",
        borderRadius: "15px",
        backgroundImage: `url(${Jaipur})`,
        opacity: "0.9",
      }}
      elevation={6}
    >
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h3" component="h2">
            {emoji.name}
          </Typography>
          <Divider style={{ margin: "10px 0" }} />
          <Typography variant="h6" component="h2">
            Group: {emoji.group} <br></br>
            Subgroup: {emoji.sub_group} <br></br>
            Votes: {emoji.likes}
          </Typography>
          <Divider style={{ margin: "23px 0" }} />

          <Button
            size="large"
            variant="contained"
            color="primary"
            onClick={toHome}
          >
            <ArrowBackIosIcon />
            Back
          </Button>
        </div>
        <div className={classes.imageSection}>
          <Typography gutterBottom variant="h1" component="h2">
            {emoji.emoji}
          </Typography>
        </div>
      </div>
    </Paper>
  );
};

export default emoji;
