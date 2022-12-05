import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllTours = createAsyncThunk(
  "fetchTours",
  async ({ destination, flags, highestPrice, startDate, endDate }) => {
    console.log(
      "Passing search fields",
      destination,
      flags,
      highestPrice,
      startDate,
      endDate
    );

    try {
      const response = await axios.post(
        `/api.viator.com/partner/products/search`,
        {
          filtering: {
            destination: destination,
            flags: flags,
            highestPrice: highestPrice,
            startDate: startDate,
            endDate: endDate,
          },
          sorting: {
            sort: "PRICE",
            order: "DESCENDING",
          },
          pagination: {
            start: 1,
            count: 5,
          },
          currency: "USD",
        },

        {
          headers: {
            "exp-api-key": "a4e1ebde-6a56-45be-925b-b00b1ca5c49b",
            "Accept-Language": "en-US",
            "Content-Type": "application/json",
            Accept: "application/json;version=2.0",
          },
        }
      );
      console.log("Thunk Data Returned?", response.data);
      return response.data.products;
    } catch (err) {
      console.error("ERROR IN THUNK", err);
    }
  }
);

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
        console.log("EXTRA REDUCERS array length", action.payload);
        state.tours = action.payload;
      })
      .addCase(fetchAllTours.rejected, (state, action) => {
        state.error = action.error;
      });
  },
});

export default toursSlice.reducer;
