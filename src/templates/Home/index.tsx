import { useTheme } from 'next-themes';

import { Container, Button, Radio } from 'components';

import { applicationThemes } from './themes';

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

        <div className={s.inputsWrapper()}>
          {applicationThemes.map((theme) => (
            <Radio
              key={theme.value}
              name="theme"
              id={theme.value}
              value={theme.value}
              label={theme.label}
            />
          ))}
        </div>
        <Button onClick={toggleTheme} />
      </main>
    </Container>
  );
};

export default HomeTemplate;
