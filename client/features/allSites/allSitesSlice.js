import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllSites = createAsyncThunk("fetchSites", async () => {
  const { data } = await axios.get(`/api/sites`);
  return data;
});

const allSitesSlice = createSlice({
  name: "allSites",
  initialState: {
    sites: [],
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllSites.fulfilled, (state, action) => {
        state.sites = action.payload;
      })
      .addCase(fetchAllSites.rejected, (state, action) => {
        state.error = action.error;
      });
  },
});

export default allSitesSlice.reducer;
