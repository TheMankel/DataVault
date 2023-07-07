import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ILanguage {
  [key: string]: {
    name: string;
    code: string;
    urls: { main: string; data: string };
    dataForm: {
      firstname: string;
      surname: string;
      date_of_birth: string;
      about_you: string;
    };
    actionButtons: {
      cancel: string;
      submit: string;
    };
  };
}

const languageValues: ILanguage = {
  PL: {
    name: 'polish',
    code: 'PL',
    urls: { main: 'Start', data: 'Dane' },
    dataForm: {
      firstname: 'Imię',
      surname: 'Nazwisko',
      date_of_birth: 'Data Urodzenia',
      about_you: 'O Tobie',
    },
    actionButtons: {
      cancel: 'Anuluj',
      submit: 'Wyślij',
    },
  },
  GB: {
    name: 'english',
    code: 'GB',
    urls: { main: 'Home', data: 'Data' },
    dataForm: {
      firstname: 'Firstname',
      surname: 'Surname',
      date_of_birth: 'Date of Birth',
      about_you: 'About You',
    },
    actionButtons: {
      cancel: 'Cancel',
      submit: 'Submit',
    },
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
        state.data = language;
      } else {
        throw new Error('Selected language is not supported');
      }
    },
  },
});

export const { handleLanguage } = languageSlice.actions;

export default languageSlice.reducer;
