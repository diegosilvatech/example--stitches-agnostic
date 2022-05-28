import { css } from 'styles/stitches.config';

export const button = css({
  color: 'white',
  backgroundColor: '$blue9',
  border: '2px solid $blue9',

  padding: '$0 $2',
  borderRadius: '$0',
  height: 120,
  width: '100%',

  fontWeight: 600,

  '&:hover': {
    cursor: 'pointer',
    color: 'white',
    backgroundColor: '$blue10',
    border: '2px solid $blue10'
  }
});
