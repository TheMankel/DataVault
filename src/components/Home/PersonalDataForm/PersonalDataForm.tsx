import { FormProvider } from 'react-hook-form';
import { Box, Button, Grid } from '@mui/material';
import usePersonalDataForm from './hooks/usePersonalDataForm';
import InputController from 'Components/Utils/InputController/InputController';
import { useAppSelector } from 'Store/hooks';
import { shallowEqual } from 'react-redux';

const PersonalDataForm = () => {
  const { methods, handleFormCancel, handleFormSubmit } = usePersonalDataForm();
  const { dataForm, actionButtons } = useAppSelector(
    (state) => ({
      dataForm: state.language.dataForm,
      actionButtons: state.language.actionButtons,
    }),
    shallowEqual,
  );

  return (
    <FormProvider {...methods}>
      <Box
        id='data-form'
        component='form'
        onSubmit={methods.handleSubmit(handleFormSubmit)}
        noValidate>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <InputController name='firstname' label={dataForm.firstname} />
          </Grid>
          <Grid item xs={6}>
            <InputController name='surname' label={dataForm.surname} />
          </Grid>
          <Grid item xs={12}>
            <InputController
              name='date_of_birth'
              label={dataForm.date_of_birth}
              type='date'
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12}>
            <InputController
              name='about_you'
              label={dataForm.about_you}
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={6}>
            <Button fullWidth variant='outlined' onClick={handleFormCancel}>
              {actionButtons.cancel}
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button fullWidth variant='contained' type='submit'>
              {actionButtons.submit}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </FormProvider>
  );
};

export default PersonalDataForm;
