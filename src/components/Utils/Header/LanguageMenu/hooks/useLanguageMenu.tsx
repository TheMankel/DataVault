import { useState, useCallback, MouseEvent } from 'react';
import { useAppDispatch } from 'Store/hooks';
import { handleLanguage } from 'Features/language';

const useLanguageMenu = () => {
  const dispatch = useAppDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
