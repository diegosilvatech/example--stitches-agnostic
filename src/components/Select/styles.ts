import { css } from 'styles/stitches.config';

export const root = css({
  display: 'flex'
});

export const trigger = css({
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '$ds-radii__small',
  padding: '0 15px',
  fontSize: '$ds-font-size__small',
  lineHeight: '$ds-line-height__normal',
  height: 45,
  gap: '$ds-space-01',
  backgroundColor: '$ds-color__background-element',
  color: '$ds-color__primary-09',
  cursor: 'pointer',

  boxShadow: '$ds-shadow__select__normal',
  '&:hover': { backgroundColor: '$ds-color__primary-02' },
  '&:focus': { boxShadow: '$ds-shadow__select__focused' }
});

export const content = css({
  overflow: 'hidden',
  backgroundColor: '$ds-color__background-element',
  borderRadius: '$ds-radii__small',
  boxShadow: '$ds-shadow__select-content'
});

export const viewport = css({
  padding: '$ds-space-04'
});

export const item = css({
  all: 'unset',
  fontSize: 13,
  lineHeight: 1,
  color: '$ds-color__primary-09',
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  height: 35,
  padding: '0 35px 0 25px',
  position: 'relative',
  userSelect: 'none',
  cursor: 'pointer',

  '&[data-disabled]': {
    color: '$ds-color__gray-08',
    pointerEvents: 'none'
  },

  '&:focus': {
    backgroundColor: '$ds-color__primary-09',
    color: '$ds-color__primary-01'
  }
});

export const label = css({
  padding: '0 $ds-space-05',
  fontSize: '$ds-font-size__small',
  lineHeight: '$ds-line-height__large',
  color: '$ds-color__gray-11'
});

export const separator = css({
  height: 1,
  backgroundColor: '$ds-color__primary-06',
  margin: '$ds-space-05'
});

export const itemIndicator = css({
  position: 'absolute',
  left: 0,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center'
});

export const scrollButtonStyles = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 25,
  backgroundColor: '$ds-color__background-element',
  color: '$ds-color__primary-11',
  cursor: 'pointer'
});
