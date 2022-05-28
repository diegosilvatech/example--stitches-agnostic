import { useTheme } from 'next-themes';

import { Container, Button } from 'components';

const HomeTemplate = () => {
  const { theme = 'light', setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Container>
      <h2>Example Stitches Agnostic</h2>
      <Button onClick={toggleTheme} />
    </Container>
  );
};

export default HomeTemplate;
