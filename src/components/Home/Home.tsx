import { useMemo } from 'react';
import { Paper, Box } from '@mui/material';
import TabPanel from 'Components/Utils/TabsBox/TabPanel/TabPanel';
import TabsBox from 'Components/Utils/TabsBox/TabsBox';
import useTabs from 'Components/Utils/TabsBox/hooks/useTabs';
import PersonalDataForm from './PersonalDataForm/PersonalDataForm';
import PersonalDataTable from './PersonalDataTable/PersonalDataTable';
import { useAppSelector } from 'Store/hooks';

const Home = () => {
  const { tabId, handleChangeTab } = useTabs();

  const dataFormLabel = useAppSelector(
    (state) => state.language.dataForm.label,
  );

  const dataTableLabel = useAppSelector(
    (state) => state.language.dataTable.label,
  );

  const tabLabels = useMemo(
    () => [{ label: dataFormLabel }, { label: dataTableLabel }],
    [dataFormLabel, dataTableLabel],
  );

  return (
    <Paper elevation={3}>
      <Box>
        <TabsBox
          value={tabId}
          handleChange={handleChangeTab}
          tabLabels={tabLabels}
          ariaLabel='Data Tabs'
        />
        <Box mb={3} sx={{ padding: { xs: 1, sm: 2, md: 3 } }}>
          <TabPanel value={tabId} index={0}>
            <PersonalDataForm />
          </TabPanel>
          <TabPanel value={tabId} index={1}>
            <PersonalDataTable />
          </TabPanel>
        </Box>
      </Box>
    </Paper>
  );
};

export default Home;
