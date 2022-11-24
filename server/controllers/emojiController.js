import express from "express";
import mongoose from "mongoose";

import EmojiModel from "../models/emojiModel.js";

const router = express.Router();

export const getEmojis = async (req, res) => {
  const { page } = req.query;

  try {
    const limitPages = 10;
    const startIndex = (Number(page) - 1) * limitPages; // Toma el startIndex de cada pagina
    const total = await EmojiModel.countDocuments({});

    const emojis = await EmojiModel.find()
      .sort({ likes: -1 })
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

export const likeEmoji = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No emoji with id: ${id}`);

  const emoji = await EmojiModel.findById(id);
  const updatedEmoji = await EmojiModel.findByIdAndUpdate(
    id,
    { likes: emoji.likes + 1 },
    { new: true }
  );

  res.json(updatedEmoji);
};

export const getEmojisBySearch = async (req, res) => {
  const { searchQuery } = req.query;
  try {
    const name = new RegExp(searchQuery, "i"); // El objeto RegExp se utiliza para hacer coincidir texto con un patrón. Ej: text, Text, TEXT

    const emojis = await EmojiModel.find({ name });

    res.json({
      data: emojis,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export default router;
