import { FormProvider } from 'react-hook-form';
import { Box, Button, Grid, TextField } from '@mui/material';
import useDataForm from './hooks/useDataForm';
import InputController from '../../Utils/Input/InputController';

const Form = () => {
  const { methods, handleFormCancel, handleFormSubmit } = useDataForm();

  return (
    <FormProvider {...methods}>
      <Box
        component='form'
        onSubmit={methods.handleSubmit(handleFormSubmit)}
        noValidate>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <InputController name='firstname' label='Firstname' />
            {/* <TextField
              required
              fullWidth
              id='firstname'
              label='Firstname'
              aria-label='Firstname'
              type='text'
            /> */}
          </Grid>
          <Grid item xs={6}>
            <InputController name='surname' label='Surname' />
            {/* <TextField
              required
              fullWidth
              id='surname'
              label='Surname'
              aria-label='Surname'
              type='text'
            /> */}
          </Grid>
          <Grid item xs={12}>
            <InputController
              name='date_of_birth'
              label='Date of Birth'
              type='date'
              InputLabelProps={{ shrink: true }}
            />
            {/* <TextField
              required
              fullWidth
              id='date_of_birth'
              label='Date of Birth'
              aria-label='Date of Birth'
              type='date'
              InputLabelProps={{ shrink: true }}
            /> */}
          </Grid>
          <Grid item xs={12}>
            <InputController
              name='about_you'
              label='About You'
              multiline
              rows={4}
            />
            {/* <TextField
              required
              fullWidth
              multiline
              rows={4}
              id='about_you'
              label='About You'
              aria-label='About You'
              type='text'
            /> */}
          </Grid>
          <Grid item xs={6}>
            <Button fullWidth variant='outlined' onClick={handleFormCancel}>
              Cancel
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button fullWidth variant='contained' type='submit'>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </FormProvider>
  );
};

export default Form;
