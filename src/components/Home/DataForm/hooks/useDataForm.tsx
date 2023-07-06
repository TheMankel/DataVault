import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { nanoid } from 'nanoid';
import { DataType } from '../../../../types/DataType';

const useDataForm = () => {
  const defaultValues = {
    id: nanoid(),
    firstname: '',
    surname: '',
    date_of_birth: '',
    about_you: '',
  };
  const methods = useForm<DataType>({
    defaultValues: defaultValues,
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
