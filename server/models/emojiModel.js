import mongoose from "mongoose";

const emojiSchema = mongoose.Schema({
  name: String,
  emoji: String,
  group: String,
  sub_group: String,
  codepoints: String,
  votes: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const EmojiModel = mongoose.model("emojis", emojiSchema);

export default EmojiModel;