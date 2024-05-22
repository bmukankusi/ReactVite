// src/components/ToggleButton.tsx
import React from 'react';

const ToggleButton: React.FC = () => {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="ml-4 px-4 py-2 bg-blue-500 text-white rounded"
    >
      Toggle Dark Mode
    </button>
  );
};

export default ToggleButton;
