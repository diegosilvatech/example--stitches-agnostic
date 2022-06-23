import { css } from 'styles/stitches.config';

import { violet, blackA } from '@radix-ui/colors';

export const form = css({});

export const root = css({});

export const item = css({
  all: 'unset',
  backgroundColor: 'white',
  width: 25,
  height: 25,
  borderRadius: '100%',
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  '&:hover': { backgroundColor: violet.violet3 },
  '&:focus': { boxShadow: `0 0 0 2px black` }
});

export const indicator = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  position: 'relative',
  '&::after': {
    content: '""',
    display: 'block',
    width: 11,
    height: 11,
    borderRadius: '50%',
    backgroundColor: violet.violet11
  }
});

export const flex = css({ display: 'flex' });

export const label = css({
  fontSize: 15,
  lineHeight: 1,
  userSelect: 'none',
  paddingLeft: 15
});
