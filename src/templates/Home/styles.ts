import { css } from 'styles/stitches.config';

export const main = css({
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
  // border: '2px solid red'
});

export const section = css({
  // border: '2px solid red',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
});

export const title = css({
  color: '$ds-color__text__high-contrast',
  fontSize: '$ds-font-size__huge',
  textAlign: 'center'
});

export const subtitle = css({
  color: '$ds-color__text__low-contrast',
  fontSize: '$ds-font-size__large',
  fontWeight: 300,
  textAlign: 'center',
  marginTop: '$1',
  marginBottom: '$4'
});

export const inputsWrapper = css({
  marginTop: '$5',
  display: 'flex',
  justifyContent: 'space-between'
});

export const buttonWrapper = css({
  marginTop: '$5',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

export const themeSwitcherWrapper = css({
  marginTop: 40
});

export const authenticatorWrapper = css({
  marginTop: 20
});
