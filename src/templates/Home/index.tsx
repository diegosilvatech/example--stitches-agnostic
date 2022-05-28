import { useTheme } from 'next-themes';

import { Container, Button, Radio } from 'components';

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

        <div>
          <Radio label="neon" name="neon" id="neon" value="neon" />
        </div>
        <Button onClick={toggleTheme} />
      </main>
    </Container>
  );
};

export default HomeTemplate;
