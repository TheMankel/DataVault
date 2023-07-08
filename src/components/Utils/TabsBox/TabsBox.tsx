import { Box, Tabs, Tab } from '@mui/material';

interface ITabsBoxProps<T> {
  ariaLabel?: string;
  tabLabels: T[];
  value: number;
  handleChange: (e: React.SyntheticEvent, newValue: number) => void;
}

function TabProps(index: number) {
  return {
    id: `full-width-tabpanel-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const TabsBox = <T extends { label: string }>({
  value,
  handleChange,
  tabLabels,
  ariaLabel = 'Tabs',
}: ITabsBoxProps<T>) => {
  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant='fullWidth'
        aria-label={ariaLabel}>
        {tabLabels.map((tab, id) => (
          <Tab key={tab.label} label={tab.label} {...TabProps(id)} />
        ))}
        {/* <Tab label='Data Form' {...a11yProps(0)} />
        <Tab label='Data Table' {...a11yProps(1)} /> */}
      </Tabs>
    </Box>
  );
};

export default TabsBox;
