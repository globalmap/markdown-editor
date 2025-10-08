import { useState } from 'react';
import { THEMES } from '../theme/themes';
import type { ThemeMode } from '../types';

export const useTheme = (initialMode: ThemeMode = 'dark') => {
  const [mode, setMode] = useState<ThemeMode>(initialMode);
  
  const toggleTheme = () => {
    setMode(prev => prev === 'dark' ? 'light' : 'dark');
  };
  
  return {
    mode,
    theme: THEMES[mode],
    isDark: mode === 'dark',
    toggleTheme,
  };
};