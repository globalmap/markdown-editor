import React from 'react';
import { FileText, Eye, Copy, Check, Moon, Sun, Download } from 'lucide-react';
import { Button } from '../UI/Button/Button';
import type { ThemeColors } from '../../types';

interface HeaderProps {
  theme: ThemeColors;
  isDark: boolean;
  showPreview: boolean;
  copied: boolean;
  onToggleTheme: () => void;
  onTogglePreview: () => void;
  onCopy: () => void;
  onDownload: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  theme,
  isDark,
  showPreview,
  copied,
  onToggleTheme,
  onTogglePreview,
  onCopy,
  onDownload,
}) => {
  return (
    <div className={`${theme.cardBg} ${theme.border} border-b shadow-sm`}>
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <FileText className={`w-8 h-8 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
          <h1 className={`text-2xl font-bold ${theme.text}`}>Markdown Editor</h1>
        </div>
        <div className="flex gap-2">
          <Button onClick={onToggleTheme} darkMode={isDark}>
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            {isDark ? 'Light' : 'Dark'}
          </Button>
          <Button onClick={onTogglePreview} active={showPreview} variant="primary" darkMode={isDark}>
            <Eye className="w-4 h-4" />
            Preview
          </Button>
          <Button onClick={onCopy} darkMode={isDark}>
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? 'Copied!' : 'Copy'}
          </Button>
          <Button onClick={onDownload} variant="success" darkMode={isDark}>
            <Download className="w-4 h-4" />
            Export
          </Button>
        </div>
      </div>
    </div>
  );
};