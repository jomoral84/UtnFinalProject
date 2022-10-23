/* eslint-disable */
import { FETCH_ALL, START_LOADING, END_LOADING, FETCH_EMOJI } from "../constants/actionTypes";

export default (state = { isLoading: true, emojis: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case FETCH_ALL:
      return {
        ...state,
        emojis: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };

    case FETCH_EMOJI:
      return {
        ...state,
        emoji: action.payload.emoji,
      };

    // case FETCH_BY_SEARCH:
    //   return { ...state, posts: action.payload.data };

    // case LIKE:
    //   return {
    //     ...state,
    //     emojis: state.emojis.map((emoji) =>
    //       emoji._id === action.payload._id ? action.payload : emoji
    //     ),
    //   };

    default:
      return state;
  }
};
