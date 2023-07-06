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
  return res.data;
});

export const fetchDetails = createAsyncThunk("/details", async (id) => {
  const res = await api.get(`?apiKey=${APIKey}&i=${id}&plot=full`);
  return res.data;
});

export const searchMovie = createAsyncThunk("/search", async (title) => {
  const res = await api.get(`?apiKey=${APIKey}&s=${title}`);
  console.log(res);
  return res.data;
});

const initialState = {
  movies: {},
  shows: {},
  movieOrShow: {},
  search: {},
  loading: false,
};

const displaySlice = createSlice({
  name: "display",
  initialState,
  reducers: {
    addMovies(state, action) {
      state.movies = action.payload;
    },
    addShows(state, action) {
      state.shows = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, () => {}),
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
    builder.addCase(fetchDetails.fulfilled, (state, action) => {
      console.log("fetch details: ", action.payload);
      state.movieOrShow = action.payload;
    }),
      builder.addCase(searchMovie.pending, (state) => {
        state.loading = true;
      });
    builder.addCase(searchMovie.fulfilled, (state, action) => {
      state.loading = false;
      state.search = action.payload;
    });
    builder.addCase(searchMovie.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { addMovies, addShows } = displaySlice.actions;
export const getAllMovies = (state) => state.display.movies;
export const getAllShows = (state) => state.display.shows;
export const getSelectedData = (state) => state.display.movieOrShow;
export const getSearchData = (state) => state.display.search;
export default displaySlice.reducer;
