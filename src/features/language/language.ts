import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import produce from 'immer';

interface ILanguage {
  [key: string]: {
    name: string;
    code: string;
    urls: { main: string; data: string };
  };
}

const languageValues: ILanguage = {
  PL: {
    name: 'polish',
    code: 'PL',
    urls: { main: 'Start', data: 'Dane' },
  },
  GB: {
    name: 'english',
    code: 'GB',
    urls: { main: 'Home', data: 'Data' },
  },
};

const initialState = {
  data: languageValues.PL,
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    handleLanguage: (state, action: PayloadAction<string>) => {
      const languageCode = action.payload;
      const language = languageValues[languageCode];
      if (language) {
        return produce(state, (draft: Draft<typeof state>) => {
          draft.data = language;
        });
      } else {
        throw new Error('Selected language is not supported');
      }
    },
  },
});

export const { handleLanguage } = languageSlice.actions;

export default languageSlice.reducer;
