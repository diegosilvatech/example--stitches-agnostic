import {
  blue,
  blueDark,
  blueA,
  blueDarkA,
  slate,
  slateDark,
  sage,
  sageDark,
  whiteA,
  blackA
} from '@radix-ui/colors';

export const neonColors = {
  white: 'white',
  black: 'black',

  primary: blue.blue9,
  primaryHovered: blue.blue10,
  primaryPressed: blue.blue11,

  textHighContrast: slate.slate12,
  textLowContrast: sage.sage11,

  applicationBackground: slate.slate1,

  shadow: blueA.blueA7,

  radioGradientBackgroundPrimary: blackA.blackA7,
  radioGradientBackgroundSecondary: whiteA.whiteA5
};

export const darkColors = {
  white: 'white',
  black: 'black',

  primary: blueDark.blue9,
  primaryHovered: blueDark.blue10,
  primaryPressed: blueDark.blue11,

  textHighContrast: slateDark.slate12,
  textLowContrast: sageDark.sage11,

  applicationBackground: slateDark.slate1,

  shadow: blueDarkA.blueA7,

  radioGradientBackgroundPrimary: blackA.blackA7,
  radioGradientBackgroundSecondary: whiteA.whiteA5
};
