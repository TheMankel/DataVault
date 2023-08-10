import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { nanoid } from 'nanoid';
import { PersonalDataType } from 'Types/PersonalDataType';
import PersonalDataSchema from 'Schemas/PersonalDataSchema';
import { useAppSelector, useAppDispatch } from 'Store/hooks';
import { addVaultData, editVaultData } from 'Features/vaultData';
import dayjs from 'dayjs';

const usePersonalDataForm = (
  edit: boolean = false,
  dataToEdit?: PersonalDataType,
  cancelEdit?: () => void,
) => {
  const code = useAppSelector((state) => state.language.code);
  const dispatch = useAppDispatch();

  useEffect(() => {
    methods.clearErrors();
  }, [code]);

  const defaultValues: PersonalDataType =
    !edit || !dataToEdit
      ? {
          id: nanoid(),
          firstname: '',
          surname: '',
          date_of_birth: dayjs(`${dayjs().format('YYYY')}-01-01`).format(
            'YYYY-MM-DD',
          ) as unknown as Date,
          about_you: '',
        }
      : dataToEdit;

  const methods = useForm<PersonalDataType>({
    defaultValues: defaultValues,
    resolver: yupResolver(PersonalDataSchema()),
    mode: 'onSubmit',
  });

  const handleFormCancel = useCallback(() => {
    if (edit && cancelEdit) cancelEdit();
    methods.reset();
  }, []);

  const handleFormSubmit = useCallback(
    ({ firstname, surname, date_of_birth, about_you }: PersonalDataType) => {
      const data = {
        id: !edit || !dataToEdit ? nanoid() : dataToEdit.id,
        firstname,
        surname,
        date_of_birth: dayjs(date_of_birth).format('YYYY-MM-DD'),
        about_you,
      };

      if (!edit) dispatch(addVaultData(data));
      if (edit) {
        dispatch(editVaultData(data));
        if (cancelEdit) cancelEdit();
      }

      methods.reset();
    },
    [],
  );

  return { methods, handleFormCancel, handleFormSubmit };
};

export default usePersonalDataForm;
