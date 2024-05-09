import { useContext, useEffect } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { useLocalStorage } from '../useLocalStorage';

export function useTheme() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [themeValue, setThemeValue] = useLocalStorage('theme');

  useEffect(() => {
    setTheme(!themeValue ? 'dark' : themeValue);
  }, [setTheme, themeValue]);

  const toggleTheme = () => {
    setThemeValue(t => (t === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
}
