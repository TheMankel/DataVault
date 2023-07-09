import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { nanoid } from 'nanoid';
import { DataType } from '../../../../types/DataType';
import { DataSchema } from '../../../../schemas/DataSchema';

const useDataForm = () => {
  const defaultValues: DataType = {
    id: nanoid(),
    firstname: '',
    surname: '',
    date_of_birth: new Date(Date.UTC(new Date().getFullYear(), 0, 1))
      .toISOString()
      .substring(0, 10) as unknown as Date,
    about_you: '',
  };
  const methods = useForm<DataType>({
    defaultValues: defaultValues,
    resolver: yupResolver(DataSchema),
    mode: 'onSubmit',
  });

  const handleFormCancel = useCallback(() => {
    methods.reset();
  }, []);

  const handleFormSubmit = useCallback(
    ({ id, firstname, surname, date_of_birth, about_you }: DataType) => {
      console.log(id, firstname, surname, date_of_birth, about_you);
    },
    [],
  );

  return { methods, handleFormCancel, handleFormSubmit };
};

export default useDataForm;
