import { globalCss } from 'styles/stitches.config';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0
  },
  body: {
    backgroundColor: '$ds-color__background-app',
    color: '$ds-color__text__high-contrast',
    fontFamily: "'Poppins', sans-serif"
  },
  button: {
    fontFamily: "'Poppins', sans-serif"
  }
});
