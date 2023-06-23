import { useState, useCallback } from 'react';

const useLanguageMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('PL');

  const handleOpenMenu = useCallback(() => {
    setIsMenuOpen(true);
  }, []);

  const handleCloseMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const handleSelectLanguage = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const language = event.currentTarget.id;
      setSelectedLanguage(language);
      handleCloseMenu();
    },
    [handleCloseMenu],
  );

  return {
    isMenuOpen,
    selectedLanguage,
    handleOpenMenu,
    handleCloseMenu,
    handleSelectLanguage,
  };
};

export default useLanguageMenu;
