import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import { globalStyles } from 'styles/globalStyles';
import { biorcTheme, meiFacilTheme } from 'styles/stitches.config';

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="neon"
      value={{
        neon: 'neon',
        biorc: biorcTheme.className,
        meiFacil: meiFacilTheme.className
      }}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
