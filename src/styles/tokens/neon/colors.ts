import { blue, blackA, slate } from '@radix-ui/colors';

const colors = {
  'ds-color__primary': '$ds-color__primary-09',
  'ds-color__primary-02': blue.blue2,
  'ds-color__primary-03': blue.blue3,
  'ds-color__primary-04': blue.blue4,
  'ds-color__primary-05': blue.blue5,
  'ds-color__primary-07': blue.blue7,
  'ds-color__primary-08': blue.blue8,
  'ds-color__primary-09': blue.blue9,
  'ds-color__primary-10': blue.blue10,
  'ds-color__primary-11': blue.blue11,
  'ds-color__primary-12': blue.blue12,

  'ds-color__text__low-contrast': slate.slate11,
  'ds-color__text__high-contrast': slate.slate12,

  'ds-color__background-app': '$ds-color__primary-02',
  'ds-color__background-element': 'white',

  'ds-color__gray-06': slate.slate6,
  'ds-color__gray-11': slate.slate11,

  'ds-color__blackA-05': blackA.blackA5,
  'ds-color__blackA-07': blackA.blackA7
};

export const neonTokens = {
  colors: { ...colors },
  shadows: {
    'ds-shadow__input__normal': `0 0 0 1px ${colors['ds-color__primary-07']}`,
    'ds-shadow__input__focused': `0 0 0 2px ${colors['ds-color__primary-08']}`,
    'ds-shadow__tab-root': `0 2px 10px ${colors['ds-color__blackA-05']}`,
    'ds-shadow__tab__active':
      'inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor',
    'ds-shadow__tab__active__focused': `0 0 0 2px ${colors['ds-color__primary-11']}`,
    'ds-shadow__tab-content__focused': `0px 0px 0px 2px ${colors['ds-color__primary-11']}`,

    'ds-shadow__button__focused': `0 0 0 2px ${colors['ds-color__primary-07']}`
  },
  spaces: {
    'ds-space-01': '5px',
    'ds-space-02': '10px',
    'ds-space-03': '15px',
    'ds-space-04': '20px'
  },
  fontSizes: {
    'ds-font-size__small': '13px',
    'ds-font-size__medium': '15px',
    'ds-font-size__large': '25px',
    'ds-font-size__huge': '60px'
  },
  lineHeights: {
    'ds-line-height__normal': 1,
    'ds-line-height__large': 1.5
  },
  radii: {
    'ds-radii__small': '5px'
  },
  transitions: {
    'ds-transition__default': '.3s ease',
    'ds-transition__fast': '.1s ease'
  }
};
