import { object, string, date } from 'yup';
import { useAppSelector } from 'Store/hooks';

const PersonalDataSchema = () => {
  const errors = useAppSelector((state) => state.language.errors);

  return object().shape({
    id: string().trim().required(errors.form.id.required),
    firstname: string()
      .trim()
      .required(errors.form.firstname.required)
      .min(3, errors.form.firstname.min)
      .max(20, errors.form.firstname.max),
    surname: string()
      .trim()
      .required(errors.form.surname.required)
      .min(3, errors.form.surname.min)
      .max(20, errors.form.surname.max),
    date_of_birth: date()
      .default(() => new Date())
      .required(errors.form.date_of_birth.required)
      .typeError(errors.form.date_of_birth.typeError)
      .max(new Date(), errors.form.date_of_birth.max),
    about_you: string()
      .trim()
      .required(errors.form.about_you.required)
      .min(3, errors.form.about_you.min)
      .max(250, errors.form.about_you.max),
  });
};

export default PersonalDataSchema;
