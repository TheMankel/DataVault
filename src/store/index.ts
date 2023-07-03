import { combineReducers, configureStore } from '@reduxjs/toolkit';
import languagesReducer from '../features/language';

const rootReducer = combineReducers({
  language: languagesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
