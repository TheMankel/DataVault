import { useState } from 'react';

const useTabs = () => {
  const [tabId, setTabId] = useState(0);

  const handleChangeTab = (event: React.SyntheticEvent, newTabId: number) => {
    setTabId(newTabId);
  };

  return { tabId, handleChangeTab };
};

export default useTabs;
