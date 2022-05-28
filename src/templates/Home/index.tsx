import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

import { Button } from 'components';

const HomeTemplate = () => {
  const [currentTheme, setCurrentTheme] = useState('light');
  const { theme = 'light', setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    setCurrentTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => setCurrentTheme(theme), [theme]);

  return (
    <div>
      <h1>the current theme is {currentTheme}</h1>
      <Button onClick={toggleTheme} />
    </div>
  );
};

export default HomeTemplate;
