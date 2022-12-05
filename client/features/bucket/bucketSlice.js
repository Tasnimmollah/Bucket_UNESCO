import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBucket = createAsyncThunk("fetchBucket", async () => {
  console.log("Passing siteID fields", site);

  try {
    const { data } = await axios.get(`/api/bucket`, {});

    return data;
  } catch (err) {
    console.error("ERROR IN THUNK", err);
  }
});

export const addToBucket = createAsyncThunk("addToBucket", async (siteId) => {
  console.log("Passing siteID fields", siteId);
  try {
    const { data } = await axios.put(`/api/bucket/${siteId}`, {});

    return data;
  } catch (err) {
    console.error("ERROR IN THUNK", err);
  }
});

export const moveList = createAsyncThunk("moveList", async (siteId) => {
  console.log("Passing siteID fields", siteId);
  try {
    const { data } = await axios.put(`/api/bucket/${siteId}`, {});

    return data;
  } catch (err) {
    console.error("ERROR IN THUNK", err);
  }
});

const bucketSlice = createSlice({
  name: "bucket",
  initialState: {
    bucket: [],
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBucket.fulfilled, (state, action) => {
        console.log("EXTRA REDUCERS array length", action.payload);
        state.bucket = action.payload;
      })
      .addCase(fetchBucket.rejected, (state, action) => {
        state.error = action.error;
      })
      .addCase(addToBucket.fulfilled, (state, action) => {
        console.log("EXTRA REDUCERS array length", action.payload);
        state.bucket = action.payload;
      })
      .addCase(addToBucket.rejected, (state, action) => {
        state.error = action.error;
      })
      .addCase(moveList.fulfilled, (state, action) => {
        console.log("EXTRA REDUCERS array length", action.payload);
        state.bucket = action.payload;
      })
      .addCase(moveList.rejected, (state, action) => {
        state.error = action.error;
      });
  },
});

export default bucketSlice.reducer;
