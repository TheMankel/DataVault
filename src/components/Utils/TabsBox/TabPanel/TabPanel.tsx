import { ReactNode } from 'react';
import { Box } from '@mui/material';

interface ITabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

const TabPanel = ({ children, value, index, ...rest }: ITabPanelProps) => {
  return (
    <Box
      role='tabpanel'
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`Tab-${index}`}
      {...rest}>
      {value === index && <>{children}</>}
    </Box>
  );
};

export default TabPanel;
