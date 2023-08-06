import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { nanoid } from 'nanoid';
import { PersonalDataType } from 'Types/PersonalDataType';
import PersonalDataSchema from 'Schemas/PersonalDataSchema';
import { useAppSelector, useAppDispatch } from 'Store/hooks';
import { addVaultData } from 'Features/vaultData';

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
    date_of_birth: new Date(Date.UTC(new Date().getFullYear(), 0, 1))
      .toISOString()
      .substring(0, 10) as unknown as Date,
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
    ({
      id,
      firstname,
      surname,
      date_of_birth,
      about_you,
    }: PersonalDataType) => {
      const data = {
        id,
        firstname,
        surname,
        date_of_birth: date_of_birth.toISOString(),
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
