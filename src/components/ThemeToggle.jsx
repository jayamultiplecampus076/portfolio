import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [isRotating, setIsRotating] = useState(false);

  const handleThemeClick = () => {
    toggleTheme();       // थिम परिवर्तन गर्ने
    setIsRotating(true);  // एनिमेसन सुरु गर्ने
    
    // ५०० मिलिसेकेन्ड (एनिमेसन अवधि) पछि स्टेट रिसेट गर्ने
    setTimeout(() => {
      setIsRotating(false);
    }, 500);
  };

  return (
    <button
      onClick={handleThemeClick}
      className="
        group
        flex h-10 w-10
        items-center justify-center
        rounded-full
        border border-slate-300 dark:border-slate-700
        bg-white dark:bg-slate-900
        text-lg text-slate-500 dark:text-slate-300
        shadow-sm
        transition-all duration-300
        hover:border-blue-500
        hover:bg-blue-500/10
        hover:text-blue-400
        hover:shadow-lg
        hover:shadow-blue-500/10
      "
    >
      <span 
        className={`
          inline-block
          transition-transform duration-300 
          group-hover:rotate-12
          ${isRotating ? 'animate-spin-once' : ''}
        `}
      >
        {theme === 'dark' ? '☾' : '☀'}
      </span>
    </button>
  );
}

export default ThemeToggle;
