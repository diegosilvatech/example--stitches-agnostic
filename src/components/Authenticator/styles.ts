import { css } from 'styles/stitches.config';

export const root = css({
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '$ds-shadow__tab-root',
  maxWidth: 360
});

export const list = css({
  display: 'flex',
  flexShrink: 0,
  borderBottom: '1px solid $ds-color__gray-06'
});

export const trigger = css({
  all: 'unset',
  color: '$ds-color__gray-11',
  backgroundColor: '$ds-color__background-element',
  fontSize: '$ds-font-size__medium',
  fontFamily: 'inherit',
  lineHeight: '$ds-line-height__normal',
  display: 'flex',
  flex: 1,
  height: 45,
  padding: '0 $ds-space-04',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',

  userSelect: 'none',

  '&:first-child': { borderTopLeftRadius: '$ds-radii__small' },
  '&:last-child': { borderTopRightRadius: '$ds-radii__small' },
  '&:hover': { color: '$ds-color__primary-11' },
  '&[data-state="active"]': {
    color: '$ds-color__primary',
    boxShadow: '$ds-shadow__tab__active'
  },
  '&:focus': {
    position: 'relative',
    boxShadow: '$ds-shadow__tab__active__focused'
  }
});

export const content = css({
  backgroundColor: '$ds-color__background-element',
  flexGrow: 1,
  padding: '$ds-space-04',
  borderBottomLeftRadius: '$ds-radii__small',
  borderBottomRightRadius: '$ds-radii__small',
  outline: 'none',
  '&:focus': { boxShadow: '$ds-shadow__tab-content__focused' }
});

export const text = css({
  marginBottom: '$ds-space-04',
  color: '$ds-color__gray-11',
  fontSize: '$ds-font-size__medium',
  lineHeight: '$ds-line-height__large'
});

export const fieldset = css({
  all: 'unset',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  width: '100%',
  marginBottom: '$ds-space-03'
});

export const label = css({
  color: '$ds-color__primary-12',
  fontSize: '$ds-font-size__small',
  lineHeight: '$ds-line-height__normal',
  marginBottom: '$ds-space-02',
  display: 'block'
});

export const input = css({
  all: 'unset',
  flex: '1 0 auto',
  height: 35,
  padding: '0 10px',
  color: '$ds-color__primary-11',
  borderRadius: '$ds-radii__small',
  fontSize: '$ds-font-size__medium',
  lineHeight: '$ds-line-height__normal',
  boxShadow: '$ds-shadow__input__normal',
  '&:focus': { boxShadow: '$ds-shadow__input__focused' }
});

export const flex = css({ display: 'flex' });

export const button = css({
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 35,
  padding: '0 $ds-space-04',
  borderRadius: '$ds-radii__small',
  fontSize: '$ds-font-size__medium',
  lineHeight: '$ds-line-height__normal',
  fontWeight: 500,
  cursor: 'pointer',

  variants: {
    variant: {
      secondary: {
        backgroundColor: '$ds-color__background-element',
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
