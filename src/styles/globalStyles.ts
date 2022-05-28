import { globalCss } from 'styles/stitches.config';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0
  },
  body: {
    backgroundColor: '$background',
    color: '$text',
    fontFamily: "'Poppins', sans-serif"
  },
  button: {
    fontFamily: "'Poppins', sans-serif"
  }
});
