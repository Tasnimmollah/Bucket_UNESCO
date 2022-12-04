import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllTours = createAsyncThunk("fetchSites", async () => {
  const { data } = await axios.post(
    `/api.viator.com/partner/products/search`,
    { cart },
    {
      headers: {
        authorization: token,
      },
    }
  );
  return data;
});

const toursSlice = createSlice({
  name: "allTours",
  initialState: {
    tours: [],
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllTours.fulfilled, (state, action) => {
        state.tours = action.payload;
      })
      .addCase(fetchAllTours.rejected, (state, action) => {
        state.error = action.error;
      });
  },
});

export default toursSlice.reducer;
