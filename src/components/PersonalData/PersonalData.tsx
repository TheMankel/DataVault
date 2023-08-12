import { NavLink } from 'react-router-dom';
import { Box, Grid, Typography, Button } from '@mui/material';
import { useAppSelector } from 'Store/hooks';
import PersonalDataCard from './PersonalDataCard/PersonalDataCard';
import NoData from 'Assets/NoData.svg';

const PersonalData = () => {
  const personalData = useAppSelector((state) => state.vault);
  const home = useAppSelector((state) => state.language.urls.main);
  const messages = useAppSelector(
    (state) => state.language.errors.dataPage.messages,
  );

  if (!personalData.length)
    return (
      <Box
        display='flex'
        justifyContent='space-around'
        alignItems='center'
        sx={{
          flexDirection: {
            xs: 'column',
            md: 'row',
          },
          px: {
            xs: 2,
            md: 8,
          },
        }}>
        <img
          src={NoData}
          alt='No Data Illustration'
          style={{
            width: '320px',
          }}
        />
        <Box display='flex' flexDirection='column'>
          <Typography
            component='div'
            variant='h5'
            color='inherit'
            align='center'>
            {messages.primary}
          </Typography>
          <Typography
            component='div'
            color='text.secondary'
            align='center'
            gutterBottom>
            {messages.secondary}
          </Typography>
          <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            pt={1}>
            <Button
              component={NavLink}
              variant='contained'
              to='/'
              sx={{
                color: 'background.default',
              }}>
              {home}
            </Button>
          </Box>
        </Box>
      </Box>
    );

  return (
    <Box>
      <Grid container spacing={3}>
        {personalData.map((personData) => (
          <Grid key={personData.id} item xs={12} sm={6} lg={4}>
            <PersonalDataCard personData={personData} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PersonalData;
