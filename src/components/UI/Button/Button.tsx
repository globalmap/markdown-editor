import React from 'react';
import type { ButtonProps } from '../../../types';

export const Button: React.FC<ButtonProps & { darkMode: boolean }> = ({ 
  onClick, 
  active = false, 
  variant = 'default', 
  darkMode,
  children 
}) => {
  const getVariantClasses = () => {
    const baseClasses = 'flex items-center gap-2 px-4 py-2 rounded-lg transition-all';
    
    if (variant === 'success') {
      return `${baseClasses} bg-green-600 text-white hover:bg-green-700 shadow-md`;
    }
    
    if (variant === 'primary' && active) {
      return `${baseClasses} bg-blue-600 text-white shadow-md`;
    }
    
    const defaultClasses = darkMode 
      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
      : 'bg-gray-200 text-gray-700 hover:bg-gray-300';
    
    return `${baseClasses} ${defaultClasses}`;
  };

  return (
    <button onClick={onClick} className={getVariantClasses()}>
      {children}
    </button>
  );
};