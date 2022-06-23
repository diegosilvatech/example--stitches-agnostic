import { useTheme } from 'next-themes';

import { Container, Button, Radio, Authenticator } from 'components';

import { applicationThemes } from './applicationThemes';

import * as s from './styles';

const HomeTemplate = () => {
  const { theme = 'neon', setTheme } = useTheme();

  return (
    <Container>
      <main className={s.main()}>
        <section className={s.section()}>
          <h3 className={s.title()}>Exemplo Stitches Agnostic</h3>
          <p className={s.subtitle()}>Feito com Stitches e Radix UI Colors</p>

          {/* <div className={s.inputsWrapper()}>
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
          </div> */}
          {/* <div className={s.buttonWrapper()}>
            <Button label={theme} />
          </div> */}
          <div className={s.authenticatorWrapper()}>
            <Authenticator />
          </div>
        </section>
      </main>
    </Container>
  );
};

export default HomeTemplate;
