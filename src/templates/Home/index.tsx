import { Container, Authenticator, Select } from 'components';

import { applicationThemes } from './applicationThemes';

import * as s from './styles';

const HomeTemplate = () => {
  return (
    <Container>
      <main className={s.main()}>
        <section className={s.section()}>
          <h3 className={s.title()}>Design Tokens Example</h3>
          <p className={s.subtitle()}>
            Feito com Stitches, Radix & Radix UI Colors
          </p>

          <div className={s.themeSwitcherWrapper()}>
            <span className={s.themeSwitcherLabel()}>Empresa:</span>
            <Select themeOptions={applicationThemes} />
          </div>
          <div className={s.authenticatorWrapper()}>
            <Authenticator />
          </div>
        </section>
      </main>
    </Container>
  );
};

export default HomeTemplate;
