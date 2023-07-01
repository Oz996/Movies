import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";
import { APIKey } from "../../api/apiKey";

export const fetchMovies = createAsyncThunk("/movies", async () => {
  const res = await api.get(`?apiKey=${APIKey}&s=Harry&type=movie`);
  // console.log(res);
  return res.data;
});

export const fetchShows = createAsyncThunk("/shows", async () => {
  const res = await api.get(`?apiKey=${APIKey}&s=Friends&type=series`);
  console.log(res);
  return res.data;
});

const initialState = {
  movies: {},
  shows: {},
};

const displaySlice = createSlice({
  name: "display",
  initialState,
  reducers: {
    addMovies(state, action) {
      state.movies = action.payload;
    },
    addShows(state, action) {
        state.shows = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, () => {
      console.log("pending");
    }),
      builder.addCase(fetchMovies.fulfilled, (state, action) => {
        console.log("fetch success");
        state.movies = action.payload;
      }),
      builder.addCase(fetchMovies.rejected, () => {
        console.log("fetch failed");
      }),
      builder.addCase(fetchShows.fulfilled, (state, action) => {
        state.shows = action.payload;
      });
  },
});

export const { addMovies, addShows } = displaySlice.actions;
export const getAllMovies = (state) => state.display.movies;
export const getAllShows = (state) => state.display.shows
export default displaySlice.reducer;
