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
      primary: 'black',
      secondary: 'white'
    }
  }
});

export const dark = createTheme({
  colors: {
    primary: 'white',
    secondary: 'black'
  }
});
