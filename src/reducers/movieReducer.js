import { ADD_MOVIE, DELETE_MOVIE } from "../actions/movieActions.js";
import movies from "../data.js";
import { legacy_createStore as createStore } from "redux";

const initialState = {
  movies: movies,
  appTitle: "IMDB Movie Database",
};

const reducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    
    case ADD_MOVIE:
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };


    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((item) => action.payload !== item.id),
      };
    default:
      return state;
  }
};

export default reducer;
