import { css } from 'styles/stitches.config';

export const root = css({
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '$ds-shadow__tab-root'
});

export const list = css({
  flexShrink: 0,
  display: 'flex',
  borderBottom: '1px solid $ds-color__gray-06'
});

export const trigger = css({
  all: 'unset',
  fontFamily: 'inherit',
  color: '$ds-color__gray-11',
  backgroundColor: '$ds-color__background',
  padding: '0 20px',
  height: 45,
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 15,
  lineHeight: 1,
  userSelect: 'none',
  '&:first-child': { borderTopLeftRadius: 6 },
  '&:last-child': { borderTopRightRadius: 6 },
  '&:hover': { color: '$ds-color__primary-11' },
  '&[data-state="active"]': {
    color: '$ds-color__primary-09',
    boxShadow: '$ds-shadow__tab__active'
  },
  '&:focus': {
    position: 'relative',
    boxShadow: '$ds-shadow__tab__active__focused'
  }
});

export const content = css({
  flexGrow: 1,
  padding: 20,
  backgroundColor: '$ds-color__background',
  borderBottomLeftRadius: 6,
  borderBottomRightRadius: 6,
  outline: 'none',
  '&:focus': { boxShadow: '$ds-shadow__tab-content__focused' }
});

export const text = css({
  marginBottom: 20,
  color: '$ds-color__gray-11',
  fontSize: 15,
  lineHeight: 1.5
});

export const fieldset = css({
  all: 'unset',
  marginBottom: 15,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start'
});

export const label = css({
  fontSize: 13,
  lineHeight: 1,
  marginBottom: 10,
  color: '$ds-color__primary-12',
  display: 'block'
});

export const input = css({
  all: 'unset',
  flex: '1 0 auto',
  borderRadius: 4,
  padding: '0 10px',
  fontSize: 15,
  lineHeight: 1,
  color: '$ds-color__primary-11',
  boxShadow: '$ds-shadow__input__normal',
  height: 35,
  '&:focus': { boxShadow: '$ds-shadow__input__focused' }
});

export const flex = css({ display: 'flex' });

export const button = css({
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 15px',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
  height: 35,

  variants: {
    variant: {
      secondary: {
        backgroundColor: '$ds-color__background',
        color: '$ds-color__primary-11',
        boxShadow: '$ds-shadow__button__normal',
        '&:focus': { boxShadow: '$ds-shadow__button__focused' }
      },
      primary: {
        backgroundColor: '$ds-color__primary-03',
        color: '$ds-color__primary-11',
        '&:hover': { backgroundColor: '$ds-color__primary-04' },
        '&:focus': { boxShadow: '$ds-shadow__button__focused' }
      }
    }
  },

  defaultVariants: {
    variant: 'primary'
  }
});
