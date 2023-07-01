import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ILanguages {
  [key: string]: {
    name: string;
    main: string;
    data: string;
  };
}

const languageValues: ILanguages = {
  PL: {
    name: 'polish',
    main: 'Start',
    data: 'Dane',
  },
  GB: {
    name: 'english',
    main: 'Home',
    data: 'Data',
  },
};

const initialState = {
  language: languageValues.polish,
};

const languagesSlice = createSlice({
  name: 'language',
  initialState: initialState,
  reducers: {
    handleLanguage: (state, language: PayloadAction<string>) => {
      try {
        state.language = languageValues[language.payload];
      } catch {
        throw new Error('Selected language is not supported');
      }
    },
  },
});

export const { handleLanguage } = languagesSlice.actions;

export default languagesSlice.reducer;
