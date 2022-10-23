/* eslint-disable */

import React, { useEffect } from "react";
import {
  Paper,
  Typography,
  CircularProgress,
  Divider,
} from "@material-ui/core/";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useParams, useNavigate } from "react-router-dom";

import { getEmoji, getEmojisBySearch } from "../../actions/emojis";
import useStyles from "./emojiDetails_style";

const emoji = () => {
  const { emoji, emojis, isLoading } = useSelector((state) => state.emojis);
  const dispatch = useDispatch();
  const history = useNavigate();
  const classes = useStyles();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getEmoji(id));
  }, [id]);

  if (!emoji) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <Typography variant="h3" component="h2">
          No existe el emoji
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
    <Paper style={{ padding: "100px", borderRadius: "15px" }} elevation={6}>
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
