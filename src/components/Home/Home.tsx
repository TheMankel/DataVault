import { useState } from 'react';
import { Paper, Box, Tabs, Tab } from '@mui/material';
import DataForm from './DataForm/DataForm';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`Tab-${index}`}
      {...other}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tabpanel-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const Home = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Paper elevation={3}>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant='fullWidth'
            aria-label='Data Tabs'>
            <Tab label='Data Form' {...a11yProps(0)} />
            <Tab label='Data Table' {...a11yProps(1)} />
          </Tabs>
        </Box>
        <Box padding={3}>
          <TabPanel value={value} index={0}>
            <DataForm />
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
        </Box>
      </Box>
    </Paper>
  );
};

export default Home;
