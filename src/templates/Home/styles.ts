import { css } from 'styles/stitches.config';

export const main = css({
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

export const section = css({});

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
  marginBottom: '$10'
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

export const authenticatorWrapper = css({
  // marginTop: '$5',
  // display: 'flex',
  // alignItems: 'center',
  // justifyContent: 'center'
});
