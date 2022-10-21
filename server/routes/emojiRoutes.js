import express from "express";
import { getEmojis } from "../controllers/emojiController.js";

const router = express.Router();


router.get("/", getEmojis);
// router.patch("/:id/likeemoji", likeEmoji);
// router.get("/search", getEmojisBySearch);
// router.get("/:id", getEmoji);

// router.post("/", auth, createEmoji);
// router.patch("/:id", auth, updateEmoji);
 // router.delete("/:id", auth, deleteEmoji);
// router.patch("/:id/likepost", auth, likeEmoji);

export default router;
