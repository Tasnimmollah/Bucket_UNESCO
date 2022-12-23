// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const fetchAllTours = createAsyncThunk("fetchTours", async (siteId) => {
//   console.log("Passing siteID fields", siteId);

//   try {
//     const { data } = await axios.get(`/api/tours/${siteId}`);

//     return data;
//   } catch (err) {
//     console.error("ERROR IN THUNK", err);
//   }
// });

// const toursSlice = createSlice({
//   name: "allTours",
//   initialState: {
//     tours: [],
//     error: null,
//   },
//   reducers: {},
//   extraReducers(builder) {
//     builder
//       .addCase(fetchAllTours.fulfilled, (state, action) => {
//         console.log("EXTRA REDUCERS array length", action.payload);
//         state.tours = action.payload;
//       })
//       .addCase(fetchAllTours.rejected, (state, action) => {
//         state.error = action.error;
//       });
//   },
// });

// export default toursSlice.reducer;
