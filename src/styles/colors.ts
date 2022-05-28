import {
  blue,
  blueDark,
  blueA,
  blueDarkA,
  slate,
  slateDark,
  sage,
  sageDark
} from '@radix-ui/colors';

export const neonColors = {
  text: 'black',
  background: slate.slate1,
  buttonShadow: blueA.blueA7,
  ...blue,
  ...slate,
  ...sage
};

export const darkColors = {
  text: 'white',
  background: slateDark.slate1,
  buttonShadow: blueDarkA.blueA7,
  ...blueDark,
  ...slateDark,
  ...sageDark
};
