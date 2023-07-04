import { useState, useEffect, useCallback } from 'react';
import useLocalStorage from '../../../../../hooks/useLocalStorage';
import { useAppDispatch } from '../../../../../store/hooks';
import { handleLanguage } from '../../../../../features/language';

const useLanguageMenu = () => {
  const dispatch = useAppDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useLocalStorage<string>({
    key: 'language',
    initialValue: 'PL',
  });

  useEffect(() => {
    dispatch(handleLanguage(selectedLanguage));
  }, []);

  const handleOpenMenu = useCallback(() => {
    setIsMenuOpen(true);
  }, []);

  const handleCloseMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const handleSelectLanguage = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const language = event.currentTarget.id;
      dispatch(handleLanguage(language));
      setSelectedLanguage(language);
      handleCloseMenu();
    },
    [handleCloseMenu],
  );

  return {
    isMenuOpen,
    handleOpenMenu,
    handleCloseMenu,
    handleSelectLanguage,
  };
};

export default useLanguageMenu;
