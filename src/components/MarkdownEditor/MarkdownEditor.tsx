import React, { useState } from 'react';
import { Header } from '../Header/Header';
import { EditorPanel } from '../EditorPanel/EditorPanel';
import { PreviewPanel } from '../PreviewPanel/PreviewPanel';
import { useTheme } from '../../hooks/useTheme';
import { useClipboard } from '../../hooks/useClipboard';
import { parseMarkdown } from '../../utils/markdownParser';
import { downloadMarkdown } from '../../utils/fileDownload';
import { DEFAULT_MARKDOWN } from '../../utils/constants';

export const MarkdownEditor: React.FC = () => {
  const [markdown, setMarkdown] = useState(DEFAULT_MARKDOWN);
  const [showPreview, setShowPreview] = useState(true);
  
  const { theme, isDark, toggleTheme } = useTheme('dark');
  const { copied, copyToClipboard } = useClipboard();

  const handleCopy = () => copyToClipboard(markdown);
  const handleDownload = () => downloadMarkdown(markdown);
  const togglePreview = () => setShowPreview(!showPreview);

  const parsedHtml = parseMarkdown(markdown, theme);

  return (
    <div className={`flex flex-col h-screen ${theme.bg}`}>
      <Header
        theme={theme}
        isDark={isDark}
        showPreview={showPreview}
        copied={copied}
        onToggleTheme={toggleTheme}
        onTogglePreview={togglePreview}
        onCopy={handleCopy}
        onDownload={handleDownload}
      />

      <div className="flex-1 flex overflow-hidden">
        <EditorPanel
          theme={theme}
          isDark={isDark}
          value={markdown}
          onChange={setMarkdown}
          fullWidth={!showPreview}
        />
        {showPreview && (
          <PreviewPanel
            theme={theme}
            isDark={isDark}
            html={parsedHtml}
          />
        )}
      </div>
    </div>
  );
};