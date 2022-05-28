import {
  blue,
  blueDark,
  slate,
  slateDark,
  sage,
  sageDark
} from '@radix-ui/colors';

export const neonColors = {
  text: 'black',
  background: 'white',
  ...blue,
  ...slate,
  ...sage
};

export const darkColors = {
  text: 'white',
  background: 'black',
  ...blueDark,
  ...slateDark,
  ...sageDark
};
