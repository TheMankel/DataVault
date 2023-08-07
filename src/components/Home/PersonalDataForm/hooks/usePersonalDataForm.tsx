import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { nanoid } from 'nanoid';
import { PersonalDataType } from 'Types/PersonalDataType';
import PersonalDataSchema from 'Schemas/PersonalDataSchema';
import { useAppSelector, useAppDispatch } from 'Store/hooks';
import { addVaultData } from 'Features/vaultData';
import dayjs from 'dayjs';

const usePersonalDataForm = () => {
  const code = useAppSelector((state) => state.language.code);
  const dispatch = useAppDispatch();

  useEffect(() => {
    methods.clearErrors();
  }, [code]);

  const defaultValues: PersonalDataType = {
    id: nanoid(),
    firstname: '',
    surname: '',
    date_of_birth: dayjs(`${dayjs().format('YYYY')}-01-01`).format(
      'YYYY-MM-DD',
    ) as unknown as Date,
    about_you: '',
  };
  const methods = useForm<PersonalDataType>({
    defaultValues: defaultValues,
    resolver: yupResolver(PersonalDataSchema()),
    mode: 'onSubmit',
  });

  const handleFormCancel = useCallback(() => {
    methods.reset();
  }, []);

  const handleFormSubmit = useCallback(
    ({ firstname, surname, date_of_birth, about_you }: PersonalDataType) => {
      const data = {
        id: nanoid(),
        firstname,
        surname,
        date_of_birth: dayjs(date_of_birth).format('YYYY-MM-DD'),
        about_you,
      };
      console.log(data);
      dispatch(addVaultData(data));
      methods.reset();
    },
    [],
  );

  return { methods, handleFormCancel, handleFormSubmit };
};

export default usePersonalDataForm;
