import React from 'react';
import type { ThemeColors } from '../../types';

interface PreviewPanelProps {
  theme: ThemeColors;
  isDark: boolean;
  html: string;
}

export const PreviewPanel: React.FC<PreviewPanelProps> = ({ theme, isDark, html }) => {
  return (
    <div className={`w-1/2 flex flex-col ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className={`px-6 py-3 ${theme.cardBg} ${theme.border} border-b`}>
        <h2 className={`text-sm font-semibold ${theme.textSecondary} uppercase tracking-wide`}>Preview</h2>
      </div>
      <div 
        className={`flex-1 p-6 overflow-y-auto prose prose-slate max-w-none ${theme.codeText}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
};