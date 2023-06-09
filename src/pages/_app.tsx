import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import Default from '@/components/Layout';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
      <Default>
        <Component {...pageProps} />
      </Default>
    </ThemeProvider>
  );
}
