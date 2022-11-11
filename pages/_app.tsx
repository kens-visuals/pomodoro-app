import '../styles/globals.css';
import type { AppProps } from 'next/app';

// Context
import { StyleProvider } from '../contexts/StyleContext';
import { TimerProvider } from '../contexts/TimerContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyleProvider>
      <TimerProvider>
        <Component {...pageProps} />
      </TimerProvider>
    </StyleProvider>
  );
}
