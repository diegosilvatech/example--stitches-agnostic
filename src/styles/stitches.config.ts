import { createStitches } from '@stitches/core';
import { neonTokens, biorcTokens, meiFacilTokens } from 'styles/tokens';

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
    fonts: neonTokens.fonts,
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
  shadows: biorcTokens.shadows,
  space: biorcTokens.spaces,
  radii: biorcTokens.radii,
  fontSizes: biorcTokens.fontSizes,
  lineHeights: biorcTokens.lineHeights,
  transitions: biorcTokens.transitions,
  fonts: biorcTokens.fonts
});

export const meiFacilTheme = createTheme({
  colors: meiFacilTokens.colors,
  shadows: meiFacilTokens.shadows,
  space: meiFacilTokens.spaces,
  radii: meiFacilTokens.radii,
  fontSizes: meiFacilTokens.fontSizes,
  lineHeights: meiFacilTokens.lineHeights,
  transitions: meiFacilTokens.transitions,
  fonts: meiFacilTokens.fonts
});
