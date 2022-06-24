import { createStitches } from '@stitches/core';
import { neonTokens, biorcTokens } from 'styles/tokens';

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
    colors: neonTokens.colors,
    shadows: neonTokens.shadows,
    space: neonTokens.spaces,
    radii: neonTokens.radii,
    fontSizes: neonTokens.fontSizes,
    lineHeights: neonTokens.lineHeights,
    transitions: neonTokens.transitions,
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

export const biorcTheme = createTheme({
  colors: biorcTokens.colors,
  shadows: {
    button: '0px 4px 40px $colors$shadow',
    input: '0px 0px 6px $colors$shadow'
  }
});

export const lotusTheme = createTheme({
  colors: neonTokens.colors,
  shadows: {
    button: '0px 4px 40px $colors$shadow',
    input: '0px 0px 6px $colors$shadow'
  }
});
