import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { VaultData } from 'Types/PersonalDataType';

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
      tableHeads: VaultData;
      data_title: string;
      message: string;
      selected: string;
      rows_per_page: string;
      toolbar: {
        delete: string;
        filter: string;
      };
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
      label: 'Formularz na dane',
      firstname: 'Imię',
      surname: 'Nazwisko',
      date_of_birth: 'Data Urodzenia',
      about_you: 'O Tobie',
    },
    dataTable: {
      label: 'Tabela z danymi',
      tableHeads: {
        id: 'ID',
        firstname: 'Imię',
        surname: 'Nazwisko',
        date_of_birth: 'Data urodzenia',
        about_you: 'O tobie',
      },
      data_title: 'Dane osobowe',
      message: 'Nie znaleziono danych',
      selected: 'wybrano',
      rows_per_page: 'Wiersze na stronę',
      toolbar: { delete: 'Usuń', filter: 'Filtruj' },
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
      tableHeads: {
        id: 'ID',
        firstname: 'Firstname',
        surname: 'Surname',
        date_of_birth: 'Date of birth',
        about_you: 'About you',
      },
      data_title: 'Personal data',
      message: 'No records found',
      selected: 'selected',
      rows_per_page: 'Rows per page',
      toolbar: { delete: 'Delete', filter: 'Filter' },
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
