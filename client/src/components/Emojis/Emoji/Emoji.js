/* eslint-disable */

import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
// import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
// import DeleteIcon from '@material-ui/icons/Delete';

// import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import { likeEmoji, deleteEmoji } from '../../../actions/emojis';
import useStyles from './emoji_style';

const Emoji = ({ emoji, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));

//   const Likes = () => {
//     if (emoji.likes.length > 0) {
//       return emoji.likes.find((like) => like === (user?.result?._id))
//         ? (
//           <><ThumbUpAltIcon fontSize="small" />&nbsp;{emoji.likes.length > 2 ? `You and ${emoji.likes.length - 1} others` : `${emoji.likes.length} like${emoji.likes.length > 1 ? 's' : ''}` }</>
//         ) : (
//           <><ThumbUpAltOutlined fontSize="small" />&nbsp;{emoji.likes.length} {emoji.likes.length === 1 ? 'Like' : 'Likes'}</>
//         );
//     }

//     return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
//   };

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={emoji.emoji} title={emoji.name} />
      <div className={classes.overlay}>
        <Typography variant="h6">{emoji.emoji}</Typography>
        <Typography variant="h6">{emoji.name}</Typography>
        <Typography variant="h6">{emoji.votes}</Typography>
         </div>
     
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">{emoji.name}</Typography>
      </div>
      </Card>
  );
};

export default Emoji;