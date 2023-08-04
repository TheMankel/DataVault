import { useState, useEffect, useCallback, MouseEvent } from 'react';
import useLocalStorage from 'Hooks/useLocalStorage';
import { useAppDispatch } from 'Store/hooks';
import { handleLanguage } from 'Features/language';

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
    (e: MouseEvent<HTMLUListElement>) => {
      const listItem = (e.target as HTMLElement).closest('li');
      const language = listItem?.id as string;

      if (!language) return;

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
