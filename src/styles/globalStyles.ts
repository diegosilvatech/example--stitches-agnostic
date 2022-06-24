import { globalCss } from 'styles/stitches.config';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0
  },
  '@font-face': [
    {
      fontFamily: 'Moranga',
      fontWeight: 700,
      src: 'local("Moranga"), url("fonts/moranga/MorangaBold.otf")'
    },
    {
      fontFamily: 'Epilogue',
      fontWeight: 300,
      src: 'local("EpilogueLight"), url("fonts/epilogue/EpilogueLight.ttf")'
    },
    {
      fontFamily: 'Epilogue',
      fontWeight: 400,
      src: 'local("EpilogueRegular"), url("fonts/epilogue/EpilogueRegular.ttf")'
    },
    {
      fontFamily: 'Epilogue',
      fontWeight: 500,
      src: 'local("EpilogueMedium"), url("fonts/epilogue/EpilogueMedium.ttf")'
    },
    {
      fontFamily: 'Epilogue',
      fontWeight: 700,
      src: 'local("EpilogueBold"), url("fonts/epilogue/EpilogueBold.ttf")'
    }
  ],
  body: {
    backgroundColor: '$ds-color__background-app',
    color: '$ds-color__text__high-contrast',
    fontFamily: "'Poppins', sans-serif"
  },
  button: {
    fontFamily: "'Poppins', sans-serif"
  }
});
