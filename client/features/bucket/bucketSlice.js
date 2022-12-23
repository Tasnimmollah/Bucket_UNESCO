import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBucket = createAsyncThunk("fetchBucket", async () => {
  try {
    const { data } = await axios.get(`/api/buckets/2`);

    return data;
  } catch (err) {
    console.error("ERROR IN fetchBucket THUNK", err);
  }
});

export const addToBucket = createAsyncThunk("addToBucket", async (siteId) => {
  console.log("Passing siteID fields", siteId);
  try {
    const { data } = await axios.post(`/api/buckets/${siteId}/2`);

    return data;
  } catch (err) {
    console.error("ERROR IN THUNK", err);
  }
});

export const moveList = createAsyncThunk("moveList", async (siteId) => {
  console.log("Passing siteID fields", siteId);
  try {
    const { data } = await axios.put(`/api/buckets/${siteId}/2`);

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
        if (action.payload) state.bucket.push(action.payload);
      })
      .addCase(addToBucket.rejected, (state, action) => {
        state.error = action.error;
      })
      .addCase(moveList.fulfilled, (state, action) => {
        console.log("EXTRA REDUCERS array length", action.payload);

        state.bucket = state.bucket.map((item) => {
          if (
            item.userId == action.payload.userId &&
            item.siteId == action.payload.siteId
          ) {
            item = action.payload;
          }
          console.log("")
          return item;
        });
      })
      .addCase(moveList.rejected, (state, action) => {
        state.error = action.error;
      });
  },
});

export default bucketSlice.reducer;
