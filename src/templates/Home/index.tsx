import { useTheme } from 'next-themes';

import { Container, Button } from 'components';

import * as s from './styles';

const HomeTemplate = () => {
  const { theme = 'neon', setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === 'neon' ? 'dark' : 'neon');
  };

  return (
    <Container>
      <main className={s.main()}>
        <h3 className={s.title()}>Example Stitches Agnostic</h3>
        <p className={s.subtitle()}>Made with Stitches and Radix UI Colors</p>
        <Button onClick={toggleTheme} />
      </main>
    </Container>
  );
};

export default HomeTemplate;
