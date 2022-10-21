import * as api from "../api/index";
import { FETCH_ALL, UPDATE, DELETE, START_LOADING, END_LOADING } from "../constants/actionTypes";

export const getEmojis = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data: { data, currentPage, numberOfPages }} = await api.fetchEmojis(page);
    dispatch({ type: FETCH_ALL, payload: { data, currentPage, numberOfPages } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const deleteEmoji = (id) => async (dispatch) => {
  try {
    await api.deleteEmoji(id);
    dispatch({ type: DELETE, payload: id });
    console.log("Emoji Eliminado!");
  } catch (error) {
    console.log(error);
  }
};

export const likeEmoji = (id) => async (dispatch) => {
  try {
    const { data } = await api.likeEmoji(id);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
