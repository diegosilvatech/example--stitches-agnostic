import { css } from 'styles/stitches.config';

export const button = css({
  color: '$white',
  backgroundColor: '$primary',
  border: '2px solid $primary',

  borderRadius: '$2',
  padding: '$3 $10',

  fontWeight: 400,
  fontSize: '$3',

  boxShadow: '$button',

  '&:hover': {
    cursor: 'pointer',
    color: 'white',
    backgroundColor: '$primaryHovered',
    border: '2px solid $primaryHovered'
  }
});
