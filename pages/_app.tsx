import '../styles/globals.css';
import type { AppProps } from 'next/app';

// Context
import { StyleProvider } from '../contexts/StyleContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyleProvider>
      <Component {...pageProps} />
    </StyleProvider>
  );
}
