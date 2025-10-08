export interface ThemeColors {
  bg: string;
  cardBg: string;
  border: string;
  text: string;
  textSecondary: string;
  codeBlock: string;
  codeText: string;
  inlineCode: string;
  inlineCodeText: string;
  link: string;
  quote: string;
}

export type ThemeMode = 'dark' | 'light';

export interface ButtonProps {
  onClick: () => void;
  active?: boolean;
  variant?: 'default' | 'primary' | 'success';
  children: React.ReactNode;
}