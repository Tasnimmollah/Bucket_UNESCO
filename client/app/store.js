import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
//import authReducer from '../features/auth/authSlice';

import allSitesSliceReducer from "../features/allSites/allSitesSlice";
import singleSiteSliceReducer from "../features/singleSite/singleSiteSlice";
import toursSliceReducer from "../features/viewTours/toursSlice";

const store = configureStore({
  reducer: {
    // auth: authReducer,
    allSites: allSitesSliceReducer,
    singleSite: singleSiteSliceReducer,
    allTours: toursSliceReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
// export * from '../features/auth/authSlice';
