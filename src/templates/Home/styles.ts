import { css } from 'styles/stitches.config';

export const main = css({
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid red'
});

export const section = css({
  // border: '2px solid blue',
  width: 500
});

export const title = css({
  color: '$textHighContrast',
  fontSize: '$5',
  textAlign: 'center'
});

export const subtitle = css({
  color: '$textLowContrast',
  fontSize: '$2',
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
  // border: '2px solid green',
  marginBottom: 20
});

export const authenticatorWrapper = css({});
