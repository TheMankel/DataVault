import { Paper, Box } from '@mui/material';
import PersonalDataForm from './PersonalDataForm/PersonalDataForm';
import TabPanel from '../Utils/TabsBox/TabPanel/TabPanel';
import TabsBox from '../Utils/TabsBox/TabsBox';
import useTabs from '../Utils/TabsBox/hooks/useTabs';

const tabLabels = [{ label: 'Data Form' }, { label: 'Data Table' }];

const Home = () => {
  const { tabId, handleChangeTab } = useTabs();

  return (
    <Paper elevation={3}>
      <Box sx={{ width: '100%' }}>
        <TabsBox
          value={tabId}
          handleChange={handleChangeTab}
          tabLabels={tabLabels}
          ariaLabel='Data Tabs'
        />
        <Box padding={3}>
          <TabPanel value={tabId} index={0}>
            <PersonalDataForm />
          </TabPanel>
          <TabPanel value={tabId} index={1}>
            Item Two
          </TabPanel>
        </Box>
      </Box>
    </Paper>
  );
};

export default Home;
