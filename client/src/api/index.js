import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3000" });

export const fetchEmoji = (id) => API.get(`/emojis/${id}`);
export const fetchEmojis = (page) => API.get(`/emojis?page=${page}`);
export const deleteEmoji = (id) => API.delete(`/emojis/${id}`);
export const likeEmoji = (id) => API.patch(`/emojis/${id}/likeemoji`);
export const fetchEmojisBySearch = (searchQuery) =>
  API.get(`/emojis/search?searchQuery=${searchQuery.search || "none"}`);

export const updateEmoji = (id, updatedEmoji) =>
  API.patch(`${"/emojis"}/${id}`, updatedEmoji);
