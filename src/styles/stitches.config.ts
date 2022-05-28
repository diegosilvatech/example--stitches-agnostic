import { createStitches } from '@stitches/core';
import { lightColors, darkColors } from 'styles/colors';

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
      ...lightColors
    },
    space: {
      0: '4px',
      1: '8px',
      2: '16px',
      3: '24px',
      4: '32px',
      5: '40px'
    },
    radii: {
      0: '4px',
      1: '8px',
      rounded: '999px'
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
