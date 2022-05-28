import { useTheme } from 'next-themes';

import { Container, Button, Radio } from 'components';

import { applicationThemes } from './themes';

import * as s from './styles';

const HomeTemplate = () => {
  const { theme = 'neon', setTheme } = useTheme();
  const toggleTheme = () => {
    if (theme === 'neon') {
      setTheme('neon');
    } else if (theme === 'biorc') {
      setTheme('biorc');
    } else {
      setTheme('lotus');
    }
  };

  return (
    <Container>
      <main className={s.main()}>
        <h3 className={s.title()}>Exemplo Stitches Agnostic</h3>
        <p className={s.subtitle()}>Feito com Stitches e Radix UI Colors</p>

        <div className={s.inputsWrapper()}>
          {applicationThemes.map((theme) => (
            <Radio
              key={theme.value}
              name="theme"
              id={theme.value}
              value={theme.value}
              label={theme.label}
              onCheck={() => setTheme(theme.value)}
              defaultChecked={theme.checked}
            />
          ))}
        </div>
        <div className={s.buttonWrapper()}>
          <Button onClick={toggleTheme} />
        </div>
      </main>
    </Container>
  );
};

export default HomeTemplate;
