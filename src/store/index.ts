import { combineReducers, configureStore } from '@reduxjs/toolkit';
import languageReducer from 'Features/language';
import vaultDataReducer from 'Features/vaultData';

const rootReducer = combineReducers({
  language: languageReducer,
  vault: vaultDataReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
