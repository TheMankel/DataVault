import { object, string, date } from 'yup';

export const DataSchema = object().shape({
  id: string().trim().required('ID is required'),
  firstname: string()
    .trim()
    .required('Please provide your firstname')
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
