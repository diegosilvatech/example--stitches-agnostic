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
  background: slate.slate1,
  ...blue,
  ...slate,
  ...sage
};

export const darkColors = {
  text: 'white',
  background: slateDark.slate1,
  ...blueDark,
  ...slateDark,
  ...sageDark
};
