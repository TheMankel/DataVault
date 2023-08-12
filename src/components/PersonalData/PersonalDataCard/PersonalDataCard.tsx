import { Card, CardContent, Typography } from '@mui/material';
import { VaultData } from 'Types/PersonalDataType';

interface IPersonalDataCardProps {
  personData: VaultData;
}

const PersonalDataCard = ({ personData }: IPersonalDataCardProps) => {
  return (
    <Card
      sx={{
        height: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
      <CardContent>
        <Typography variant='h5' color='primary.main' component='div'>
          {personData.firstname} {personData.surname}
        </Typography>
        <Typography color='text.secondary' gutterBottom>
          {personData.date_of_birth}
        </Typography>
        <Typography align='justify' variant='body2'>
          {personData.about_you}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PersonalDataCard;
