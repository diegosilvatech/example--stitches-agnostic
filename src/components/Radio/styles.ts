import { css } from 'styles/stitches.config';

export const inputWrapper = css({
  marginTop: '$10',
  display: 'flex',
  alignItems: 'center'
});

export const label = css({
  color: '$textLowContrast',
  fontWeight: 300,
  marginLeft: '$1'
});

export const input = css({
  appearance: 'none',
  width: 24,
  height: 24,
  border: '2px solid $primary',
  borderRadius: '$rounded',
  cursor: 'pointer',
  outline: 'none',
  background:
    'linear-gradient($radioGradientBackgroundPrimary, $radioGradientBackgroundSecondary)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&:focus': {
    boxShadow: '$input'
  },

  '&:hover': {
    boxShadow: '$input'
  },

  '&:before': {
    content: '',
    width: 16,
    height: 16,
    background: 'linear-gradient($primary, $primaryPressed)',
    position: 'absolute',
    opacity: 0,
    borderRadius: '$rounded'
  },

  '&:checked': {
    '&:before': {
      opacity: 1
    }
  }
});
