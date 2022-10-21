import express from "express";
import mongoose from "mongoose";
import fetch from "node-fetch";

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
      numberOfPages: Math.ceil(total / limitPages)});
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// export const getEmojis = async (req, res) => {
//   try {
//     const emojis = await EmojiModel.find();

//     res.json(emojis);
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };

// export const likeEmoji = async(req, res) => {
//     try {
        
//     } catch (error) {
        
//     }
// }



export default router;
