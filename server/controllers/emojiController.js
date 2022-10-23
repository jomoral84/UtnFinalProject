import express from "express";

import EmojiModel from "../models/emojiModel.js";

const router = express.Router();

export const getEmojis = async (req, res) => {
  const { page } = req.query;

  try {
    const limitPages = 8;
    const startIndex = (Number(page) - 1) * limitPages; // Toma el startIndex de cada pagina
    const total = await EmojiModel.countDocuments({});

    const emojis = await EmojiModel.find()
      .sort({ _id: -1 })
      .limit(limitPages)
      .skip(startIndex);

    res.json({
      data: emojis,
      currentPage: Number(page),
      numberOfPages: Math.ceil(total / limitPages),
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getEmoji = async (req, res) => {
  const { id } = req.params;

  try {
    const emoji = await EmojiModel.findById(id);

    res.status(200).json(emoji);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// export const likeEmoji = async (req, res) => {
//   const { id } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(id))
//     return res.status(404).send(`No emojis with id: ${id}`);

//   const emoji = await EmojiModel.findById(id);

//   // const index = emoji.likes.findIndex((id) => id === String(req.userId));

//   // if (index === -1) {
//   //   // Likea el post
//   //   emoji.likes.push(req.userId);
//   // } else {
//   //   emoji.likes = emoji.likes.filter((id) => id !== String(req.userId));
//   // }

//   emoji.likes.push(req.userId);

//   const updatedEmoji = await EmojiModel.findByIdAndUpdate(id, emoji, {
//     new: true,
//   });

//   res.json(updatedEmoji);
// };

export default router;
