import { red, blackA, slate } from '@radix-ui/colors';

const colors = {
  'color__primary-09': red.red9,

  'color__primary-10': red.red10,
  'color__primary-12': red.red12,

  color__background: 'white',

  'color__gray-06': slate.slate6,
  'color__gray-11': slate.slate11
};

export const biorcTokens = {
  colors: { ...colors },
  shadows: {
    smooth: `0 2px 10px ${blackA.blackA5}`
  }
};
