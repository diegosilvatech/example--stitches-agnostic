import { globalCss } from 'styles/stitches.config';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0
  },
  body: {
    backgroundColor: '$primary',
    color: '$secondary'
  }
});
