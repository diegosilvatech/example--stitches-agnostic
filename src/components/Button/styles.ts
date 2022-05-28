import { css } from 'styles/stitches.config';

export const button = css({
  marginTop: '$5',
  color: '$white',
  backgroundColor: '$primary',
  border: '2px solid $primary',

  padding: '$0 $2',
  borderRadius: '$2',
  height: 120,
  width: '100%',

  fontWeight: 700,
  fontSize: '$4',

  boxShadow: '$button',

  '&:hover': {
    cursor: 'pointer',
    color: 'white',
    backgroundColor: '$primaryHovered',
    border: '2px solid $primaryHovered'
  }
});
