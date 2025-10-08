import { useState } from 'react';

export const useClipboard = (timeout: number = 2000) => {
  const [copied, setCopied] = useState(false);
  
  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), timeout);
  };
  
  return { copied, copyToClipboard };
};