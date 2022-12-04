import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleSite = createAsyncThunk(
  "fetchSite",
  async (siteId) => {
    const { data } = await axios.get(`/api/sites/${siteId}`);
    return data;
  }
);

const singleSiteSlice = createSlice({
  name: "singleProduct",
  initialState: {
    aSite: {},
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchSingleSite.fulfilled, (state, action) => {
        state.aSite = action.payload;
      })
      .addCase(fetchSingleSite.rejected, (state, action) => {
        state.error = action.error;
      });
  },
});

export default singleSiteSlice.reducer;
