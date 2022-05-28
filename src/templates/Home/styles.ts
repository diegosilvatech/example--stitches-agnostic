import { css } from 'styles/stitches.config';

export const main = css({
  height: '100vh',
  position: 'relative'
});

export const inputsWrapper = css({
  marginTop: '$10',
  display: 'flex',
  justifyContent: 'space-between'
});

export const title = css({
  color: '$textHighContrast',
  fontSize: '$5',
  textAlign: 'center',
  marginTop: '$10'
});

export const subtitle = css({
  color: '$textLowContrast',
  fontSize: '$2',
  fontWeight: 300,
  textAlign: 'center',
  marginTop: '$2'
});
