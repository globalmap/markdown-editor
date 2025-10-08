import React from 'react';
import type { ThemeColors } from '../../types';

interface EditorPanelProps {
  theme: ThemeColors;
  isDark: boolean;
  value: string;
  onChange: (value: string) => void;
  fullWidth?: boolean;
}

export const EditorPanel: React.FC<EditorPanelProps> = ({
  theme,
  isDark,
  value,
  onChange,
  fullWidth = false,
}) => {
  return (
    <div className={`${fullWidth ? 'w-full' : 'w-1/2'} flex flex-col ${isDark ? 'bg-gray-900' : 'bg-white'} ${theme.border} border-r`}>
      <div className={`px-6 py-3 ${theme.cardBg} ${theme.border} border-b`}>
        <h2 className={`text-sm font-semibold ${theme.textSecondary} uppercase tracking-wide`}>Editor</h2>
      </div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`flex-1 p-6 font-mono text-sm resize-none focus:outline-none ${
          isDark 
            ? 'bg-gray-900 text-gray-100 placeholder-gray-600' 
            : 'bg-white text-gray-900 placeholder-gray-400'
        }`}
        placeholder="Start typing your markdown here..."
      />
    </div>
  );
};