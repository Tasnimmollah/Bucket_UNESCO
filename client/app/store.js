import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
//import authReducer from '../features/auth/authSlice';

import allSitesSliceReducer from '../features/allSites/allSitesSlice';

const store = configureStore({
  reducer: {
    // auth: authReducer,
    allSites: allSitesSliceReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
// export * from '../features/auth/authSlice';
