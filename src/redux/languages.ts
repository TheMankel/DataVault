import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import produce from 'immer';

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
  initialState,
  reducers: {
    handleLanguage: (state, action: PayloadAction<string>) => {
      const languageCode = action.payload;
      const language = languageValues[languageCode];
      if (language) {
        return produce(state, (draft) => {
          draft.language = language;
        });
      } else {
        throw new Error('Selected language is not supported');
      }
    },
  },
});

export const { handleLanguage } = languagesSlice.actions;

export default languagesSlice.reducer;
