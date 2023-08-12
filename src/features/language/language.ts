import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { VaultData } from 'Types/PersonalDataType';
import manageLocalStorage from 'Helpers/manageLocalStorage';

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
        edit: string;
        filter: string;
      };
    };
    actionButtons: {
      cancel: string;
      submit: string;
    };
    dataPage: {
      messages: {
        primary: string;
        secondary: string;
      };
    };
    errors: {
      form: {
        id: {
          required: string;
        };
        firstname: {
          required: string;
          min: string;
          max: string;
        };
        surname: {
          required: string;
          min: string;
          max: string;
        };
        date_of_birth: {
          required: string;
          typeError: string;
          max: string;
        };
        about_you: {
          required: string;
          min: string;
          max: string;
        };
      };
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
      toolbar: { delete: 'Usuń', edit: 'Edytuj', filter: 'Filtruj' },
    },
    actionButtons: {
      cancel: 'Anuluj',
      submit: 'Wyślij',
    },
    dataPage: {
      messages: {
        primary: 'Nie znaleziono danych',
        secondary: 'Dodaj kilka na stronie głównej',
      },
    },
    errors: {
      form: {
        id: {
          required: 'ID jest wymagane',
        },
        firstname: {
          required: 'Proszę podać swoje imię',
          min: 'Imię musi mieć co najmniej 3 znaki',
          max: 'Imię nie może mieć więcej niż 20 znaków',
        },
        surname: {
          required: 'Proszę podać swoje nazwisko',
          min: 'Nazwisko musi mieć co najmniej 3 znaki',
          max: 'Nazwisko nie może mieć więcej niż 20 znaków',
        },
        date_of_birth: {
          required: 'Proszę podać swoją datę urodzenia',
          typeError: 'Proszę wprowadzić datę zgodną z formatem DD.MM.YYYY',
          max: 'Nie można podać przyszłej daty',
        },
        about_you: {
          required: 'Proszę napisać coś o sobie',
          min: 'Tekst musi mieć co najmniej 3 znaki',
          max: 'Tekst nie może mieć więcej niż 250 znaków',
        },
      },
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
      toolbar: { delete: 'Delete', edit: 'Edit', filter: 'Filter' },
    },
    actionButtons: {
      cancel: 'Cancel',
      submit: 'Submit',
    },
    dataPage: {
      messages: {
        primary: 'No data found',
        secondary: 'Add some on the homepage',
      },
    },
    errors: {
      form: {
        id: {
          required: 'ID is required',
        },
        firstname: {
          required: 'Please provide your firstname',
          min: 'Firstname must have at least 3 characters',
          max: 'Firstname must not be longer than 20 characters',
        },
        surname: {
          required: 'Please provide your surname',
          min: 'Surname must have at least 3 characters',
          max: 'Surname must not be longer than 20 characters',
        },
        date_of_birth: {
          required: 'Please provide your date of birth',
          typeError: 'Please enter a date according to the format DD.MM.YYYY',
          max: 'Future date not allowed',
        },
        about_you: {
          required: 'Please write something about you',
          min: 'Text must have at least 3 characters',
          max: 'Text must not be longer than 250 characters',
        },
      },
    },
  },
};

const selectedLanguage = manageLocalStorage.loadFromLocalStorage(
  'language',
  'PL',
);

const initialState = {
  ...languageValues[selectedLanguage],
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    handleLanguage: (_, action: PayloadAction<string>) => {
      const languageCode = action.payload;
      const language = languageValues[languageCode];
      if (language) {
        manageLocalStorage.saveToLocalStorage('language', languageCode);
        return language;
      } else {
        throw new Error('Selected language is not supported');
      }
    },
  },
});

export const { handleLanguage } = languageSlice.actions;

export default languageSlice.reducer;
