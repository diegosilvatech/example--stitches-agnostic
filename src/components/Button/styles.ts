import { css } from 'styles/stitches.config';

export const button = css({
  color: 'white',
  backgroundColor: '$blue9',
  border: '2px solid $blue9',

  position: 'absolute',
  top: '50%',
  transform: 'translateY(calc(-50% - 80px))',

  padding: '$0 $2',
  borderRadius: '$2',
  height: 120,
  width: '100%',

  fontWeight: 700,
  fontSize: '$4',

  '&:hover': {
    cursor: 'pointer',
    color: 'white',
    backgroundColor: '$blue10',
    border: '2px solid $blue10'
  }
});
