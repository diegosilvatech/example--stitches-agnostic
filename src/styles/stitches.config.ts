import { createStitches } from '@stitches/core';
import { neonColors, darkColors } from 'styles/colors';

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
      ...neonColors
    },
    space: {
      0: '4px',
      1: '8px',
      2: '16px',
      3: '24px',
      4: '32px',
      5: '40px',
      10: '80px'
    },
    radii: {
      0: '4px',
      1: '8px',
      2: '16px',
      rounded: '999px'
    },
    fontSizes: {
      1: '16px',
      2: '18px',
      3: '24px',
      4: '32px',
      5: '40px',
      6: '48px'
    },
    transitions: {
      default: '.3s ease',
      fast: '.1s ease'
    },
    zIndices: {
      base: 10,
      menu: 20,
      overlay: 30,
      modal: 40,
      alwaysOnTop: 50
    },
    sizes: {
      containerSmall: '358px',
      containerLarge: '1040px'
    }
  }
});

export const darkTheme = createTheme({
  colors: {
    ...darkColors
  }
});
