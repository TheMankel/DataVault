import { object, string, date, setLocale } from 'yup';
import { useAppSelector } from 'Store/hooks';

interface Translations {
  [locale: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  GB: {
    required: 'Please provide a value',
    min: 'Value must have at least ${min} characters',
    max: 'Value must not exceed ${max} characters',
  },
  PL: {
    required: 'Proszę podać wartość',
    min: 'Wartość musi mieć co najmniej ${min} znaków',
    max: 'Wartość nie może przekraczać ${max} znaków',
  },
};

const setTranslations = (locale: string) => {
  const translation = translations[locale];
  if (translation) {
    setLocale({ mixed: translation });
  } else {
    throw new Error(`Translations for locale "${locale}" not found`);
  }
};

const PersonalDataSchema = () => {
  const errors = useAppSelector((state) => state.language.errors);

  return object().shape({
    id: string().trim().required('ID is required'),
    firstname: string()
      .trim()
      .required(errors.required)
      .min(3, 'Firstname must have at least 3 characters')
      .max(20, 'Firstname must not be longer than 20 characters'),
    surname: string()
      .trim()
      .required('Please provide your surname')
      .min(3, 'Surname must have at least 3 characters')
      .max(20, 'Surname must not be longer than 20 characters'),
    date_of_birth: date()
      .default(() => new Date())
      .required('Please provide your date of birth')
      .max(new Date(), 'Future date not allowed'),
    about_you: string()
      .trim()
      .required('Please write something about you')
      .min(3, 'Text must have at least 3 characters')
      .max(250, 'Text must not be longer than 250 characters'),
  });
};

export default PersonalDataSchema;
