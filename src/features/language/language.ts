import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ILanguage {
  [key: string]: {
    name: string;
    code: string;
    urls: { main: string; data: string };
    dataForm: {
      label: string;
      firstname: string;
      surname: string;
      date_of_birth: string;
      about_you: string;
    };
    dataTable: {
      label: string;
    };
    actionButtons: {
      cancel: string;
      submit: string;
    };
    errors: {
      required: string;
    };
  };
}

const languageValues: ILanguage = {
  PL: {
    name: 'polish',
    code: 'PL',
    urls: { main: 'Start', data: 'Dane' },
    dataForm: {
      label: 'Formularz na Dane',
      firstname: 'Imię',
      surname: 'Nazwisko',
      date_of_birth: 'Data Urodzenia',
      about_you: 'O Tobie',
    },
    dataTable: {
      label: 'Tabela z danymi',
    },
    actionButtons: {
      cancel: 'Anuluj',
      submit: 'Wyślij',
    },
    errors: {
      required: 'Proszę podać swoje imię',
    },
  },
  GB: {
    name: 'english',
    code: 'GB',
    urls: { main: 'Home', data: 'Data' },
    dataForm: {
      label: 'Data Form',
      firstname: 'Firstname',
      surname: 'Surname',
      date_of_birth: 'Date of Birth',
      about_you: 'About You',
    },
    dataTable: {
      label: 'Data Table',
    },
    actionButtons: {
      cancel: 'Cancel',
      submit: 'Submit',
    },
    errors: {
      required: 'Please provide your firstname',
    },
  },
};

const initialState = {
  ...languageValues.PL,
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    handleLanguage: (_, action: PayloadAction<string>) => {
      const languageCode = action.payload;
      const language = languageValues[languageCode];
      if (language) return language;
      else {
        throw new Error('Selected language is not supported');
      }
    },
  },
});

export const { handleLanguage } = languageSlice.actions;

export default languageSlice.reducer;
