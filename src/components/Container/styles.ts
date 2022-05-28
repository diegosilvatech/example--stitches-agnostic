import { css } from 'styles/stitches.config';

export const container = css({
  maxWidth: '$containerSmall',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: '$2',
  paddingRight: '$2',

  '@media (min-width: 1024px)': {
    maxWidth: '$containerLarge',
    paddingLeft: '$2',
    paddingRight: '$2'
  }
});
