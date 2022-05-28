import { createStitches } from '@stitches/core';

export const {
  css,
  globalCss,
  keyframes,
  getCssText,
  createTheme,
  theme,
  config
} = createStitches({
  theme: {
    colors: {
      text: 'black',
      background: 'white'
    }
  }
});

export const darkTheme = createTheme({
  colors: {
    text: 'white',
    background: 'black'
  }
});
