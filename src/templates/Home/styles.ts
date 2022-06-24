import { css } from 'styles/stitches.config';

export const main = css({
  height: '100vh',
  display: 'flex',
  justifyContent: 'center'
});

export const section = css({
  padding: '100px 0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
});

export const title = css({
  color: '$ds-color__text__high-contrast',
  fontSize: '$ds-font-size__huge',
  textAlign: 'center',
  fontFamily: '$ds-font-family__heading'
});

export const subtitle = css({
  color: '$ds-color__text__low-contrast',
  fontSize: '$ds-font-size__large',
  fontWeight: 300,
  textAlign: 'center',
  marginTop: '$1',
  marginBottom: '$4',
  fontFamily: '$ds-font-family__text'
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
  marginTop: 40,
  borderRadius: '$ds-radii__tab',
  boxShadow: '$ds-shadow__select__normal',
  background: 'linear-gradient($ds-color__primary-gradient)',
  padding: '$ds-space-02 $ds-space-04',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: 320
});

export const themeSwitcherLabel = css({
  color: '$ds-color__background-element',
  fontFamily: '$ds-font-family__heading'
});

export const authenticatorWrapper = css({
  marginTop: 20
});
