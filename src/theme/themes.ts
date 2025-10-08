import type { ThemeColors, ThemeMode } from "../types";

export const THEMES: Record<ThemeMode, ThemeColors> = {
  dark: {
    bg: 'bg-gradient-to-br from-gray-900 to-gray-800',
    cardBg: 'bg-gray-800',
    border: 'border-gray-700',
    text: 'text-gray-100',
    textSecondary: 'text-gray-400',
    codeBlock: 'bg-gray-700 text-green-400',
    codeText: 'text-gray-300',
    inlineCode: 'bg-gray-700 text-red-400',
    inlineCodeText: 'text-red-400',
    link: 'text-blue-400 hover:text-blue-300',
    quote: 'border-gray-600 text-gray-400',
  },
  light: {
    bg: 'bg-gradient-to-br from-slate-50 to-slate-100',
    cardBg: 'bg-white',
    border: 'border-gray-200',
    text: 'text-gray-900',
    textSecondary: 'text-gray-600',
    codeBlock: 'bg-gray-800 text-green-400',
    codeText: 'text-gray-900',
    inlineCode: 'bg-gray-100 text-red-600',
    inlineCodeText: 'text-red-600',
    link: 'text-blue-600',
    quote: 'border-gray-400 text-gray-600',
  },
};