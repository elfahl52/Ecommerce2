import React, { useEffect, useState } from 'react';
import LightButton from '../../assets/website/light.png';
import DarkButton from '../../assets/website/dark.png';

function DarkMode() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className='relative w-8 h-8 flex items-center justify-center'>
      {/* Light Icon */}
      <img
        src={LightButton}
        alt="Light Mode"
        className={`w-8 cursor-pointer absolute transition-all duration-300 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] ${theme === 'dark' ? 'opacity-0' : 'opacity-100'}`}
        onClick={toggleTheme}
      />
      {/* Dark Icon */}
      <img
        src={DarkButton}
        alt="Dark Mode"
        className={`w-8 cursor-pointer absolute transition-all duration-300 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}
        onClick={toggleTheme}
      />
    </div>
  );
}

export default DarkMode;