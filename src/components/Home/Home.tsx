import { Paper, Box } from '@mui/material';
import PersonalDataForm from './PersonalDataForm/PersonalDataForm';
import TabPanel from '../Utils/TabsBox/TabPanel/TabPanel';
import TabsBox from '../Utils/TabsBox/TabsBox';
import useTabs from '../Utils/TabsBox/hooks/useTabs';
import PersonalDataTable from './PersonalDataTable/PersonalDataTable';
import { useAppSelector } from '../../store/hooks';
// import { shallowEqual } from 'react-redux';
import { useMemo } from 'react';

// const tabLabels = [{ label: 'Data Form' }, { label: 'Data Table' }];

const Home = () => {
  const { tabId, handleChangeTab } = useTabs();
  // const tabLabels = useAppSelector(
  //   (state) => [
  //     { label: state.language.data.dataForm.label },
  //     { label: state.language.data.dataTable.label },
  //   ],
  //   shallowEqual,
  // );

  const dataFormLabel = useAppSelector(
    (state) => state.language.data.dataForm.label,
  );

  const dataTableLabel = useAppSelector(
    (state) => state.language.data.dataTable.label,
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
        <Box padding={3} mb={3}>
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
