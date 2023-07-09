import { combineReducers, configureStore } from '@reduxjs/toolkit';
import languageReducer from '../features/language';

const rootReducer = combineReducers({
  language: languageReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
