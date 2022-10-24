import express from "express";
import {
  getEmojis,
  getEmoji,
  likeEmoji,
  getEmojisBySearch,
} from "../controllers/emojiController.js";

const router = express.Router();

router.get("/", getEmojis);
router.patch("/:id/likeemoji", likeEmoji);
router.get("/search", getEmojisBySearch);
router.get("/:id", getEmoji);

export default router;
