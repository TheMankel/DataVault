import { Box, Grid } from '@mui/material';
import { useAppSelector } from 'Store/hooks';
import PersonalDataCard from './PersonalDataCard/PersonalDataCard';

const PersonalData = () => {
  const PersonalData = useAppSelector((state) => state.vault);

  return (
    <Box>
      <Grid container spacing={3}>
        {PersonalData.map((personData) => (
          <Grid key={personData.id} item xs={12} sm={6} lg={4}>
            <PersonalDataCard personData={personData} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PersonalData;
