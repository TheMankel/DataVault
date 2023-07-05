import { Box, Button, Grid, TextField } from '@mui/material';

const Form = () => {
  return (
    <Box component='form' noValidate>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            required
            fullWidth
            id='firstname'
            label='Firstname'
            aria-label='Firstname'
            type='text'
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            fullWidth
            id='surname'
            label='Surname'
            aria-label='Surname'
            type='text'
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id='date_of_birth'
            label='Date of Birth'
            aria-label='Date of Birth'
            type='date'
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            multiline
            rows={4}
            id='about_you'
            label='About You'
            aria-label='About You'
            type='text'
          />
        </Grid>
        <Grid item xs={6}>
          <Button fullWidth variant='outlined'>
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
  );
};

export default Form;
